import Image from "next/image";
import { Box, Card } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

const Section = ({ title, image, left, children, bgColor }) => {
  const isSmallSize = useMediaQuery('(max-width:389px')
  const isMediumSize = useMediaQuery('(min-width:768px)');
  const isLargeSize = useMediaQuery('(min-width:1024px)');

  return (
    <div className={`container col-12 align-self-center p-0 m-0`} >
      <div>
        <Box sx={{
          borderRadius: '32px',
          padding: isMediumSize ? '50px 0' : '10px 0',
          textWrap: 'pretty',
          margin: 'auto',
        }}>
          <div className="row m-0" >
            {
              isLargeSize
                ?
                <div
                  className={`container col-12 d-flex justify-content-center header-2-bold`}
                >
                  {left &&
                    <Card
                      className='col-12 col-lg-4 '
                      sx={{
                        boxShadow: 0,
                        display: 'inline-block',
                        paddingRight: '1em',
                        bgcolor: bgColor,
                        alignContent: 'center',
                      }}>
                      <div style={{ position: 'relative', width: '100%', height: '240px' }}>
                        <Image
                          src={image}
                          alt="Descripción de la imagen"
                          fill
                          sizes="(max-width: 240px)" // Ajusta el tamaño de la imagen según el viewport
                          style={{ objectFit: 'cover', borderRadius: '8px', }} // Similar a cómo se usa en CardMedia
                        />
                      </div>
                    </Card>
                  }
                  {/* TEXTO */}
                  <Card
                    className="col-12 col-lg-8"
                    sx={{
                      boxShadow: 0,
                      display: 'inline-block',
                      height: isMediumSize ? "100%" : "fit-content",
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      paddingBottom: '10px',
                      bgcolor: bgColor,
                    }}>
                    <Typography
                      variant="body2"
                      className={`${isMediumSize ? "header-2-bold" : "header-3-medium"}`}>
                      {title}
                    </Typography>
                    {children}
                  </Card>

                  {!left &&
                    <Card
                      className='col-12 col-lg-4'
                      sx={{
                        boxShadow: 0,
                        display: 'inline-block',
                        paddingLeft: '1em',
                        bgcolor: bgColor,
                        alignContent: 'center',
                      }}>
                      <div style={{ position: 'relative', width: '100%', height: '240px' }}>
                        <Image
                          src={image}
                          alt="Descripción de la imagen"
                          fill
                          sizes="(max-height: 240px)" // Ajusta el tamaño de la imagen según el viewport
                          style={{ objectFit: 'cover', borderRadius: '8px', maxHeight: '240px', objectPosition: 'center' }} // Similar a cómo se usa en CardMedia
                        />
                      </div>
                    </Card>
                  }
                </div>
                :
                <div
                  className={`container col-12  d-flex  justify-content-center p-0 m-0`}
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
                    boxShadow: 'unset',
                    alignContent: 'center',
                  }}>
                    <div style={{ position: 'relative', width: '100%', height: '240px' }}>
                      <Image
                        src={image}
                        alt="Descripción de la imagen"
                        fill
                        sizes="(max-width: 240px)" // Ajusta el tamaño de la imagen según el viewport
                        style={{ objectFit: 'cover', borderRadius: '8px', maxHeight: '240px' }} // Similar a cómo se usa en CardMedia
                      />
                    </div>
                    <Typography
                      variant="body2"
                      className="header-2-bold"
                    >
                      {title}
                    </Typography>
                    {children}
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