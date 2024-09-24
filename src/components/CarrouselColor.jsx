import { useState, useEffect } from 'react';
import './Carousel.css';

const Carrusel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { color: '#2D2D2D', title: 'Paso 1: Escucha, observa y comunica aceptación.', content: 'Ejerce contacto visual con la persona, mantén una actitud corporal receptiva y atenta a lo que la persona te esté contando. Para comunicar lo anterior puedes parafrasear, preguntar, clarificar y/o resumir. Por ejemplo: "Entonces te encuentras triste porque hace poco falleció tu mascota, ¿entiendo bien?"' },
    { color: 'darkgrey', title: 'Paso 2: Valida y contiene a la persona afectada.', content: 'Conecta con la otra persona. Esto puedes hacerlo presentándote tu, para dar paso a que la otra persona también se presente. Puedes indagar, sin presiones ni prejuicios. Procura no minimizar el dolor del otro y realiza preguntas abiertas que inviten a la libre expresión. Por ejemplo: "Puedes decirme lo que sientas, yo no te voy a juzgar"' },
    { color: '#4054B2', title: 'Paso 3: Lleva a la persona a un lugar tranquilo.', content: 'Consulta con la persona si necesita ir a un lugar más tranquilo. Es decir, un lugar con menos gente, silencioso y carente de estímulos que pudieran agobiar a la persona. En este paso, puedes ofrecer agua, una respiración guiada o incluso consultar por contacto físico (solo con el consentimiento previo).' },
    { color: '#1abc9c', title: 'Paso 4: Consulta y derivar a redes de apoyo', content: 'Sí estás en la Universidad, puedes solicitar apoyo al Departamento de Salud Mental, para que puedan apoyar la intervención. Lo anterior, puedes hacerlo a través de tu secretaría de estudio y/o persona más cercana que haya de tu facultad. Mientras llega la ayuda, debes acompañar de manera continua a la persona. ' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carrusel-container-gpt">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide-gpt ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundColor: slide.color, color: 'white' }}
        >
          <div className="text-container-gpt">
            <div className={`text-gpt ${index === currentSlide ? 'active' : ''}`}>
              <h3>{slide.title}</h3>
              <p>{slide.content}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="custom-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot-gpt ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            style={{ color: 'white' }}

          />
        ))}
      </div>
    </div>
  );
};

export default Carrusel;
