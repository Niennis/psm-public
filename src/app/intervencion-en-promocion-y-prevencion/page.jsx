'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

const PromocionYPrevencion = () => {
  const isSmallSize = useMediaQuery('(max-width:389px')
  const isMediumSize = useMediaQuery('(min-width:768px)');
  const [activeTab, setActiveTab] = useState('promocion-y-prevencion');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  }

  return (
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
              Promoción y Prevención
            </h3>

            <div className="tab-content tab-dsme-content">
              <div className={`tab-pane ${activeTab === 'promocion-y-prevencion' ? 'show active' : ''}`} id="promocion-y-prevencion">
                <div className={` ${isSmallSize ? "body-regular" : "header-3-regular"}`} >
                  <p>
                    El Departamento de Salud Mental de la UDP aborda la promoción y prevención en salud mental, centrando esfuerzos en mejorar el bienestar emocional y psicológico de la comunidad universitaria. Implementa estrategias para reducir los riesgos de trastornos mentales y desarrolla un Plan de Formación en Salud Mental para capacitar a docentes y administrativos en habilidades de manejo de crisis y primeros auxilios psicológicos, incluyendo cursos específicos orientados a mejorar la salud mental en contextos universitarios.
                  </p>
                </div>
              </div>

              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_IMG}promocion_prevencion_texto.jpg${process.env.NEXT_PUBLIC_KEY_IMG}`}
                alt="plan de acción imagen"
                height={0}
                width={0}
                sizes="100vw"
                className="blog-img"
                priority // Carga optimizada para imágenes importantes
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center bottom',
                  height: '100%',
                  width: '100%',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromocionYPrevencion;