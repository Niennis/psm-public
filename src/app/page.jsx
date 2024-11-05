"use client"
import { useState, useRef, useEffect, useCallback } from 'react'
import { useSection } from "@/context/SectionContext";
import useMediaQuery from '@mui/material/useMediaQuery';

import { fetchBlogs } from '../services/BlogServices';
import Events from '@/components/Events';
import Footer from "@/components/Footer";
import FrequentAskedQuestions from '@/components/FAQ';
import ImageSlider from '@/components/ImageSlider';
import QuienesSomos from "@/components/QuienesSomos";
import ReservaTuHora from "@/components/ReservaHora";
import SimpleBackdrop from "@/components/Backdrop";
import TestSlider from '@/components/TestSlider';

import { blogs } from "@/utils/blogs";

const events = [
  // {
  //   title: "Salud Mental",
  //   address: "Av. Portugal 782, Santiago",
  //   date: "2024/02/18",
  //   time: "09:00",
  //   campus: "Sede Santiago",
  //   location: "Auditorio",
  //   image: 'https://posgrados.udp.cl/wp/wp-content/uploads/2023/12/MBA-UDP-92-scaled-1.jpg',
  //   highlight: false,
  // },
  // {
  //   title: "Salud Mental",
  //   address: "Av. Portugal 782, Santiago",
  //   date: "2024/02/18",
  //   time: "09:00",
  //   campus: "Sede Centro",
  //   location: "Auditorio",
  //   image: 'https://posgrados.udp.cl/wp/wp-content/uploads/2023/12/MBA-UDP-92-scaled-1.jpg',
  //   highlight: true,
  // },
  // {
  //   title: "Salud Mental",
  //   address: "Av. Portugal 782, Santiago",
  //   date: "2024/03/18",
  //   time: "09:00",
  //   campus: "Sede Santiago",
  //   location: "Auditorio",
  //   image: 'https://posgrados.udp.cl/wp/wp-content/uploads/2023/12/MBA-UDP-92-scaled-1.jpg',
  //   highlight: false,
  // },
  // {
  //   title: "Salud Mental",
  //   address: "Av. Portugal 782, Santiago",
  //   date: "2024/02/18",
  //   time: "09:00",
  //   campus: "Sede Santiago",
  //   location: "Auditorio",
  //   image: 'https://posgrados.udp.cl/wp/wp-content/uploads/2023/12/MBA-UDP-92-scaled-1.jpg',
  //   highlight: false,
  // }
]

const tests = [
  {
    id: '0',
    titulo: 'Test de ansiedad de Beck',
    bajada: 'El test de ansiedad de Beck es un cuestionario que ayuda a saber cuánta ansiedad siente una persona. Tiene 21 preguntas sobre cómo se ha sentido recientemente.',
    url: '/tests/test-de-ansiedad',
    imagen: 'https://github.com/Niennis/imagesudp/blob/main/home_ansiedad.jpg?raw=true',
  },
  {
    id: '0',
    titulo: 'Test de depresión',
    bajada: 'El PHQ-9 es un cuestionario breve que ayuda a identificar si una persona podría estar deprimida. Consiste en 9 preguntas sobre cómo se ha sentido alguien en las últimas dos semanas.',
    url: '/tests/test-de-depresion',
    imagen: 'https://github.com/Niennis/imagesudp/blob/main/saludMental01.jpeg?raw=true',
  },
]

const sortedEvents = [...events].sort((a, b) => {
  // Primero, compara el campo highlight
  if (a.highlight && !b.highlight) {
    return -1;
  } else if (!a.highlight && b.highlight) {
    return 1;
  } else {
    // Si ambos tienen el mismo valor de highlight, compara las fechas
    return new Date(a.date) - new Date(b.date);
  }
});

export default function Home() {

  const { setActiveSection } = useSection();
  const sectionRefs = useRef([]);
  const isSmallDevice = useMediaQuery("(max-width : 640px)");
  const isMediumDevice = useMediaQuery("(min-width : 641px) and (max-width : 768px)");
  const isLargeDevice = useMediaQuery("(min-width : 769px) and (max-width : 1024px)");
  const isExtraLargeDevice = useMediaQuery("(min-width : 1025px)");
  const isDeviceSmallOrLarger = isSmallDevice || isMediumDevice || isLargeDevice || isExtraLargeDevice;

  const matches = useMediaQuery('(min-width:600px)');
  const [slides, setSlides] = useState()

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionRefs.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, [setActiveSection]);
  // console.log('BLOGS', blogs.slice(-4 ))

  const fetchData = useCallback(async () => {
    // try {
    //   // setIsLoading(true);
    //   const response = await fetchBlogs();
    //   // setSlides(blogs.slice(0, 4));
    //   if (response.length === 0) setSlides(blogs.slice(blogs.length - 4))
    //   if (response.length > 0) {
    //     setSlides(response.slice(response.length - 4));
    //   }
    // } catch (error) {
    //   console.error('Error fetching blogs:', error);
    // } finally {
    //   // setIsLoading(false);
    // }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main style={{ contentVisibility: 'auto' }}>
      {!isDeviceSmallOrLarger && <SimpleBackdrop />}

      {blogs.length > 0 && isDeviceSmallOrLarger && (
        <ImageSlider
          slidesCall={slides}
          innerRef={el => sectionRefs.current[0] = el}
          className="home-section"
        />
      )}

      {blogs.length > 0 && (
        <>
          <div className="background-gray">
            <ReservaTuHora innerRef={el => sectionRefs.current[0] = el} className="home-section" />
          </div>
          <div>
            <QuienesSomos />
          </div>
          <TestSlider
            slides={tests.slice(0, 4)}
            innerRef={el => sectionRefs.current[0] = el}
            className="home-section"
          />
        </>
      )}

      {events.length !== 0 && (
        <Events
          events={sortedEvents}
          matches={matches}
          innerRef={el => sectionRefs.current[0] = el}
          className="home-section"
        />
      )}

      <div className="row m-0 p-0">
        <div className="col-sm-12 text-center p-0" style={{ margin: '32px 0 0' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 400, lineHeight: '40px' }}>Preguntas frecuentes</h2>
        </div>
      </div>
      <FrequentAskedQuestions innerRef={el => sectionRefs.current[0] = el} className="home-section" />
      <Footer />
    </main>
  );
}
