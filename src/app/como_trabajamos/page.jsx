'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import FrequentAskedQuestions from "@/components/FAQ";
import { useMediaQuery } from "@mui/material";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const questions = [
  {
    id: 'question01',
    title: 'Psicoterapia breve',
    answer: `Ingresan casos de baja a mediana complejidad. Se puede trabajar uno o dos objetivos según el motivo de consulta. Proceso terapéutico de 8 a 10 sesiones como máximo.`,
    bgColor: 'bg-blue'
  },
  {
    id: 'question02',
    title: 'Acompañamiento psicológico',
    answer: `Ingresan casos de baja complejidad. Se trabaja un objetivo terapéutico en concreto. Proceso de 2 a 4 sesiones de duración.`,
    bgColor: 'bg-red'
  },
  {
    id: 'question03',
    title: 'Grupos de acompañamiento',
    answer: `Espacio de contención, apoyo y compañía frente a problemáticas en torno a la salud mental de los estudiantes, mediante la realización de actividades lúdicas y conversación. No tiene criterios de exclusión y es de asistencia libre.`,
    bgColor: 'bg-green'
  },
  {
    id: 'question04',
    title: 'Grupo psicopedagógico',
    answer: `Espacio psicoeducativo grupal, participativo y enfocado en el bienestar académico, a través de la realización de sesiones con temáticas especificas como: organización del tiempo, estrategias de estudio, estrés y ansiedad académica, entre otras. Es con inscripción previa y cupos limitados.`,
    bgColor: 'bg-blue'
  },
  {
    id: 'question05',
    title: 'Grupo psicoterapéutico',
    answer: `Grupo psicoterapéutico de contención y crecimiento personal, que tiene como objetivo el desarrollo de herramientas y recursos personales, para así afrontar de manera sana las problemáticas de salud mental y la vida universitaria. Se ingresa por entrevista de despeje y tiene criterios de exclusión.`,
    bgColor: 'bg-red'
  },
  {
    id: 'question06',
    title: 'Atención psicopedagógica',
    answer: `Dispositivo orientado a apoyar y brindar herramientas al estudiantado para favorecer y mejorar los procesos de aprendizaje y el rendimiento académico.`,
    bgColor: 'bg-green'
  },
]

