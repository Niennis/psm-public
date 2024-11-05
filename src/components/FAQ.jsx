import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useMediaQuery } from "@mui/material";
import { AddCircleOutlineOutlined, RemoveCircleOutline } from '@mui/icons-material';


const questions = [
  {
    id: 'question01',
    title: '¿Cómo se solicita hora de atención?',
    answer: `
    Para acceder a entrevista de despeje debes seguir los siguientes pasos:

1. Ingresar al sitio de Solicitud de hora para entrevista de despeje
2. Completar el formulario
3. Tomar una hora en la agenda electrónica
4. Leer el consentimiento informado que se encuentra en el link

*Importante: Si no se completan los 3 primeros pasos, la hora no será agendada
`
  }, {
    id: 'question02',
    title: 'Si tomo hora, ¿ingresaré a psicoterapia?',
    answer: 'No necesariamente. La solicitud de hora es para una entrevista de despeje, donde a partir de criterios de gravedad, inclusión y exclusión, se define la mejor opción acorde a las necesidades del o la estudiante, lo cual puede incluir intervenciones individuales, grupales o derivación externa.'
  }, {
    id: 'question03',
    title: '¿Qué costo tiene la atención?',
    answer: 'La atención es gratuita.'
  }, {
    id: 'question04',
    title: '¿Quiénes pueden atenderse en el Departamento de Salud Mental Estudiantil?',
    answer: 'Las y los estudiantes regulares de pregrado de la Universidad.'
  }, {
    id: 'question05',
    title: '¿Cómo suspendo una hora?',
    answer: 'Debes enviar un correo al profesional que te contactó, por lo menos 24 horas antes de tu hora, es muy importante que anules tu hora si no puedes asistir, ya que tenemos una alta demanda y tu inasistencia dejará a otro/a estudiante sin posibilidad de atención.'
  }, {
    id: 'question06',
    title: '¿Qué pasa si pierdo la hora?',
    answer: `Se debe justificar la inasistencia con un plazo de 24 horas, antes o después de la cita, enviando un correo electrónico al profesional tratante.
    La inasistencia a más de dos sesiones sin justificar, será considerado abandono, se cerrará su ficha y no podrá volver a solicitar atención en el departamento hasta el semestre siguiente.`
  }, {
    id: 'question07',
    title: '¿Qué pasa si llego tarde?',
    answer: 'El/la estudiante debe ser puntual. Si asiste 15 minutos tarde o más, deberá justificar su retraso y contactarse con el o la profesional asignada para agendar una nueva hora. En casos excepcionales, el terapeuta podrá atender al estudiante posterior a 15 minutos, ya sea porque éste se encuentra en proceso de alta, derivación o urgencia.'
  }, {
    id: 'question08',
    title: '¿Y si no hay hora?',
    answer: `
    Tenemos un tiempo de espera de 15 días hábiles aproximadamente. Si no puedes esperar este tiempo, debes considerar acudir a profesionales externos, particulares o en la red de servicio público.

Números de Utilidad:

Teléfono prevención del suicidio: *4141

Salud Responde: 6003607777. Profesionales brindan orientación y ayuda en crisis

Fono Drogas: 1412

Orientación Violencia Contra la Mujer: 1455

Servicio de Atención Médica de Urgencia (SAMU): 131

Dirección Instituto Psiquiátrico Dr. Jose Horwitz Barack: Olivos 837, Recoleta.`
  }, {
    id: 'question09',
    title: '¿Qué certificados se emiten?',
    answer: 'Sólo se podrán emitir certificados de asistencia.'
  }, {
    id: 'question10',
    title: '¿Es confidencial la información entregada?',
    answer: 'Sí. Lo que hablas con el profesional es estrictamente privado y confidencial. La información que queda registrada en la ficha no puede ser entregada a nadie sin tu autorización. Salvo en casos de riesgo vital, en ese caso se contactará a la red de apoyo.'
  }, {
    id: 'question11',
    title: '¿Existen excepciones a la confidencialidad?',
    answer: 'Sí. Únicamente si la información entregada revierte algún riesgo vital para el/la estudiante o algún tercero, puede ser contactado algún familiar o adulto/a responsable.'
  }, {
    id: 'question12',
    title: '¿Por qué se solicitan datos de familiar(es) de contacto?',
    answer: 'Esta información es necesaria y sólo se utiliza en caso de existir riesgo vital y ocasiones excepcionales previo acuerdo con el o la estudiante y resguardando confidencialidad.'
  }, {
    id: 'question13',
    title: '¿Los y las profesionales se puede contactar con autoridades académicas?',
    answer: 'Se realizará contacto con la Secretaría de Estudios, u otras autoridades o entidades de la universidad, si ambas partes lo establecen como necesario.'
  }, {
    id: 'question14',
    title: '¿Cuándo consultar?',
    answer: `
    Los motivos de consulta psicológica más comunes están asociados al estrés, ansiedad, depresión, dificultades en las relaciones familiares y de pareja y consumo problemático de sustancias.

Te recomendamos consultar si:

No puedes concentrarte adecuadamente en tus tareas académicas y/o laborales y tu rendimiento se ha visto afectado;

Estás experimentando sentimientos de tristeza, agobio, enojo y/o frustración y tus problemas se mantienen, pese a tus esfuerzos y ayuda de las personas más cercanas para superar o mejorar las situaciones que te preocupan;

Te preocupas excesivamente, sueles esperas el peor resultado y te sientes con frecuencia sobrepasado/a;

Te estás llevando mal con tu familia, pareja y/o amigos/as y te cuesta comunicarte y/o disfrutar de la compañía de otros;

Te cuesta disfrutar de actividades que antes eran de tu gusto;

Tiendes a aislarte y encerrarte en ti mismo/a, evitando el contacto con tu red de apoyo cercana;

Identificas que tienes un consumo problemático de sustancias;

Habitualmente tienes malestares físicos como dolores estomacales, opresión en el pecho, dolor de espalda entre otros, que pueden ser atribuibles al estrés;

Has sufrido episodios de crisis, experimentando síntomas como: dificultad para respirar, opresión en el pecho, traspiración, aceleración del ritmo cardiaco y/o sensación de intenso temor;

Si has vivido experiencias traumáticas:

Si presentas dificultad para conciliar el sueño y/o comer;

Las recomendaciones previas no abarcan todos los motivos que pueden motivar una consulta psicológica, sólo son una guía. Te invitamos a consultar en caso de que experimentes algunas de las situaciones descritas o bien tengas otras preocupaciones pue puedan ser abordadas en conjunto con un especialista. ¡Recuerda que es muy importante la consulta precoz, no dejes pasar tiempo!
    `
  }
]

const FrequentAskedQuestions = () => {
  const [expanded, setExpanded] = useState(false);
  const isMediumSize = useMediaQuery('(min-width:768px )');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box sx={{ width: '90svw', margin: 'auto auto 40px', scrollMarginTop: '180px' }} className='container col-12 col-lg-10 ' id="preguntas-frecuentes" >
      {
        questions.map((question, i) => (
          <Accordion
            key={question.id}
            expanded={expanded === question.id}
            onChange={handleChange(question.id)}
            sx={
              expanded === question.id
                ? { bgcolor: '#3886FF', color: '#fff',  margin: '16px 12px !important', padding: 0, borderRadius: '8px' }
                : { boxShadow: 'none', border: '1px solid black', margin: '16px 12px', padding: 0, borderRadius: '8px !important' }
            }
          >
            <AccordionSummary
              sx={{ borderBottom: isMediumSize && (expanded === question.id) && '1px solid #fff' }}
              expandIcon={isMediumSize && (expanded === question.id
                ? <RemoveCircleOutline sx={{ color: '#fff' }} />
                : <AddCircleOutlineOutlined />)
              }
              aria-controls={`panel${i}bh-content`}
              id={`panel${i}bh-header`}
            >
              <Typography className={'ui-large'}> {question.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={'ui-medium'}>
                {question.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))
      }
    </Box>
  )
}
export default FrequentAskedQuestions;
