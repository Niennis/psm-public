'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { useMediaQuery } from "@mui/material";

const ProtocoloAccionSaludMental = () => {
  const isSmallSize = useMediaQuery('(max-width:389px')
  const isMediumSize = useMediaQuery('(min-width:768px)');
  const [activeTab, setActiveTab] = useState('protocolo-de-accion-en-salud-mental');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
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
              Plan de acción en salud mental
            </h3>

            <div className="tab-content tab-dsme-content">
              <div className={`tab-pane ${activeTab === 'protocolo-de-accion-en-salud-mental' ? 'show active' : ''}`} id="protocolo-de-accion-en-salud-mental">
                <div className={` ${isSmallSize ? "body-regular" : "header-3-regular"}`} >
                  <p>
                    Este plan tiene como objetivo establecer las acciones y directrices estandarizadas que permitan realizar una respuesta adecuada consistente en identificar, contener y derivar casos de urgencia y emergencia de carácter psiquiátrico y/o psicológico ocurridos en la Universidad.
                  </p>
                  <p>
                    El documento, pone a disposición una serie de directrices y flujogramas de fácil comprensión, con el fin de facilitar las respuestas frente a sucesos de Salud Mental.
                  </p>
                  <Link href="/downloads/Plan_de_Salud_Mental_Universitaria_versión_informe.pdf" style={{ marginLeft: '0px', fontSize: '24px', lineHeight: '60px', fontWeight: 700, textWrap: 'balance' }}>
                    <FaArrowRightLong /> Ver protocolo aquí
                  </Link>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_IMG}plan_accion_texto.jpg${process.env.NEXT_PUBLIC_KEY_IMG}`}
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
                      marginBottom: '10px',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProtocoloAccionSaludMental;