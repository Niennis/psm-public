import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function StepList({ matches }) {
  return (
    <>
      <Grid container spacing={2} sx={{ width: '100%', placeContent: 'center', margin: matches ? '' : '10px auto' }} >
        {[lightTheme].map((theme, index) => (
          <Grid item xs={12} md={10} sm={8} key={index} className='px-0'>
            <ThemeProvider theme={theme}>
              <Box
                className='quienes-somos-list'
                sx={{
                  borderRadius: 2,
                  bgcolor: 'background.default',
                  display: 'grid',
                  gridTemplateColumns: { md: '1fr' },
                  gap: 2,
                }}
              >
                <ol style={{ paddingLeft: '0px' }}>
                  {[
                    { id: 0, title: 'Si necesitas algún servicio del departamento debes tomar hora' },
                    { id: 1, title: 'Ingresas al sitio dando click en Reservar' },
                    { id: 2, title: 'Tendrás que completar un formulario con tus datos' },
                    { id: 3, title: 'Podrás agendar entrevista en los horarios disponibles' },
                    { id: 4, title: 'Debes confirmar la cita' },
                    { id: 6, title: 'Luego de la entrevista, el profesional determinará qué dispositivo es el que calza mejor con tus necesidades y agendará tus siguientes citas' }
                  ].map((item) => (
                    <Item key={item.id} item={item.id}
                      sx={{
                        height: 'fit-content',
                        padding: '20px',
                        bgcolor: '#E6E9EC',
                        color: '#000',
                        fontSize: '18px',
                        lineHeight: '24px',
                        alignContent: 'center',
                        margin: '10px 0'
                      }}
                      className={matches ? "body-large-regular" : "body-regular"}>
                      <li>
                        {`${item.title}`}
                      </li>
                    </Item>
                  ))}
                </ol>

              </Box>
            </ThemeProvider>
          </Grid>
        ))}
      </Grid >
    </>
  );
}
