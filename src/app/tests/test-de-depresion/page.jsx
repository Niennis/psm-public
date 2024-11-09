'use client'
import { Fragment, useState } from "react";
import { useRouter } from 'next/navigation';

import { useForm } from 'react-hook-form';
import { FaArrowLeft } from "react-icons/fa";

import { useMediaQuery } from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const preguntas = [
  {
    pregunta: 'Tener poco interés o placer en hacer las cosas.',
    label: 'poco_interes'
  },
  {
    pregunta: 'Sentirse desanimado/a, deprimido/a, o sin esperanza.',
    label: 'desanimado'
  },
  {
    pregunta: 'Con problemas en dormirse o en mantenerse dormido/a, o en dormir demasiado.',
    label: 'mal_dormir'
  },
  {
    pregunta: 'Sentirse cansado/a o tener poca energía.',
    label: 'cansado'
  },
  {
    pregunta: 'Tener poco apetito o comer en exceso.',
    label: 'comida'
  },
  {
    pregunta: 'Sentir falta de amor propio o que sea un fracaso que decepcionara a si mismo/a a su familia.',
    label: 'fracaso'
  },
  {
    pregunta: 'Tener dificultad para concentrarse en cosas tales como leer el periódico o mirar televisión.',
    label: 'concentracion'
  },
  {
    pregunta: 'Se mueve o habla tan lentamente que otra gente se podría dar cuenta o de lo contrario, está tan agitado/a o inquieto/a que se mueve mucho más de lo acostumbrado.',
    label: 'percepcion'
  },
  {
    pregunta: 'Se le han ocurrido pensamientos de que sería mejor estar muerto/a o de que haría daño de alguna manera.',
    label: 'pensamientos_muerte'
  }
]

const resultados = [
  {
    puntaje: [0, 4],
    titulo: 'Sin sintomatología depresiva',
    descripcion: `Tus respuestas sugieren síntomas mínimos o nulos de depresión. Es probable que no estés experimentando signos significativos de depresión.`
  },
  {
    puntaje: [5, 9],
    titulo: 'Sintomatología depresiva leve',
    descripcion: `	Indicas síntomas leves de depresión. Aunque estos síntomas pueden no estar interfiriendo gravemente en tu vida diaria, es importante estar atento a cómo evolucionan.`
  },
  {
    puntaje: [10, 14],
    titulo: 'Sintomatología depresiva moderada',
    descripcion: `Tus síntomas son moderados. Pueden estar afectando tu vida diaria y podría ser útil considerar estrategias de manejo o buscar apoyo profesional.`
  },
  {
    puntaje: [15, 19],
    titulo: 'Sintomatología depresiva moderadamente severo',
    descripcion: `Estás experimentando síntomas depresivos moderadamente severos, los cuales probablemente están afectando de manera significativa tu rutina diaria. Sería aconsejable buscar ayuda profesional. Te invitamos a reservar hora con nuestros servicios de salud mental.`
  },
  {
    puntaje: [20, 27],
    titulo: 'Sintomatología depresiva grave',
    descripcion: `Tus síntomas son severos y es crucial que busques ayuda profesional de inmediato para manejar estos síntomas, ya que pueden estar impactando de manera considerable en tu bienestar general. Te invitamos a reservar hora con nuestros servicios de salud mental, haciendo click en el enlace.`
  },
]

const determinateCategory = (puntaje) => {
  const category = resultados.find(resultado => puntaje >= resultado.puntaje[0] && puntaje <= resultado.puntaje[1]);
  return category
}

const ChildModal = ({ result, enviar, isMediumSize }) => {
  const [openChildModal, setOpenChildModal] = useState(false);
  const handleOpenAnon = () => {
    setOpenChildModal(true)
  };
  const handleOpenWithMail = () => {
    enviar(result)
    setOpenChildModal(true)
  };
  const handleClose = () => {
    setOpenChildModal(false)
  };

  return (
    <Fragment>
      <Button onClick={handleOpenWithMail}>Enviar correo</Button>
      <Button onClick={handleOpenAnon}>Resultados anónimos</Button>
      <Modal
        open={openChildModal}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box className={`${isMediumSize ? 'header-3-regular' : 'body-regular'} col-12 col-lg-10` }sx={{ ...style, width: '100%' }}>
          <h2 id="child-modal-title">{result.titulo}</h2>
          <p id="child-modal-description">
            {result.descripcion}
          </p>
          <Button className="btn btn-primary me-2 lato-btn" onClick={handleClose}>Cerrar</Button>
        </Box>
      </Modal>
    </Fragment>
  );
}

