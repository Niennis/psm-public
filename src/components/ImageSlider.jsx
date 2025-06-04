'use client'
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CircleRounded } from "@mui/icons-material";
import { Grid, Box, Typography, Tab, Tabs, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MdOutlineChromeReaderMode } from "react-icons/md";
import { blogs } from "@/utils/blogs";
import { fetchBlogs } from "@/services/BlogServices";
import './ImageSlider.css';


const normalizarTexto = (texto) => {
  // Expresiones regulares dinámicas para base y key
  const baseRegex = new RegExp(`(${process.env.NEXT_PUBLIC_BASE_IMG})`, "i");
  const removeInterrogationMark = process.env.NEXT_PUBLIC_KEY_IMG.split('?')[1]
  const keyRegex = new RegExp(removeInterrogationMark, "i");

  // Expresión regular para la URL (nombre de archivo de imagen con extensión)
  const urlRegex = /(\b\w+\.(jpg|png|gif|jpeg|webp)\b)/i;

  // Extraer las partes
  const baseMatch = texto.match(baseRegex);
  const urlMatch = texto.match(urlRegex);
  const keyMatch = texto.match(keyRegex);

  // Verificar que cada parte esté presente
  if (!baseMatch || !urlMatch || !keyMatch) {
    throw new Error("El texto no contiene base, url o key válidos.");
  }

  // Obtener los valores únicos (en caso de que haya duplicados)
  const base = baseMatch[1];
  const url = urlMatch[1];
  const key = keyMatch[1];

  // Reconstruir el texto en el orden correcto
  return `${base} ${url} ${key}`;
}

const prepareImg = (src) => {
  const match_base = src.match(new RegExp(process.env.NEXT_PUBLIC_BASE_IMG)) || [];
  const removeInterrogationMark = process.env.NEXT_PUBLIC_KEY_IMG.split('?')[1]
  const match_key = src.match(new RegExp(removeInterrogationMark)) || []

  if (match_base.length > 1 || match_key.length > 1) {
    normalizarTexto(src)
  } else if (src.includes(process.env.NEXT_PUBLIC_BASE_IMG) && src.includes('https://reposaludmental.blob.core.windows.net/test/') && !src.includes(process.env.NEXT_PUBLIC_KEY_IMG)) {

    return `/api/file-proxy?filePath=${src}`
  } else if (src.includes(process.env.NEXT_PUBLIC_BASE_IMG) && src.includes(process.env.NEXT_PUBLIC_KEY_IMG)) {
    const removeKey = src.split('?')[0]
    return `/api/file-proxy?filePath=${removeKey}`
  } else if (src.includes(process.env.NEXT_PUBLIC_BASE_IMG) && !src.includes(process.env.NEXT_PUBLIC_KEY_IMG)) {

    return `/api/file-proxy?filePath=${src}`
  } else if (src.includes(process.env.NEXT_PUBLIC_KEY_IMG) && !src.includes(process.env.NEXT_PUBLIC_BASE_IMG)) {

    return `/api/file-proxy?filePath=${process.env.NEXT_PUBLIC_BASE_IMG}${src}`
  } else if (!src.includes(process.env.NEXT_PUBLIC_BASE_IMG) && !src.includes(process.env.NEXT_PUBLIC_KEY_IMG)) {

    return `/api/file-proxy?filePath=${process.env.NEXT_PUBLIC_BASE_IMG}${src}`
  }
}

