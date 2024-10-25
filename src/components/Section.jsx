import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CircleRounded } from "@mui/icons-material";
import { Grid, Box, Card } from "@mui/material";
// import TestCard from './Card'
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import ReserveBtn from "./ReserveBtn";
import useMediaQuery from '@mui/material/useMediaQuery';
import { profesional01 } from "./imagepath";

const Section = ({ title, image, left, children, bgColor }) => {

  const matches = useMediaQuery('(min-width:600px)');

  // https://github.com/Niennis/imagesudp/blob/main/profesional01.jpg?raw=true
  return (
    <div className={`container col-12 align-self-center p-0 `} >

      {/* <TestCard test={slides} /> */}

      <div>
        <Box sx={{
          // height: '45svh',
          // width: '90%',
          borderRadius: '32px',
          padding: '50px 0',
          textWrap: 'pretty',
          margin: 'auto',
        }}>
          <div className="row" style={{ margin: 0 }} >
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
                    marginTop: '20px',
                  }}
                >
                  {left &&
                    <Card
                      className='col-12 col-lg-4 sailec'
                      sx={{
                        boxShadow: 0,
                        display: 'inline-block',
                        paddingRight: '1em',
                        bgcolor: bgColor
                      }}>
                      {/* <CardMedia
                        component="img"
                        height="300"
                        width="300"
                        image={image}
                        sx={{ borderRadius: '8px' }}
                      /> */}
                      <div style={{ position: 'relative', width: '100%', height: '240px' }}>
                        <Image
                          src={image}
                          alt="Descripción de la imagen"
                          // height={240}
                          // width={0}
                          fill // Reemplaza layout="fill" en Next.js 14
                          sizes="(max-height: 240px)" // Ajusta el tamaño de la imagen según el viewport
                          style={{ objectFit: 'cover', borderRadius: '8px', maxHeight: '240px' }} // Similar a cómo se usa en CardMedia
                        />
                      </div>
                    </Card>
                  }

                  <Card
                    className='col-12 col-lg-8'
                    sx={{
                      boxShadow: 0,
                      display: 'inline-block',
                      height: matches ? "100%" : "fit-content",
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      paddingBottom: '10px',
                      bgcolor: bgColor
                      // padding: '2em',
                    }}>
                    <Typography
                      variant="body2"
                      className="sailec"
                      sx={{
                        color: '#000',
                        fontSize: '32px',
                        lineHeight: '40px',
                        fontWeight: 700,
                        fontFamily: 'sailec'
                      }}>
                      {title}
                    </Typography>
                    {/* <Typography
                      variant="body2"
                      sx={{
                        color: '#000',
                        fontSize: '20px',
                        lineHeight: '28px',
                        fontFamily: 'sailec'
                      }}> */}
                    {children}
                    {/* </Typography> */}
                  </Card>

                  {!left &&
                    <Card
                      className='col-12 col-lg-4'
                      sx={{
                        boxShadow: 0,
                        display: 'inline-block',
                        paddingLeft: '1em',
                        bgcolor: bgColor
                      }}>
                      {/* <CardMedia
                        component="img"
                        height="240"
                        width="240"
                        image={image}
                        sx={{ borderRadius: '8px' }}
                      /> */}
                       <div style={{ position: 'relative', width: '100%', height: '240px' }}>
                        <Image
                          src={image}
                          alt="Descripción de la imagen"
                          // height={240}
                          // width={0}
                          fill // Reemplaza layout="fill" en Next.js 14
                          sizes="(max-height: 240px)" // Ajusta el tamaño de la imagen según el viewport
                          style={{ objectFit: 'cover', borderRadius: '8px', maxHeight: '240px' }} // Similar a cómo se usa en CardMedia
                        />
                      </div>
                    </Card>
                  }
                </div>

                :
                <div
                  className={`container col-12  d-flex  justify-content-center`}
                  style={{
                    fontSize: '24px',
                    fontWeight: 400,
                    lineHeight: '32px',
                    borderRadius: '12px',
                  }}
                >
                  <Card sx={{
                    maxWidth: 'fit-content',
                    bgcolor: bgColor,
                    boxShadow: 'unset'
                  }}>
                    <CardMedia
                      sx={{ height: 240 }}
                      image={image}
                    />
                    {/* <CardContent> */}
                    <Typography
                      variant="body2"
                      className="sailec"
                      sx={{
                        color: '#000',
                        fontSize: '32px',
                        lineHeight: '40px',
                        fontWeight: 700,
                        fontFamily: 'sailec'
                      }}>
                      {title}
                    </Typography>
                    {children}
                    {/* </CardContent> */}
                  </Card>

                </div>
            }
          </div>
        </Box>
      </div >
    </div >
  )
}

export default Section;