const TestDepresion = () => {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState()
  const router = useRouter()
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const isMediumSize = useMediaQuery('(min-width:768px)');
  const isSmallSize = useMediaQuery('(max-width:389px');
  const [total, setTotal] = useState()

  const calculate = () => {
    const data = watch()
    const keysToSum = [
      "poco_interes",
      "desanimado",
      "mal_dormir",
      "cansado",
      "comida",
      "fracaso",
      "concentracion",
      "percepcion",
      "pensamientos_muerte",
    ];
    const sum = keysToSum.reduce((total, key) => {
      return total + parseInt(data[key]);
    }, 0);
    setTotal(sum)
    return sum
  }

  const handleOpen = () => {
    setOpen(true)
    const result = calculate()
    const response = determinateCategory(result)
    setCategory(response)
  };

  const handleClose = () => { setOpen(false); }

  const onSubmit = handleSubmit(async (data, result) => {
    const body = {
      nombre: data.nombre,
      apellido: data.apellido,
      mail: data.email,
      test: "test de depresión",
      puntaje: total,
      resultado: result.descripcion,
    }

    try {
      const sendMail = await fetch('https://calculatetestpoints-fpdthpb8d3fqh2a4.eastus-01.azurewebsites.net/main', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'access-control-allow-origin': '*',
        },
        body: JSON.stringify(body),
      })
      console.log('SENDMAIL', sendMail)
    } catch (error) {
      console.log('UN ERROR, QUIZÁS DE CORS', error)
    }
  })

  return (
    <>
      {isMediumSize && <div style={{
        height: '520px',
        overflow: 'hidden'
      }}>
        <img
          alt="#"
          src={`${process.env.NEXT_PUBLIC_BASE_IMG}saludMental01.jpeg${process.env.NEXT_PUBLIC_KEY_IMG}`}
          width={'100%'}
          style={{
            backgroundPosition: 'center'
          }}
        />
      </div>
      }
      <div className="page-wrapper" style={{ margin: 'auto' }}>
        <div style={{ marginTop: !isMediumSize && '47px' }}>
          {/* Page Header */}
          {isMediumSize &&
            <button className=' mt-4 mb-5 lato-btn btn-back-desktop'
              onClick={() => router.back()}
            >
              <FaArrowLeft /> Volver
            </button>
          }
          {/* /Page Header */}
          <div className="row m-0">
            <div className="col-sm-12">
              <div className="card" style={{ border: 'none' }}>
                <div className="card-body" style={{ padding: isMediumSize ? '0 96px' : '32px' }}>
                  <form>
                    <div className="row d-flex flex-column align-items-center m-0">
                      <div className="col-12 p-0">
                        <div className="form-heading">
                          <div className="card-body flex-row d-flex mt-4 px-0">
                            <h2
                              className={isSmallSize ? "header-2-bold" : isMediumSize ? "mega-bold" : "header-1-bold"}>
                              Test de Síntomas de Depresión (PHQ-9)
                            </h2>
                          </div>
                          <div className="row m-0">
                            <div className={`${isMediumSize ? 'header-3-regular' : 'body-regular'} col-12 col-md-10`}>
                              <p>
                                Durante las dos últimas semanas ¿con qué frecuencia le han molestado los siguientes problemas?
                              </p>
                              <p>0 = Nunca</p>
                              <p>1 = Varios días</p>
                              <p>2 = Más de la mitad de los días</p>
                              <p>3 = Casi todos los días</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-10 p-0">

                        {
                          preguntas.map((item, index) => (
                            <div
                              className={`col-12 ${isMediumSize ? 'header-3-regular' : 'body-regular'}`}
                              key={index + item.label}
                              style={{
                                background: index % 2 === 0 && '#E6E9EC'
                              }}
                            >
                              <div className="form-group select-gender d-flex justify-content-between" style={{ margin: 'auto', padding: '10px', alignItems: 'end' }}>
                                <label className="col-6 col-md-9">
                                  {item.pregunta}
                                </label>
                                <div className="col-5 col-md-3 text-end" style={{ margin: 'auto 0' }}>
                                  <div className="form-check-inline me-1 me-md-3" >
                                    <label
                                      className={isMediumSize ? 'blog-text' : 'blog-text-sm'}
                                      style={{ textAlign: 'center' }}
                                    >
                                      <input
                                        type="radio"
                                        name={item.label}
                                        value={0}
                                        className="form-check-input d-block me-0"
                                        {...register(item.label, {
                                          required: {
                                            value: true,
                                            message: 'Debes seleccionar una opción'
                                          }
                                        })}
                                      />
                                      0
                                    </label>
                                  </div>
                                  <div className="form-check-inline me-1 me-md-3" style={{ marginRight: '5px' }}>
                                    <label
                                      className={isMediumSize ? 'blog-text' : 'blog-text-sm'}
                                      style={{ textAlign: 'center' }}>
                                      <input
                                        type="radio"
                                        name={item.label}
                                        value={1}
                                        className="form-check-input d-block me-0"
                                        {...register(item.label, {
                                          required: {
                                            value: true,
                                            message: 'Debes seleccionar una opción'
                                          }
                                        })}
                                      />
                                      1
                                    </label>
                                  </div>
                                  <div className="form-check-inline me-1 me-md-3" style={{ marginRight: '5px' }}>
                                    <label
                                      className={isMediumSize ? 'blog-text' : 'blog-text-sm'}
                                      style={{ textAlign: 'center' }}>
                                      <input
                                        type="radio"
                                        name={item.label}
                                        value={2}
                                        className="form-check-input d-block me-0"
                                        {...register(item.label, {
                                          required: {
                                            value: true,
                                            message: 'Debes seleccionar una opción'
                                          }
                                        })}
                                      />
                                      2
                                    </label>
                                  </div>
                                  <div className="form-check-inline me-1 me-md-3" style={{ marginRight: '5px' }}>
                                    <label
                                      className={isMediumSize ? 'blog-text' : 'blog-text-sm'}
                                      style={{ textAlign: 'center' }}>
                                      <input
                                        type="radio"
                                        name={item.label}
                                        value={3}
                                        className="form-check-input d-block me-0"
                                        {...register(item.label, {
                                          required: {
                                            value: true,
                                            message: 'Debes seleccionar una opción'
                                          }
                                        })}
                                      />
                                      3
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))
                        }
                      </div>

                      {Object.keys(errors).length !== 0 && <span className="login-danger">
                        <small>Debes seleccionar una opción por cada pregunta</small>
                      </span>
                      }
                      <div className="col-12 mt-4">
                        <div className="doctor-submit text-end">
                          <button
                            type="button"
                            className="btn btn-primary me-2 lato-btn"
                            onClick={handleOpen}
                          >
                            Continuar
                          </button>
                          <button
                            type="submit"
                            className="btn btn-primary btn-hover me-2"
                            style={{ background: '#fff', color: '#333448', marginLeft: '10px' }}
                          >
                            Cancelar
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row m-0">
            <div className="col-10">
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                {category ?
                  <Box className={isMediumSize ? "header-3-regular" : "body-regular"} sx={{ ...style }}>
                    <Typography className={isMediumSize ? "header-3-regular" : "body-regular"} id="modal-modal-title" variant="h6" component="h2" sx={{ marginBottom: '20px', }}>
                      Puedes ingresar tus datos y enviaremos los resultados a tu correo, o puedes continuar anónimamente.
                    </Typography>
                    <div className="col-12">
                      <div className="form-group local-forms">
                        <label>
                          Nombre <span className="login-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder=""
                          {...register('nombre', {
                            required: {
                              value: true,
                              message: 'Nombre es requerido'
                            }
                          })}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group local-forms">
                        <label>
                          Apellido <span className="login-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder=""
                          {...register('apellido', {
                            required: {
                              value: true,
                              message: 'Apellido es requerido'
                            }
                          })}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group local-forms">
                        <label>
                          Email <span className="login-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="email"
                          placeholder=""
                          {...register('email', {
                            required: {
                              value: true,
                              message: 'Correo electrónico es requerido'
                            }
                          })}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group select-gender">
                        <div className="form-check-inline">
                          <label className='blog-text-sm ui-small'>
                            <input
                              type="checkbox"
                              name="consentimiento"
                              className="form-check-input"
                              {...register('consentimiento', {
                                required: {
                                  value: true,
                                  message: 'Debes aceptar el consentimiento'
                                }
                              })}
                            />
                            Al completar este formulario, Usted acepta que sus datos personales serán compartidos con el DSME, con fines de investigación.
                          </label>
                        </div>
                      </div>
                    </div>
                    {category && <ChildModal result={category} enviar={onSubmit} isMediumSize={isMediumSize}/>}
                  </Box>
                  : <Box sx={{ ...style, textAlign: 'center' }}><Typography  className={isMediumSize ? "header-3-regular" : "body-regular"} id="modal-modal-title" variant="h6" component="h2" sx={{ marginBottom: '20px', }}>
                    ¡Importante! Debes seleccionar una opción por cada pregunta
                  </Typography> </Box>
                }
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TestDepresion;