const IntervencionesClinicas = () => {
  const matches = useMediaQuery('(min-width:600px)');
  const [activeTab, setActiveTab] = useState('descripcion-general');

  // useEffect(() => {
  //   // Bootstrap JS requires window and document objects, which are not available in the Next.js SSR phase.
  //   if (typeof window !== "undefined" /* && typeof document !== "undefined" */) {
  //     require("bootstrap/dist/js/bootstrap.bundle.min.js");
  //   }
  // }, []);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <>
      <div className="row prevencion flex-column d-flex " >
        <div className="col-12" >
          <div className="card quienes-somos" style={{ padding: matches ? '0px 96px' : '120px 32px 0px', margin: '0px', border: 'none' }}>
            <div className="card-body" style={{ padding: '0px', margin: '0px' }}>
              <h3 className={matches ? "blog-title" : "blog-title-sm"} style={{ marginTop: !matches && '20px', fontSize: '48px', lineHeight: '60px', fontWeight: 700, textWrap: 'balance' }}>
                Intervenciones clínicas
              </h3>
              <div className="tab-content tab-dsme-content">
                <div id="descripcion-general">
                  {/* <h2>Descripción General</h2> */}
                  <div className="blog-content">
                    <p>
                      En el área de intervención clínica el equipo del Departamento de Salud Mental Estudiantil realiza contención y apoyo emocional, acompañamiento e intervenciones psicológicas individuales breves e intervención grupal terapéutica gratuitas, a todos/as aquellos/as estudiantes de pregrado de la universidad, que lo soliciten y que manifiesten dificultades de tipo emocional, relacional, social, de rendimiento académico y/o vocacional.
                    </p>
                    <p>
                      En caso de requerir una atención especializada, de urgencia o de largo plazo, se realizan derivaciones a las instancias pertinentes con convenio UDP o al sistema de salud público o privado, según sea la previsión de cada estudiante. El/la estudiante derivado/a, mantendrá atenciones en el DSME hasta que ingrese formalmente al tratamiento en el lugar de derivación determinado, para así resguardar su bienestar.
                    </p>

                  </div>

                  <FrequentAskedQuestions questions={questions} />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card quienes-somos" style={{ padding: matches ? '0px 96px' : '20px 32px 0px', margin: '0px', border: 'none', background: '#f1f1f1' }}>
        <Section
          title={'¿Qué es la entrevista de despeje?'}
          image={'https://github.com/Niennis/imagesudp/blob/main/intervenciones_entrevista_despeje.jpg?raw=true'}
          left={false}
          bgColor={'#f1f1f1'}
        ><>
            <p style={{
              color: '#000',
              fontSize: '20px',
              lineHeight: '28px',
              fontFamily: 'sailec'
            }}>Cuando agendas una hora, estás agendando para una entrevista inicial de despeje. En esta entrevista se indaga sobre la solicitud de atención y características de la situación, como grado de sintomatología, recursos personales, redes de apoyo, entre otros.
            </p>
            <p style={{
              color: '#000',
              fontSize: '20px',
              lineHeight: '28px',
              fontFamily: 'sailec'
            }}>A partir de la entrevista inicial de despeje se define cuál es el camino más adecuado para las características particulares del o la estudiante, pudiendo ingresar a acompañamiento psicológico, psicoterapia breve, atención psicopedagógica, grupo psicoterapéutico o derivación externa.</p></>
        </Section>

      </div>
      <div className="card quienes-somos" style={{ padding: matches ? '0px 96px' : '20px 32px 0px', margin: '0px', border: 'none', background: '#ffffff' }}>
        <Section
          title={'Intervenciones grupales'}
          image={'https://github.com/Niennis/imagesudp/blob/main/promocion_prevencion_cabecera.jpg?raw=true'}
          left={true}
          bgColor={'#ffffff'}
        >
          <>
            <p style={{
              color: '#000',
              fontSize: '20px',
              lineHeight: '28px',
              fontFamily: 'sailec'
            }}>Las intervenciones grupales en el Plan de Salud Mental Universitaria de la Universidad Diego Portales incluyen varias modalidades destinadas a apoyar a los estudiantes en aspectos específicos de su bienestar mental y académico. Se organizan grupos psicoterapéuticos, psicopedagógicos, y de acompañamiento.
            </p>
            <p style={{
              color: '#000',
              fontSize: '20px',
              lineHeight: '28px',
              fontFamily: 'sailec'
            }}>Estos grupos ofrecen sesiones enfocadas en temas como el manejo de la ansiedad, estrategias de estudio y apoyo emocional, promoviendo habilidades y estrategias dentro de un ambiente colaborativo y de apoyo mutuo entre los participantes.
            </p>
          </>
        </Section>
      </div>

      <div className="card quienes-somos" style={{ padding: matches ? '0px' : '20px 32px 0px', margin: '0px', border: 'none', background: '#f1f1f1' }}>
        <Section
          title={'Intervenciones psicoeducativas'}
          image={'https://github.com/Niennis/imagesudp/blob/main/intervenciones_clinicas_psicoeducativas.jpg?raw=true'}
          left={false}
          bgColor={'#f1f1f1'}
        >
          <>
            <p style={{
              color: '#000',
              fontSize: '20px',
              lineHeight: '28px',
              fontFamily: 'sailec'
            }}>Intervenciones psicoeducativas dirigidas, cuyo objetivo es abordar temáticas que las escuelas u otros departamentos de la Universidad consideren relevantes para el desempeño académico y la salud mental de los y las estudiantes.</p>
          </>
        </Section>
      </div>
    </>
  )
}

export default IntervencionesClinicas;