const theme = createTheme({
  palette: {
    primary: {
      light: '#ff7961',
      main: '#ffffff',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const styles = [
  {
    id: 0,
    key: 'banner01',
    color: '#3886FF',
    border: '#A5C8FF',
  },
  {
    id: 1,
    key: 'banner02',
    color: '#FABB00',
    border: '#FFCB7E',
  },
  {
    id: 2,
    key: 'banner03',
    color: '#1ABC9C',
    border: '#73CDCD',
  },
  {
    id: 3,
    key: 'banner04',
    color: '#B82925',
    border: '#FF5253',
  },

]

const estimateReadingTime = text => {
  const wordsPerMinute = 250;
  const words = text.split(/\s+/).length;
  const readingTimeMinutes = words / wordsPerMinute;

  return Math.ceil(readingTimeMinutes);
}

const CustomTabPanel = ({ children, value, index, isShort, isMediumDevice }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{ height: '100%' }}
    >
      {value === index && (
        <Box sx={{ p: 1, height: '100%' }}>
          <Typography
            className={`${isMediumDevice ? "ui-large" : "ui-large"}`}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              height: '100%',
              justifyContent: 'space-around'
            }}
          >{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ImageSlider = ({ innerRef }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slides, setSlides] = useState()
  // const [slides, setSlides] = useState(blogs.slice(0, 4))
  const [isShort, setIsShort] = useState(false);
  const totalSlides = 4;
  // const totalSlides = slides?.length;
  const timeoutRef = useRef(null);

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [idBlog, setIdBlog] = useState(0)
  const [data, setData] = useState(null)
  const [apiCall, setApiCall] = useState(false); // Nueva bandera

  const [value, setValue] = useState(0);

  const isSmallDevice = useMediaQuery("max-width : 767px");
  const isMediumDevice = useMediaQuery("(min-width : 768px) and (max-width: 1280px");
  const isLargeDevice = useMediaQuery("(min-width : 1281px)");
  const isShortDevice = useMediaQuery("(max-height: 600px)")

  const isWideScreen = useMediaQuery("(min-aspect-ratio: 1.7")
  const isTooWide = useMediaQuery("(min-aspect-ratio: 2")
  const aspectRatio = window.innerWidth / window.innerHeight;

  const fetch = async () => {
    if (!apiCall) {
      try {
        const response = await fetchBlogs();
        setApiCall(true); // Marca que ya se hizo la Call
        const blogs = response.slice(0, 4).reverse();
        //  const blogs = response.slice(-4).reverse();

        setSlides(blogs)
        setTitle(blogs[0].blog_titulo)
        setContent(blogs[0].blog_bajada)
        setIdBlog(blogs[0].blog_id)
      } catch (error) {
        console.log('Error:', error.message);
      }
    }
  }

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    // Función para manejar el cambio de slide
    const changeSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      goToNext()
    };

    fetch()

    // Función para manejar el cambio de tamaño de la ventana
    const handleResize = () => {
      const height = window.innerHeight;

      if (height < 900) {
        setIsShort(true);
        // } else if (height < 1450) {
        //   setIsShort(true);
      } else {
        setIsShort(false);
      }
    };

    // Configurar el timeout para cambiar el slide cada 8 segundos
    resetTimeout();
    timeoutRef.current = setTimeout(changeSlide, 8000);

    // Agregar el event listener para el cambio de tamaño de la ventana
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize(); // Llama a handleResize inicialmente para configurar el tamaño correcto
    }

    // Cleanup: Limpia el timeout y el event listener cuando el componente se desmonte o los valores dependientes cambien
    return () => {
      resetTimeout();
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, totalSlides, apiCall]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const truncateWords = (text, num) => {
    if (text.length <= num) return text;

    const sliced = text.slice(0, num);
    const indexLastBlankSpace = sliced.lastIndexOf(' ');
    return `${sliced.slice(0, indexLastBlankSpace)}...`;
  }

  const truncateTablet = (text) => {
    if (isMediumDevice) {
      return truncateWords(text, 100)
    } else {
      return truncateWords(text, 200)
    }
  }

  const imgHeightMobile = '80vh'
  const imgHeightDesktop = '100vh'

  const slideStylesMobile = {
    backgroundColor: styles[currentIndex].color,
    width: '100%',
    height: 'calc(100vh - 98px)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }
  // Carrusel
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    setTitle(slides[newIndex].blog_titulo)
    setContent(truncateWords(slides[newIndex].blog_bajada, 205))
    // setColor(styles[newIndex].color)
    setIdBlog(slides[newIndex].blog_id)
  }
  // Seleccionar artículo
  const goToSlide = slideIndex => {
    setCurrentIndex(slideIndex)
    setTitle(slides[slideIndex].blog_titulo)
    setContent(truncateWords(slides[slideIndex].blog_bajada, 205))
    // setColor(styles[slideIndex].color)
    setIdBlog(slides[slideIndex].blog_id)
  }

  const boxStyleDesktop = {
    alignItems: 'flex-start',
    backgroundColor: '#00000089',
    display: 'flex',
    height: 'calc(100vh - 98px)',
    marginTop: 'calc(-100vh + 98px)',
    textWrap: 'pretty',
    width: '100%',
    zIndex: 99999,
  }

  const boxStyleMobile = {
    display: 'flex',
    height: 'calc(100vh - 98px)',
    marginTop: 'calc(-100vh + 98px)',
    padding: '0 16px',
    textWrap: 'pretty',
    width: '100vw',
  }

  return (
    <div id="inicio" className={isLargeDevice ? 'slider-styles slider-styles-desktop' : 'slider-styles slider-styles-mobile'} ref={innerRef} >

      {/* {isMediumSize ? */}
      {slides &&
        <div className="desktop-container">
          {/* DESKTOP */}
          <div className="slide-styles" style={{ height: 'calc(100vh - 98px)' }} >
            <Image
              src={prepareImg(slides[currentIndex].blog_imagen)}
              alt={slides[currentIndex].blog_imagen}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              className="slide-img "
            />
          </div>

          <Box sx={boxStyleDesktop}>
            <div className="row" >
              <div className="col-sm-12" style={{
                width: 'calc(100vw - 60px)',
                marginLeft: '60px'
              }}>
                <div className={`d-flex flex-column  ${!isWideScreen || !isLargeDevice ? "col-12" : "col-10"}`}>
                  <h2
                    className={`${!isLargeDevice && isWideScreen ? "mega-bold" : !isLargeDevice && !isWideScreen ? "mega-bold" : isLargeDevice && isTooWide ? "mega-bold" : "mega-title"} mt-5 font-white`}
                  >
                    {slides[currentIndex].blog_titulo}
                  </h2>
                  <p className="font-white title-medium">
                    <MdOutlineChromeReaderMode style={{ marginTop: '-3px' }} /> {estimateReadingTime(slides[currentIndex].blog_bajada)} min.
                  </p>
                </div>
              </div>
            </div>
          </Box>

          {/* BOX WITH BAJADA */}
          <div
            key={slides[currentIndex].blog_titulo}
            className="col col-3 title-regular"
            style={{
              borderBottom: '1px solid white',
              height: '12em',
              marginTop: 'calc(-12em - 97px)',
              marginLeft: `calc(25vw * ${currentIndex})`,
              backgroundColor: styles[currentIndex].color,
              color: "#fff",
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <CustomTabPanel
              value={currentIndex}
              index={currentIndex}
              isShort={isShort}
              isMediumDevice={isMediumDevice}
            >
              {truncateTablet(slides[currentIndex].blog_bajada)}
              <Link href={`/blog/${idBlog}`}>
                <button
                  className={`font-white ui-medium submit-form me-2 ${'btn-' + currentIndex}`}
                  style={{

                    display: 'block',
                    padding: '0 20px',
                    height: '56px',
                    backgroundColor: styles[currentIndex].color,
                    border: `1px solid ${styles[currentIndex].border}`,
                    borderRadius: '100px',
                  }}> Ver más + </button>
              </Link>
            </CustomTabPanel>
          </div>
          <ThemeProvider theme={theme}>

            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              textColor="primary"
              indicatorColor="white"
            >
              {slides.map((slide, slideIndex) => (
                <Tab
                  key={slideIndex}
                  className={`col-3 white_menu_urls ${isLargeDevice ? "header-2-medium" : "ui-large"}`}
                  onClick={() => goToSlide(slideIndex)}
                  sx={{
                    alignItems: 'baseline',
                    bgcolor: styles[slideIndex].color,
                    color: '#fff',
                    fontSize: isMediumDevice ? '12px' : isShort ? '20px' : '24px',
                    fontWeight: 700,
                    height: '97px',
                    lineHeight: isMediumDevice ? '22px' : '32px',
                    maxWidth: 'unset',
                    textAlign: 'left',
                    textTransform: 'capitalize',

                  }}
                  label={slide.blog_titulo}
                  {...a11yProps(slideIndex)}
                />
              ))}
            </Tabs>
          </ThemeProvider>
        </div>
      } {/* : */}

      {/* MOBILE */}
      {slides && <div className="mobile-container">
        <div style={slideStylesMobile}></div>
        <Box sx={boxStyleMobile}>
          <div className="row" >
            <div className="col-sm-12" style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }
            }>
              {/* <div style={{ minHeight: '30vh' }}> */}
              <h2 className={`${isShort ? "header-2-bold" : "header-1-bold"} font-white mt-3`} >{title}</h2>
              <p className={`${isShort ? "body-regular" : "body-large-medium"} font-white`}>
                {content.slice(0, 205)}
              </p>
              {/* </div> */}
              <Grid
                container
                direction="column"
                justifyContent="flex-end"
                alignItems="flex-end"
                sx={{
                  width: '90vw',
                  height: '40vh',
                }}
              >
                <Link href={`/blog/${idBlog}`} style={{display: 'block'}}>
                  <button
                    className="font-white submit-form me-2 lato-btn btn-slide-mobile "> Ver más + </button>
                </Link>
                <Image
                  src={prepareImg(slides[currentIndex].blog_imagen)}
                  alt={slides[currentIndex].blog_imagen}
                  priority
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="slide-img-mobile"
                  style={{
                    height: '31vh',
                  }}
                />
              </Grid>
              <div className='dots-container-styles'>
                {slides.map((slide, slideIndex) => (
                  <div
                    key={slideIndex}
                    className={isShort ? "dot-styles-short" : "dot-styles-large"}
                    onClick={() => goToSlide(slideIndex)}
                  >
                    <CircleRounded sx={{ fontSize: '16px', color: slideIndex === currentIndex ? '#A6A6A6' : '#FFF' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Box>


      </div>}
      {/* } */}
    </div>
  )
}

export default ImageSlider;