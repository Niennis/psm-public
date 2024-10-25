'use client'
import Image from "next/image";
import { map } from "@/components/imagepath";
import { useMediaQuery } from "@mui/material";
import { Card, CardMedia, Typography } from "@mui/material";
import { } from "@/components/imagepath";
import ReserveBtn from "@/components/ReserveBtn";
import Elevation from "@/components/HowTo"

export default function QuienesSomos() {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <div className="row prevencion flex-column d-flex" style={{ padding:0, margin: 0 }}>
      <div className="col-12" style={{ padding:0, margin: 0 }}>
        <div className="card quienes-somos"
          style={{
            padding: matches ? '0px 96px' : '0px 32px',
            margin: '0px',
            border: 'none',
          }}>
          <div className="card-body" style={{ padding: '0px', margin: '0px' }}>
            <h3 className={matches ? "blog-title" : "blog-title-sm"} style={{ marginTop: !matches && '120px', fontSize: '48px', lineHeight: '60px', fontWeight: 700, textWrap: 'balance' }}>
              Dirección de Salud Mental de Estudiantes
            </h3>

          </div>
          <h2
            className="sailec"
            style={{ fontWeight: 700, fontSize: '32px', lineHeight: '40px', marginTop: matches ? '20px' : '40px' }}>
            ¿Qué es el DSME?
          </h2>
          <div className="row"  >
            {
              matches
                ?
                <div
                  className={`container col-12  d-flex  justify-content-center`}
                  style={{
                    fontSize: '24px',
                    fontWeight: 400,
                    lineHeight: '32px',
                    borderRadius: '12px',
                    margin: '10px 0px'
                  }}
                >
                  <Card
                    className='col-12 col-lg-4'
                    sx={{
                      boxShadow: 0,
                      display: 'inline-block',
                      padding: '0',
                      width: '',
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
                      height: matches ? "100%" : "fit-content",
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      paddingBottom: '10px',
                      padding: '0 2em',
                    }}>

                    <Typography
                      variant="body2"
                      className="sailec"
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
                      className="sailec"
                      sx={{
                        color: '#000',
                        textWrap: 'pretty',
                        fontSize: '20px',
                        lineHeight: '28px'
                      }}>
                      Nuestro modelo de intervención se basa en la <strong>Promoción, Prevención, Atención Grupal y Atención Clínica Individual</strong>; con la finalidad de prestar apoyo para enfrentar las diversas problemáticas psicosociales que se presentan en el transcurso de la vida estudiantil.
                    </Typography>
                  </Card>
                </div>
                :
                <div
                  className={`container col-12 ${matches ? 'd-flex' : ''} justify-content-center`}
                  style={{
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '24px',
                    borderRadius: '12px',
                    // padding: 0,
                    // margin: '0 10px'
                  }}
                >
                  <div className="media-body sailec" style={{
                    // margin: '0 20px', 
                    paddingTop: '10px',
                    fontSize: '20px',
                    fontWeight: 400,
                    lineHeight: '32px'
                  }}>
                    <p className="media-body sailec" style={{ textWrap: 'balance' }}>
                      El <strong>Departamento de Salud Mental Estudiantil (DSME)</strong> es un equipo cuya misión es contribuir al bienestar psicológico y emocional del estudiantado de la Universidad Diego Portales.
                    </p>
                    <p style={{ textWrap: 'balance' }}>
                      Nuestro modelo de intervención se basa en la <strong>Promoción, Prevención, Atención Grupal y Atención Clínica Individual</strong>; con la finalidad de prestar apoyo para enfrentar las diversas problemáticas psicosociales que se presentan en el transcurso de la vida estudiantil.
                    </p>
                  </div>
                </div>
            }
          </div>
          <div className="row" style={{ margin: matches ? '0' : 0 }} >
            <div className="card-body flex-column d-flex my-3 " style={{ padding: 0 }} >
              {
                matches
                  ?
                  <>
                    <h2
                      className="sailec"
                      style={{ fontWeight: 700, fontSize: '32px', lineHeight: '40px', marginTop: matches ? '20px' : '90px' }}>¿Cómo puedo solicitar atención en el DSME?
                    </h2>
                  </>
                  :
                  <>
                    <h2 className="sailec-medium">¿Cómo puedo solicitar </h2>
                    <h2 className="sailec-medium">atención en el DSME?</h2>
                  </>
              }
              <Typography
                variant="body2"
                className="sailec"
                sx={{
                  color: '#000',
                  // textWrap: 'balance',
                  fontSize: '20px',
                  lineHeight: '28px'
                }}>Primero, debes saber que <strong>pedir ayuda no es un signo de debilidad ni un acto egoísta. Sino, todo lo contrario. Pedir ayuda es un acto de valentía y amor propio</strong>. Y para iniciar ese proceso, es importante saber dos cosas: <strong>¿Cuándo y donde pedir ayuda?</strong>
              </Typography>

              <Elevation matches={matches} />
            </div>
            <div className="card-body flex-column d-flex align-items-center my-2 ">
              <ReserveBtn text={'Reservar'} bgColor={'#FABB00'} color={'#000'} />
            </div>

            <div className="card-body flex-column d-flex align-items-center px-0">
              <h2 className="sailec" style={{ fontWeight: 700, fontSize: '32px', lineHeight: '40px', marginTop: matches ? '20px' : '20px' }}>¿Tienes preguntas o sugerencias?</h2>
              <p style={{
                margin: matches ? '0 25px' : 0,
                textAlign: matches ? 'center' : 'left',
                fontSize: '20px',
                fontWeight: 400,
                lineHeight: '32px',
                textWrap: 'balance'
              }}>
                Puedes preguntar o sugerir lo que quieras, es totalmente anónimo, por lo que puedes sentirte seguro. Tus preguntas serán respondidas en el Canal de WhatsApp.</p>
              <button className="btn btn-secondary me-1 p-2 my-3">
                <a style={{ color: 'white' }} href="https://forms.gle/nFShGTzpaBKcvhCX9">
                  Buzón de preguntas
                </a>
              </button>

            </div>
          </div>
          <div className="row" style={{ margin: '0 ' }} >
            <div className="card-body flex-column d-flex align-items-center px-0">
              {
                matches
                  ? <h2 style={{ fontWeight: 700, fontSize: '32px', lineHeight: '40px', marginTop: '20px' }} className="sailec">¿Dónde se encuentra el <strong>DSME?</strong></h2>
                  : <>
                    <h2 style={{ fontWeight: 700, fontSize: '32px', lineHeight: '40px' }} className="sailec">¿Dónde se encuentra el <strong>DSME?</strong></h2>

                  </>
              }
              <div className="col-12 col-lg-6 d-flex justify-content-center mb-3">
                <a href="https://maps.app.goo.gl/MgPjwoqPatGxty8W8" target="_blank">
                  <img src={map.src} alt="Mapa ubicación Universidad" width={matches ? 800 : '100%'} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
