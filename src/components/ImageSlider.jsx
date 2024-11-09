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
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography
            className={`${ isMediumDevice ? "ui-large": "title-regular" }`}
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
  const [slides, setSlides] = useState(blogs.slice(0, 4))
  const [isShort, setIsShort] = useState(false);
  const totalSlides = slides.length;
  const timeoutRef = useRef(null);

  const [title, setTitle] = useState(blogs[0].blog_titulo)
  const [content, setContent] = useState(blogs[0].blog_bajada)
  const [idBlog, setIdBlog] = useState(blogs[0].blog_id)
  const [data, setData] = useState(null)
  const [apiCall, setApiCall] = useState(false); // Nueva bandera

  const [value, setValue] = useState(0);

  const isSmallDevice = useMediaQuery("max-width : 767px)");
  const isMediumDevice = useMediaQuery("(min-width : 768px) and (max-width: 1024px");
  const isLargeDevice = useMediaQuery("(min-width : 1025px)");
  const isShortDevice = useMediaQuery("(max-height: 700px)")

  const fetch = async () => {
    // if (!apiCall) {
    //   try {
    //     const response = await fetchBlogs();
    //     // const result = await response.json();
    //     setData(response);
    //     setApiCall(true); // Marca que ya se hizo la Call
    //     // console.log('RESULT', response)
    //   } catch (error) {
    //     console.log('ERRORSH', error.message);
    //   }
    // }
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
  if(isMediumDevice  ) {
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
    height: isShortDevice ? '100vh' : imgHeightMobile,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    setTitle(slides[newIndex].blog_titulo)
    setContent(truncateWords(slides[newIndex].blog_bajada, 205))
    // setColor(styles[newIndex].color)
    setIdBlog(slides[newIndex].blog_id)
  }

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
    height: imgHeightDesktop,
    margin: `calc(-${imgHeightDesktop} - ${isLargeDevice ? "150px": "50px"}) auto 0px`,
    padding: '150px 0 32px 0',
    textWrap: 'pretty',
    width: '100%',
    zIndex: 99999,
  }

  const boxStyleMobile = {
    display: 'flex',
    height: isShortDevice ? '100vh' : imgHeightMobile, // 100vh si es chico, imgHeightMobile si es grande
    marginTop: isShortDevice ? '-100vh' : 'calc(-80vh)', // -100vh si es chico, 'calc(-100vh + 150px)' si es grande
    padding: '24px 16px',
    textWrap: 'pretty',
    width: '100vw',
  }

  return (
    <div id="inicio" className={isMediumDevice ? 'slider-styles slider-styles-desktop' : 'slider-styles slider-styles-mobile'} ref={innerRef}>

      {/* {isMediumSize ? */}
      <div className="desktop-container">
        {/* DESKTOP */}
        <div className="slide-styles" >
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_IMG}${slides[currentIndex].blog_imagen}${process.env.NEXT_PUBLIC_KEY_IMG}`}
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
              <div className="d-flex flex-column col-10">
                <h2
                  className={`${isLargeDevice ? "mega-title" : "mega-bold"} mt-5 font-white`}
                >
                  {slides[currentIndex].blog_titulo}
                </h2>
                <p className="font-white title-medium">
                  <MdOutlineChromeReaderMode style={{ marginTop: '-3px' }} /> {estimateReadingTime(slides[currentIndex].blog_texto)} min.
                </p>
              </div>
              <Grid
                container
                direction="row"
              >
                <Link href={`/blog/${idBlog}`}>
                  <button
                    className={`font-white ui-medium submit-form me-2 ${'btn-' + currentIndex}`}
                    style={{
                      width: '209px',
                      height:  '56px',
                      backgroundColor: styles[currentIndex].color,
                      border: `1px solid ${styles[currentIndex].border}`,
                      borderRadius: '100px',
                    }}> Ver más + </button>
                </Link>
              </Grid>
            </div>
          </div>
        </Box>
        <div
          key={slides[currentIndex].key}
          className="col col-3 title-regular"
          style={{
            borderBottom: '1px solid white',
            height: isShort ? '180px' : '200px',
            marginTop: isShort ? '-210px' : '-240px',
            marginLeft: `calc(25vw * ${slides[currentIndex].blog_id})`,
            backgroundColor: styles[currentIndex].color,
            color: "#fff",
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <CustomTabPanel
            value={slides[currentIndex].key}
            index={slides[currentIndex].key}
            isShort={isShort}
            isMediumDevice={isMediumDevice}
          >
            { truncateTablet(slides[currentIndex].blog_bajada)}
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
                className={`col-3 white_menu_urls ${isLargeDevice ? "header-2-bold" : "title-medium"}`}
                onClick={() => goToSlide(slideIndex)}
                sx={{
                  alignItems: 'baseline',
                  bgcolor: styles[slideIndex].color,
                  color: '#fff',
                  fontSize: isMediumDevice ? '16px' : isShort ? '20px' : '24px',
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
      </div> {/* : */}

      {/* MOBILE */}
      <div className="mobile-container">
        <div style={slideStylesMobile}></div>
        <Box sx={boxStyleMobile}>
          <div className="row" >
            <div className="col-sm-12" style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
            }
            }>
              {/* <div style={{ minHeight: '30vh' }}> */}
              <h2 className={`${isShort ? "header-3-bold" : "header-1-bold"} font-white`} >{title}</h2>
              <p className={`${isShort ? "body-regular" : "body-large-medium"} font-white`}>
                {content.slice(0, 205)}
              </p>
              {/* </div> */}
              <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="baseline"
                sx={{ width: '90vw' }}
              >
                <Link href={`/blog/${idBlog}`}>
                  <button
                    className="font-white submit-form me-2 lato-btn btn-slide-mobile "> Ver más + </button>
                </Link>
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_IMG}${slides[currentIndex].blog_imagen}${process.env.NEXT_PUBLIC_KEY_IMG}`}
                  alt={slides[currentIndex].blog_imagen}
                  priority
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="slide-img-mobile"
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


      </div>
      {/* } */}
    </div>
  )
}

export default ImageSlider;