'use client'
import { useState } from "react";
import Link from "next/link";
import { useForm } from 'react-hook-form';
import { useMediaQuery } from "@mui/material";
import { saludMental01 } from "@/components/imagepath";
import { FaArrowLeft } from "react-icons/fa";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Fragment } from "react";
import { useRouter } from 'next/navigation';

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

const determinarDescripcion = (puntaje) => {
  const categoria = resultados.find(resultado => puntaje >= resultado.puntaje[0] && puntaje <= resultado.puntaje[1]);
  return categoria
}

const ChildModal = ({ result }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Button onClick={() => { handleOpen() }}>Enviar correo</Button>
      <Button onClick={() => { handleOpen() }}>Resultados anónimos</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: '800px' }}>
          <h2 id="child-modal-title">{result.titulo}</h2>
          <p id="child-modal-description">
            {result.descripcion}
          </p>
          <Button onClick={handleClose}>Cerrar</Button>
        </Box>
      </Modal>
    </Fragment>
  );
}

const TestDepresion = () => {
  const [resultado, setResultado] = useState(null)
  const matches = useMediaQuery('(min-width:600px)');
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState()
  const router = useRouter()

  const calculate = () => {
    const data = watch()

    let values = Object.values(data);
    let filterValues = values.filter(elemento => !isNaN(Number(elemento)) && elemento !== null);
    // Sumamos los valores
    let sum = filterValues.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue), 0);
    return sum
  }

  const handleOpen = () => {
    setOpen(true)
    const result = calculate()
    const response = determinarDescripcion(result)
    setCategory(response)
  };
  const handleClose = () => setOpen(false);

  const { register, handleSubmit, watch,
    formState: { errors }
  } = useForm()

  const onSubmit = handleSubmit(async (data) => {
    console.log(data)
  })

  return (
    <>
      {matches && <div style={{
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
      <div className="page-wrapper sailec" style={{ margin: 'auto' }}>
        <div style={{ marginTop: !matches && '47px' }}>
          {/* Page Header */}
          {matches &&
            <button className='btn mt-4 mb-2'
              style={{
                border: '1px solid #A6A6A6',
                height: '56px',
                width: '163px',
                padding: '0px 24px',
                borderRadius: '100px',
                marginLeft: '86px'
              }}
              onClick={() => router.back()}
            >
              <FaArrowLeft /> Volver
            </button>
          }
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card" style={{ border: 'none' }}>
                <div className="card-body" style={{ padding: matches ? '0 96px' : '32px' }}>
                  <form>
                    <div className="row d-flex flex-column align-items-center">
                      <div className="col-12" style={{ padding: 0 }}>
                        <div className="form-heading">
                          <div className="card-body flex-row d-flex mt-4" style={{ paddingLeft: 0 }}>
                            <h2
                              className={matches ? 'blog-title' : 'blog-title-sm'}>
                              Test de Síntomas de Depresión (PHQ-9)
                            </h2>
                          </div>
                          <div className="row">
                            <div className={`${matches ? 'blog-text' : 'blog-text-sm'} col-12 col-md-10`}>
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

                      {
                        preguntas.map((item, index) => (
                          <div
                            className={`col-12 ${matches ? 'blog-text' : 'blog-text-sm'}`}
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
                                    className={matches ? 'blog-text' : 'blog-text-sm'}
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
                                    className={matches ? 'blog-text' : 'blog-text-sm'}
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
                                    className={matches ? 'blog-text' : 'blog-text-sm'}
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
                                    className={matches ? 'blog-text' : 'blog-text-sm'}
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
                      {Object.keys(errors).length !== 0 && <span className="login-danger">
                        <small>Debes seleccionar una opción por cada pregunta</small>
                      </span>
                      }
                      <div className="col-12 mt-4">
                        <div className="doctor-submit text-end">
                          <button
                            type="button"
                            className="btn btn-primary me-2"
                            onClick={handleOpen}
                          >
                            Continuar
                          </button>
                          <button
                            type="submit"
                            className="btn btn-primary btn-hover me-2"
                            style={{ background: '#fff', color: '#333448' }}
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
          <div className="row">
            <div className="col-10">
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ marginBottom: '20px' }}>
                    Puedes ingresar tus datos y enviaremos los resultados a tu correo, o puedes continuar anónimamente.
                  </Typography>
                  <div className="col-12 ">
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
                        <label className={matches ? 'blog-text' : 'blog-text-sm'}>
                          <input
                            type="checkbox"
                            name="gender"
                            className="form-check-input"
                            {...register('consentimiento', {
                              required: {
                                value: true,
                                message: 'Correo electrónico es requerido'
                              }
                            })}
                          />
                          Al completar este formulario, Usted acepta que sus datos personales serán compartidos con el DSME, con fines de investigación.
                        </label>
                      </div>
                    </div>
                  </div>
                  <ChildModal result={category} />
                </Box>
              </Modal>
            </div>

          </div>
        </div>
      </div>

    </>
  )

}

export default TestDepresion;