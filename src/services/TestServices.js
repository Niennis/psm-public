export const sendMailTests = async (input) => {
  const SEND_MAIL_URL = 'https://calculatetestpoints-fpdthpb8d3fqh2a4.eastus-01.azurewebsites.net/main'

  const body = {
    nombre: input.nombre,
    apellido: input.apellido,
    mail: input.mail,
    test: input.test,
    puntaje: input.puntaje,
    resultado: input.resultado,
  }

  const data = await fetch(SEND_MAIL_URL, {
    method: "POST",
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(body)
  })

  const response = await data.json()
  return response

}


// export const fetchPatientsDespejeFalse = async () => {
//   const USERS_BY_EMAIL = process.env.NEXT_PUBLIC_CON_DESPEJE

//   const data = await fetch(USERS_BY_EMAIL, {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json',
//       'access-control-allow-origin': '*',
//     },
//   })
//   return data.json()
// }
