import { useState, useEffect } from "react";
import Image from "next/image";
// import { CircleRounded } from "@mui/icons-material";
import { Grid, Box, Card } from "@mui/material";
// import TestCard from './Card'
// import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import ReserveBtn from "./ReserveBtn";
import useMediaQuery from '@mui/material/useMediaQuery';

const ReservaTuHora = () => {
  const [isShort, setIsShort] = useState(false);
  const isMediumSize = useMediaQuery('(min-width:768px)');

  useEffect(() => {
    const handleResize = () => {
      const height = window.innerHeight;

      if (height < 900) {
        setIsShort(true);
      } else {
        setIsShort(false);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize(); 
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  })

  return (
    <div className={`container col-12 col-lg-10 align-self-center p-0 ${isMediumSize && 'mb-5'}`} style={{ background: '#f1f1f1' }}>
      {/* <TestCard test={slides} /> */}
      <div>
        <Box sx={{
          // height: '45svh',
          // width: '90svw',
          borderRadius: '32px',
          // padding: '24px 16px',
          textWrap: 'pretty',
          margin: '0 auto'
        }}>
          <div className="row" style={{ margin: 0 }} >
            {
              isMediumSize
                ?
                <div
                  className={`container col-12  d-flex  justify-content-center`}
                  style={{
                    fontSize: '24px',
                    fontWeight: 400,
                    lineHeight: '32px',
                    borderRadius: '12px',
                    marginTop: '20px'
                  }}
                >
                  <Card
                    className='col-12 col-md-4 col-lg-4'
                    sx={{
                      boxShadow: 0,
                      display: 'block',
                      padding: '2em 0',
                      bgcolor: '#f1f1f1'
                    }}>
                    <div style={{ position: 'relative', height: '240px', width: '100%' }}>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_IMG}profesional01.jpg${process.env.NEXT_PUBLIC_KEY_IMG}`}
                        alt="Imagen profesional"
                        fill
                        sizes="100%"
                        style={{
                          borderRadius: '8px',
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                  </Card>

                  <Card
                    className='col-12 col-md-8 col-lg-8'
                    sx={{
                      boxShadow: 0,
                      display: 'block',
                      height: isMediumSize ? "100%" : "fit-content",
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      paddingBottom: '10px',
                      padding: '2em',
                      bgcolor: '#f1f1f1'
                    }}>
                    <Typography
                      variant="body2"
                      className="header-2-bold"
                      sx={{
                        color: '#000',
                        // textWrap: 'balance',
                        fontSize: '32px',
                        lineHeight: '40px',
                        fontWeight: 700
                      }}>
                      Reserva tu hora
                    </Typography>
                    <Typography
                      variant="body2"
                      className="title-regular"
                      sx={{
                        color: '#000',
                        // textWrap: 'balance',
                        fontSize: '20px',
                        lineHeight: '28px'
                      }}>
                      Si sientes que necesitas ayuda de un profesional del DSME, agenda una entrevista (evaluación de despeje) en nuestra plataforma.
                    </Typography>
                    <Typography
                      variant="body2"
                      className="title-regular"
                      sx={{
                        color: '#000',
                        // textWrap: 'balance',
                        fontSize: '20px',
                        lineHeight: '28px'
                      }}>
                      Con esta evaluación podremos orientarte en relación a tus necesidades, y determinar qué tipo de ayuda podemos ofrecerte.
                    </Typography>
                    <CardActions sx={{ padding: '0px' }}>
                      <Typography size="medium" sx={{ padding: '0 5px', color: '#000' }}>
                        {/* <ReserveBtn text={'Reservar'} bgColor={'#FABB00'} color={'#000'} /> */}
                      </Typography>
                    </CardActions>
                  </Card>
                </div>

                :
                <div
                  className={`container p-0 col-12 ${isMediumSize ? 'd-flex' : ''} justify-content-center`}
                  style={{
                    borderRadius: '12px',
                  }}
                >
                  <Box sx={{ bgcolor: '#99D6E9', lineHeight: '30px', }}>
                    <div className="media-body" style={{ margin: '0 20px', padding: '10px 0', fontSize: '20px', fontWeight: 400, lineHeight: '28px' }}>
                      <Typography
                        variant="body2"
                        className="header-2-bold"
                        sx={{
                          color: '#000',
                          // textWrap: 'balance',
                          fontSize: '32px',
                          lineHeight: '40px',
                          fontWeight: 700,
                          margin: '16px 0'
                        }}>
                        Reserva tu hora
                      </Typography>

                      <p className={`${isShort ? "body-regular" : "title-regular" }`} style={{ textWrap: 'pretty' }}>
                        Si necesitas ayuda psicológica o psicopedagógica, reserva una hora con un profesional.
                      </p>
                      <p className={`${isShort ? "body-regular" : "title-regular" }`}>
                        Un psicólogo puede ayudarte a mejorar tu salud mental y emocional. Reservar una hora es fácil y cómodo.

                      </p>
                      {/* <ReserveBtn text={'Reservar'} bgColor={'#FABB00'} color={'#000'} /> */}
                    </div>
                  </Box>
                </div>
            }
          </div>
        </Box>
      </div >
    </div >
  )
}

export default ReservaTuHora;