'use client'
import FlipCard from "@/components/FlipCard";
import ImageSlider from "@/components/ImageSlider";
import { blogs } from "@/utils/blogs";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@mui/material";
import { FaArrowLeft } from "react-icons/fa";
import FooterDae from "@/components/Footer";
import SimpleBackdrop from "@/components/Backdrop";
import { saludMental03 } from "@/components/imagepath";
import Image from "next/image";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { FaDownload } from "react-icons/fa";

const material_descargable = [
  {
    titulo: 'Estrés Académico',
    descripcion: 'A veces creemos que sentir estrés en la universidad es signo de "debilidad" y muchas veces somos juzgados por lo mismo. ¿Pero sabías que puede ser un sentir propio de una situación nueva y de un proceso de aprendizaje?',
    archivo: 'https://saludmentalestudiantil.udp.cl/wp-content/uploads/2023/10/Que-es-el-estres-academico.pdf'
  },
  {
    titulo: 'Estrategias para el Estrés',
    descripcion: 'Aquí encontrarás algunas estrategias de afrontamiento ante situaciones estresantes, que te pueden servir tanto en tu trayectoria universitaria como en tu quehacer diario.',
    archivo: 'https://saludmentalestudiantil.udp.cl/wp-content/uploads/2023/10/Como-afrontar-el-estres-academico.pdf'
  },
  {
    titulo: 'Depresión Estudiantil',
    descripcion: '¿Hablemos de depresión?',
    archivo: 'https://saludmentalestudiantil.udp.cl/wp-content/uploads/2023/10/hablemos-de-depresion-estudiantil.pdf'
  },
  {
    titulo: 'Alteraciones Psicológicas',
    descripcion: '¿Qué alteraciones y/o manifestaciones psicológicas puedo sentir siendo estudiante universitario?',
    archivo: 'https://saludmentalestudiantil.udp.cl/wp-content/uploads/2023/10/%C2%BFQue.pdf'
  },
  {
    titulo: 'Factores Protectores',
    descripcion: 'Poco se habla de esas prácticas que es sano llevar a cabo cuando estamos en un proceso de aprendizaje. Aquí te dejamos algunas de ellas.',
    archivo: 'https://saludmentalestudiantil.udp.cl/wp-content/uploads/2023/10/%C2%BFQue.pdf'
  },
  {
    titulo: 'Crisis de Ansiedad',
    descripcion: 'Te ayudamos con una técnica práctica pero esos momentos donde identificas que te puede dar o te está dando una crisis de ansiedad.',
    archivo: 'https://saludmentalestudiantil.udp.cl/wp-content/uploads/2023/10/Infografia-Grounding.pdf'
  },
  {
    titulo: 'Manual de Autocuidado',
    descripcion: 'El Departamento de Salud Mental Estudiantil (DSME) creó para la comunidad este Manual de Autocuidado que contiene diversas estrategias que te pueden servir.',
    archivo: 'https://saludmentalestudiantil.udp.cl/wp-content/uploads/2023/11/230905_UDP_ManualAutocuidado-1.pdf'
  },
  {
    titulo: 'Prevensión del suicidio en Universitarios: ¿Qué debes saber?',
    descripcion: 'El Departamento de Salud Mental Estudiantil (DSME) creó para la comunidad este Manual de Autocuidado que contiene diversas estrategias que te pueden servir.',
    archivo: 'https://drive.google.com/file/d/1bSTiIa0hfuxDUBkEdpIESlyevdihrzQW/view'
  },
  {
    titulo: 'Depresión en Universitarios: ¿Qué es?, sintomatología y factores protectores',
    descripcion: 'El Departamento de Salud Mental Estudiantil (DSME) creó para la comunidad este Manual de Autocuidado que contiene diversas estrategias que te pueden servir.',
    archivo: 'https://drive.google.com/file/d/1ipMa0gTHavUkJ3MtsqPrQf3GfrFYxLdj/view'
  },
  {
    titulo: 'Ataques de pánico: ¿Qué hacer?',
    descripcion: 'El Departamento de Salud Mental Estudiantil (DSME) creó para la comunidad este Manual de Autocuidado que contiene diversas estrategias que te pueden servir.',
    archivo: 'https://drive.google.com/file/d/1Ns-c8pRyu1bsgWvNXWB9sdBEo-IX5E5B/view'
  },
]
const ordenarPorTitulo = (array) =>
  array.sort((a, b) => a.titulo.localeCompare(b.titulo, 'es', { sensitivity: 'base' }));

