'use client'
import Image from "next/image";
import Link from "next/link";

import { map } from "@/components/imagepath";
import ReserveBtn from "@/components/ReserveBtn";
import StepList from "@/components/StepList"

import { Card, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

export default function QuienesSomos() {
  const isSmallSize = useMediaQuery('(max-width:389px')
  const isMediumSize = useMediaQuery('(min-width:768px)');
  const isLargeSize = useMediaQuery('(min-width:1024px)');

  return (
    <div className="row prevencion flex-column d-flex m-0 p-0">
      <div className="col-12 m-0 p-0">
        <div className="card quienes-somos"
          style={{
            padding: isMediumSize ? '0px 96px' : '0px 32px',
            margin: '0px',
            border: 'none',
          }}>
          <div className="card-body m-0 p-0">
            <h3 className={isSmallSize ? "header-2-bold" : isMediumSize ? "mega-bold" : "header-1-bold"} style={{ marginTop: !isMediumSize && '120px', textWrap: 'balance' }}>
              Dirección de Salud Mental de Estudiantes
            </h3>

          </div>
          <h2
            className={`${isMediumSize ? "header-2-bold" : "header-3-medium"} mt-3`}>
            ¿Qué es el DSME?
          </h2>
          <div className="row"  >
            {
              isLargeSize
                ?
                <div className={`container col-12  d-flex  justify-content-center`}>
                  <Card
                    className='col-12 col-lg-4 p-0 inline-block'
                    sx={{
                      boxShadow: 0,
                      // width: '',
                    }}>
                    <div style={{ position: 'relative', width: '100%', height: '240px' }}>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_IMG}profesional01.jpg${process.env.NEXT_PUBLIC_KEY_IMG}`}
                        alt="Descripción de la imagen"
                        // height={240}
                        // width={0}
                        fill // Reemplaza layout="fill" en Next.js 14
                        sizes="(max-height: 240px)" // Ajusta el tamaño de la imagen según el viewport
                        style={{ objectFit: 'cover', borderRadius: '8px', maxHeight: '240px' }} // Similar a cómo se usa en CardMedia
                      />
                    </div>
                  </Card>
                  <Card
                    className='col-12 col-lg-8'
                    sx={{
                      boxShadow: 0,
                      display: 'inline-block',
                      height: isMediumSize ? "100%" : "fit-content",
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      paddingBottom: '10px',
                      padding: '0 2em',
                    }}>

                    <Typography
                      variant="body2"
                      className="header-3-regular"
                      sx={{
                        color: '#000',
                        textWrap: 'pretty',
                        fontSize: '20px',
                        lineHeight: '28px'
                      }}>
                      El <strong>Departamento de Salud Mental Estudiantil (DSME)</strong> es un equipo cuya misión es contribuir al bienestar psicológico y emocional del estudiantado de la Universidad Diego Portales.
                    </Typography>

                    <Typography
                      variant="body2"
                      className="header-3-regular"
                    >
                      Nuestro modelo de intervención se basa en la <strong>Promoción, Prevención, Atención Grupal y Atención Clínica Individual</strong>; con la finalidad de prestar apoyo para enfrentar las diversas problemáticas psicosociales que se presentan en el transcurso de la vida estudiantil.
                    </Typography>
                  </Card>
                </div>
                :
                <div
                  className={`container col-12 ${isMediumSize ? 'd-flex' : ''} justify-content-center`}
                >
                  <div className="media-body body-regular pt-2 " >
                    <p style={{ textWrap: 'balance' }}>
                      El <strong>Departamento de Salud Mental Estudiantil (DSME)</strong> es un equipo cuya misión es contribuir al bienestar psicológico y emocional del estudiantado de la Universidad Diego Portales.
                    </p>
                    <p style={{ textWrap: 'balance' }}>
                      Nuestro modelo de intervención se basa en la <strong>Promoción, Prevención, Atención Grupal y Atención Clínica Individual</strong>; con la finalidad de prestar apoyo para enfrentar las diversas problemáticas psicosociales que se presentan en el transcurso de la vida estudiantil.
                    </p>
                  </div>
                </div>
            }
          </div>
          <div className="row m-0">
            <div className="card-body flex-column d-flex my-3 " style={{ padding: 0 }} >
              {
                isMediumSize
                  ?
                  <>
                    <h2
                      className="header-2-bold mt-3">¿Cómo puedo solicitar atención en el DSME?
                    </h2>
                  </>
                  :
                  <>
                    <h2 className="header-3-medium">¿Cómo puedo solicitar </h2>
                    <h2 className="header-3-medium">atención en el DSME?</h2>
                  </>
              }
              <Typography
                variant="body2"
                className={isMediumSize ? "header-3-regular" : "body-regular"}
                sx={{
                  color: '#000',
                  fontSize: '20px',
                  lineHeight: '28px'
                }}>Primero, debes saber que <strong>pedir ayuda no es un signo de debilidad ni un acto egoísta. Sino, todo lo contrario. Pedir ayuda es un acto de valentía y amor propio</strong>. Y para iniciar ese proceso, es importante saber dos cosas: <strong>¿Cuándo y donde pedir ayuda?</strong>
              </Typography>

              <StepList matches={isMediumSize} />
            </div>
            <div className="card-body flex-column d-flex align-items-center ">
              <ReserveBtn text={'Reservar'} bgColor={'#FABB00'} color={'#000'} />
            </div>

            <div className="card-body flex-column d-flex align-items-center px-0">
              <h2 className={`${isMediumSize ? "header-2-bold" : "header-3-medium"} mt-3`}>
                ¿Tienes preguntas o sugerencias?
              </h2>
              <p className={isMediumSize ? "header-3-regular" : "body-regular"}>
                Puedes preguntar o sugerir lo que quieras, es totalmente anónimo, por lo que puedes sentirte seguro. Tus preguntas serán respondidas en el Canal de WhatsApp.</p>
              <button className=" btn-test-home me-1 py-2 px-3 my-3 ui-medium btn-shadow">
                <a className="font-white" href="https://forms.gle/nFShGTzpaBKcvhCX9">
                  Buzón de preguntas
                </a>
              </button>
            </div>
          </div>
          <div className="row m-0 p-0" >
            <div className="card-body flex-column d-flex align-items-center p-0">
              {
                isMediumSize
                  ? <h2 className="header-2-bold" >¿Dónde se encuentra el <strong>DSME?</strong></h2>
                  : <>
                    <h2 className="header-3-medium">¿Dónde se encuentra el <strong>DSME?</strong></h2>
                  </>
              }
              <div className="col-12 col-lg-6 d-flex justify-content-center mb-3">
                <a href="https://maps.app.goo.gl/MgPjwoqPatGxty8W8" target="_blank">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_IMG}mapa-udp.png${process.env.NEXT_PUBLIC_KEY_IMG}`}
                    alt="Mapa ubicación Universidad"
                    height={0}
                    width={0}
                    // fill // Reemplaza layout="fill" en Next.js 14
                    sizes="100%" // Ajusta el tamaño de la imagen según el viewport
                    style={{ objectFit: 'cover', borderRadius: '8px', width: isLargeSize ? '800px' : '100%', height: '400px' }} // Similar a cómo se usa en CardMedia
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
