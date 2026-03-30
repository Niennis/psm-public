import { ansiedad01, suicidio01, drogas02, primeros_dias_01 } from '../components/imagepath'

export const mockBlogs = [
  {
    blog_id: 0,
    blog_titulo: '5 Técnicas para Reducir la Ansiedad',
    blog_bajada: 'Descubre cómo manejar eficazmente tu ansiedad con estas cinco estrategias clave.',
    blog_texto: '<p>La vida universitaria puede ser un caldo de cultivo para la ansiedad...</p>',
    blog_imagen: ansiedad01,
    blog_video: "",
    descargas: [
      {
        descarga_titulo: '5 Técnicas para Reducir la Ansiedad',
        descarga_bajada: 'Descubre cinco poderosas técnicas para aliviar la ansiedad.',
        descarga_url: 'https://reposaludmental.blob.core.windows.net/publicsite/01%20Cinco%20técnicas%20para%20reducir%20la%20ansiedad/descargables/5%20técnicas%20para%20reducir%20la%20ansiedad.pdf'
      }
    ]
  },
  {
    blog_id: 1,
    blog_titulo: 'Suicidio: Cómo buscar ayuda y ayudar',
    blog_bajada: 'Aprende a enfrentar el suicidio con herramientas y apoyo.',
    blog_texto: '<p>Si estás sintiendo que las cosas se te van de las manos...</p>',
    blog_imagen: suicidio01,
    blog_video: "",
    descargas: [
      {
        descarga_titulo: 'Estrategias de intervención para la prevención del suicidio',
        descarga_bajada: 'Explora estrategias efectivas de intervención.',
        descarga_url: 'https://reposaludmental.blob.core.windows.net/publicsite/02%20Suicidio%20cómo%20buscar%20ayuda%20y%20ayudar/descargables/Estrategias%20de%20intervenci%C3%B3n%20para%20la%20prevenci%C3%B3n%20del%20suicidio.pdf'
      }
    ]
  },
  {
    blog_id: 2,
    blog_titulo: 'Drogas y Alcohol: Cómo evitar el exceso',
    blog_bajada: 'Descubre estrategias efectivas para prevenir el consumo problemático.',
    blog_texto: '<p>La etapa universitaria está llena de desafíos...</p>',
    blog_imagen: drogas02,
    blog_video: "",
    descargas: [
      {
        descarga_titulo: 'Alcohol y drogas: ¿cómo evito los excesos?',
        descarga_bajada: 'Descubre estrategias eficaces para evitar el consumo excesivo.',
        descarga_url: 'https://reposaludmental.blob.core.windows.net/publicsite/03%20Drogas%20y%20alcohol%20c%C3%B3mo%20evitar%20el%20exceso/descargables/Alcohol%20y%20drogas_%20%C2%BFc%C3%B3mo%20evito%20los%20excesos_.pdf'
      }
    ]
  },
  {
    blog_id: 3,
    blog_titulo: '¿Primeros días en la U? Tips útiles',
    blog_bajada: 'Descubre estrategias clave para enfrentar los primeros días.',
    blog_texto: '<p>Los primeros días en la universidad pueden ser emocionantes...</p>',
    blog_imagen: primeros_dias_01,
    blog_video: "",
    descargas: [
      {
        descarga_titulo: 'Construye tu plan de adaptación universitario',
        descarga_bajada: 'Desarrolla un plan integral para adaptarte a la vida universitaria.',
        descarga_url: 'https://reposaludmental.blob.core.windows.net/publicsite/05%20%C2%BFPrimeros%20d%C3%ADas%20en%20la%20U_%20Tips%20%C3%BAtiles/descargables/construye%20tu%20plan%20de%20adaptacio%CC%81n%20(1).pdf'
      }
    ]
  }
];