const downloadsArray = blogs.flatMap(item => item.downloads);
const materialOrdenado = ordenarPorTitulo(downloadsArray);

const dividirArrayPorPosiciones = (array) => {
  return array.reduce((result, elemento, indice) => {
    result[indice % 2].push(elemento);
    return result;
  }, [[], []]);
}

const [pares, impares] = dividirArrayPorPosiciones(materialOrdenado);

export default function MaterialDescargable() {
  const matches = useMediaQuery('(min-width:600px)');
  const router = useRouter()

  return (
    <>
      {matches && <div style={{
        height: '620px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_IMG}saludMental03.jpeg${process.env.NEXT_PUBLIC_KEY_IMG}`}
          alt="Quienes somos cabecera"
          height={0}
          width={0}
          sizes="100vw"
          fill
          priority // Carga optimizada para imágenes importantes
          style={{
            objectFit: 'cover',
            objectPosition: 'center center',
            height: '100%',
            width: '100%',
          }}
        />
      </div>
      }
      <div className="row flex-column d-flex  sailec" style={{ margin: 0, padding: 0 }}>
        <div className="col-12" style={{ padding: matches ? '0 96px 20px' : '98px 32px 20px' }}>
          <div>
            {matches &&
              <button className='btn mt-4 mb-5'
                style={{
                  border: '1px solid #A6A6A6',
                  height: '56px',
                  width: '163px',
                  padding: '0px 24px',
                  borderRadius: '100px',
                }}
                onClick={() => router.back()}
              >
                <FaArrowLeft /> Volver
              </button>
            }
            <div className="card-body flex-row d-flex">
              <h2 className={matches ? 'blog-title' : 'blog-title-sm'}>
                Material descargable
              </h2>
            </div>

            <div className={`card-body flex-md-column flex-lg-row d-flex  ${matches ? 'blog-text' : 'blog-text-sm'}`} >
              <p>
                El Departamento de Salud Mental Estudiantil de UDP (DSME) está constantemente elaborando material para poder prevenir y promocionar el bienestar integral de la comunidad educativa. A continuación, te dejamos algunos documentos que pueden servirte a ti o a alguien que conoces.
              </p>
            </div>

            <div className="row" style={{ margin: 0 }}>
              <div className="col-12 col-lg-6 card-body flex-column d-flex justify-content-start  align-items-center" style={{ gap: '20px', width: matches ? '45%' : '', marginRight: matches ? '10px' : 'auto' }}>
                {pares.map(item => (
                  <div className="col-12" key={item.titulo}>
                    <Accordion>
                      <AccordionSummary
                        className="sailec-medium"
                        sx={{ bgcolor: '#99D6E9', color: 'black' }}
                        expandIcon={<ExpandMoreIcon sx={{ color: 'black' }} />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                      >
                        {item.titulo}
                      </AccordionSummary>
                      <AccordionDetails sx={{ bgcolor: '#E6E9EC' }} className="lato">
                        {item.bajada}
                      </AccordionDetails>
                      <AccordionActions sx={{ bgcolor: '#E6E9EC' }}>
                        <Button>
                          <a href={`/downloads/${item.url}`} download={item.url} className='material-descargable-btn'>
                            Descargar <FaDownload />
                          </a>
                        </Button>
                      </AccordionActions>
                    </Accordion>
                  </div>
                ))}
              </div>

              <div className="col-12 col-lg-6 card-body flex-column d-flex  justify-content-start align-items-center" style={{ gap: '20px', width: matches ? '45%' : '', marginLeft: matches ? '10px' : 'auto', marginTop: matches ? '' : '20px' }}>
                {impares.map(item => (
                  <div className="col-12" key={item.titulo}>
                    <Accordion>
                      <AccordionSummary
                        className="sailec-medium"
                        sx={{ bgcolor: '#99D6E9', color: 'black' }}
                        expandIcon={<ExpandMoreIcon sx={{ color: 'black' }} />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                      >
                        {item.titulo}
                      </AccordionSummary>
                      <AccordionDetails sx={{ bgcolor: '#E6E9EC' }} className="lato">
                        {item.bajada}
                      </AccordionDetails>
                      <AccordionActions sx={{ bgcolor: '#E6E9EC' }}>
                        <Button>
                          <a href={`/downloads/${item.url}`} download={item.url} className='material-descargable-btn'>
                            Descargar <FaDownload />
                          </a>
                        </Button>
                      </AccordionActions>
                    </Accordion>
                  </div>
                ))}
              </div>


            </div>
          </div>
        </div>
      </div>
      <FooterDae matches={matches} />
    </>

  );
}
