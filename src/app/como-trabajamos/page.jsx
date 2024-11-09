'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import FrequentAskedQuestions from "@/components/FAQ";
import { useMediaQuery } from "@mui/material";

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
  const isSmallSize = useMediaQuery('(max-width:389px')
  const isMediumSize = useMediaQuery('(min-width:768px)');
  const isLargeSize = useMediaQuery('(min-width:1024px)');
  const [activeTab, setActiveTab] = useState('descripcion-general');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <>
      <div className="row prevencion flex-column d-flex m-0 p-0" >
        <div className="col-12 m-0 p-0">
          <div className="card quienes-somos"
            style={{
              padding: isMediumSize ? '0px 96px' : '0px 32px',
              margin: '0px',
              border: 'none',
            }}>
            <div className="card-body m-0 p-0">
              <h3 className={isSmallSize ? "header-2-bold" : isMediumSize ? "mega-bold" : "header-1-bold"} style={{ marginTop: !isMediumSize && '120px', textWrap: 'balance' }}>
                Intervenciones clínicas
              </h3>
              <div className="tab-content tab-dsme-content">
                <div id="descripcion-general">
                  {/* <h2>Descripción General</h2> */}
                    
                  <div className={` ${isSmallSize  ? "body-regular" : "header-3-regular"}`} >
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

      <div className="card quienes-somos" style={{ padding: isMediumSize ? '0px 96px' : '20px 32px 0px', margin: '0px', border: 'none', background: '#f1f1f1' }}>
        <Section
          title={'¿Qué es la entrevista de despeje?'}
          image={`${process.env.NEXT_PUBLIC_BASE_IMG}intervenciones_entrevista_despeje.jpg${process.env.NEXT_PUBLIC_KEY_IMG}`}
          left={false}
          bgColor={'#f1f1f1'}
        ><>
            <p className={` ${isSmallSize  ? "body-regular" : "header-3-regular"}`}>Cuando agendas una hora, estás agendando para una entrevista inicial de despeje. En esta entrevista se indaga sobre la solicitud de atención y características de la situación, como grado de sintomatología, recursos personales, redes de apoyo, entre otros.
            </p>
            <p className={` ${isSmallSize  ? "body-regular" : "header-3-regular"}`}>A partir de la entrevista inicial de despeje se define cuál es el camino más adecuado para las características particulares del o la estudiante, pudiendo ingresar a acompañamiento psicológico, psicoterapia breve, atención psicopedagógica, grupo psicoterapéutico o derivación externa.</p></>
        </Section>

      </div>
      <div className="card quienes-somos" style={{ padding: isMediumSize ? '0px 96px' : '20px 32px 0px', margin: '0px', border: 'none', background: '#ffffff' }}>
        <Section
          title={'Intervenciones grupales'}
          image={`${process.env.NEXT_PUBLIC_BASE_IMG}promocion_prevencion_cabecera.jpg${process.env.NEXT_PUBLIC_KEY_IMG}`}
          left={true}
          bgColor={'#ffffff'}
        >
          <>
            <p className={` ${isSmallSize  ? "body-regular" : "header-3-regular"}`}>Las intervenciones grupales en el Plan de Salud Mental Universitaria de la Universidad Diego Portales incluyen varias modalidades destinadas a apoyar a los estudiantes en aspectos específicos de su bienestar mental y académico. Se organizan grupos psicoterapéuticos, psicopedagógicos, y de acompañamiento.
            </p>
            <p className={` ${isSmallSize  ? "body-regular" : "header-3-regular"}`}>Estos grupos ofrecen sesiones enfocadas en temas como el manejo de la ansiedad, estrategias de estudio y apoyo emocional, promoviendo habilidades y estrategias dentro de un ambiente colaborativo y de apoyo mutuo entre los participantes.
            </p>
          </>
        </Section>
      </div>

      <div className="card quienes-somos" style={{ padding: isMediumSize ? '0px 96px' : '20px 32px 0px', margin: '0px', border: 'none', background: '#f1f1f1' }}>
        <Section
          title={'Intervenciones psicoeducativas'}
          image={`${process.env.NEXT_PUBLIC_BASE_IMG}intervenciones_clinicas_psicoeducativas.jpg${process.env.NEXT_PUBLIC_KEY_IMG}`}
          left={false}
          bgColor={'#f1f1f1'}
        >
          <>
            <p className={` ${isSmallSize  ? "body-regular" : "header-3-regular"}`}>Intervenciones psicoeducativas dirigidas, cuyo objetivo es abordar temáticas que las escuelas u otros departamentos de la Universidad consideren relevantes para el desempeño académico y la salud mental de los y las estudiantes.</p>
          </>
        </Section>
      </div>
    </>
  )
}

export default IntervencionesClinicas;