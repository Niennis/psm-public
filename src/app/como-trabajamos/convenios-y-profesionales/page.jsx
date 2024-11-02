'use client'
import { useState } from "react";
import Link from "next/link";
import FrequentAskedQuestions from "@/components/FAQ";
import { useMediaQuery } from "@mui/material";

const ConveniosYProfesionales = () => {
  const isMediaSize = useMediaQuery('(min-width:768px)');
  const [activeTab, setActiveTab] = useState('descripcion-general');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (

    <div className="row prevencion flex-column d-flex m-0" >
      <div className="col-12" >
        <div className="card quienes-somos" style={{ padding: isMediaSize ? '0px 96px' : '120px 24px 0px', margin: '0px', border: 'none' }}>
          <div className="card-body" style={{ padding: '0px', margin: '0px' }}>
          <h3 className={isMediaSize ? "blog-title" : "blog-title-sm"} style={{ marginTop: !isMediaSize && '20px', fontSize: isMediaSize ? '48px' : '36px', lineHeight: isMediaSize ? '60px': '46px', fontWeight: 700, textWrap: 'balance' }}>
            Convenios y Profesionales recomendados
            </h3>
            <div className="tab-content tab-dsme-content">
             
              <div className='convenios-y-profesionales-recomendados' id="convenios-y-profesionales-recomendados">
                <div className="blog-content">
                  <h2>Convenios</h2>
                  <ul>
                    <li>
                      CEPS Centro Psicológico Universidad Alberto Hurtado. Atención online y presencial. Aranceles de bajo costo. Contacto correo <a href="mailto:ceps@uahurtado.cl">ceps@uahurtado.cl</a>, teléfono <a href="tel:+56933833996">+56968410676</a>, whatsapp <a href="https://wa.me/56975198912">+56975198912</a>
                    </li>
                    <li>
                      Centro de Salud Mosaicos. Atención online y presencial. Arancel $25.000. Contacto correo <a href="mailto:mosaicos.psi@gmail.com">mosaicos.psi@gmail.com</a>, o en Formulario Realizar solicitud de atención a través de correo institucional.
                    </li>
                    <li>
                      Centro Decir. Atención online $15.000 y atención presencial $18.000. Contacto a través de página web <a href="">https://capdecir.cl/</a>, o correo electrónico <a href="">capdecir@gmail.com</a>. Realizar solicitud indicando que son estudiantes UDP.
                    </li>
                    <li>
                      Centro Orgánico de Salud. Atención online y presencial. Arancel Fonasa $15.000, Isapre o sin previsión $18.000. Contacto correo electrónico <a href="">contacto@centrorganico.cl</a>, teléfono <a href="">+56222611397</a>. Realizar solicitud indicando que son estudiantes UDP.
                    </li>
                  </ul>
                  <h2>Profesionales recomendados</h2>
                  <p>
                    En caso de que requieras atención psicológica y no encuentres horas disponibles dentro del Departamento de Salud Mental, disponemos de un listado de profesionales recomendados, a los que se puede acceder a costo preferencial, señalando que son estudiantes UDP.
                  </p>
                  <p>
                    *Importante: Los profesionales han sido entrevistados por el Departamento de Salud Mental, pero no forman parte de la UDP, por lo que son atenciones particulares a costo preferencial, y no derivaciones desde el Departamento de Salud Mental de la Universidad Diego Portales
                  </p>
                  <ul>
                    <li>
                      Psicóloga Nadiesna Olea Rivas. Orientación Cognitivo conductual. Atención online, valor FONASA $13.000, ISAPRE $15.000. Mail de contacto: <a href="">nadiesna.olea.rivas@gmail.com</a>
                    </li>
                    <li>
                      Psicóloga Lorena Espinoza Gálvez. Orientación integrativa. Atención presencial FONASA $12.800. Atención particular online con arancel diferenciado a estudiantes $15.000. Mail de contacto: <a href="">lorena.espinozagal@gmail.com</a>
                    </li>
                    <li>
                      Psicóloga Katherine Veloso D. Orientación psicoanalítica. Atención Online. Consultas por Fonasa, particular e isapre. Valor $16.000. Mail de contacto: <a href="">ps.katherinevelosodiaz@gmail.com</a>.
                    </li>
                    <li>
                      Benjamín Vera B. Orientación psicoanalítica. Atención Online. Consultas Particulares. Valor: rango desde $12.000. Correo de contacto: <a href="">b.vera03@ufromail.cl</a>
                    </li>
                    <li>
                      José Brizuela. Orientación psicoanalítica. Atención online y particular. Valor: rango desde $8.000 a $15.000. Correo de contacto: <a href="">brizuelajosec@gmail.com</a>
                    </li>
                    <li>
                      Constanza Barriga. Orientación Sistémica. Atención online. Consulta Isapre y particular. Valor: entre $20.000 y $25.000. Correo de contacto: <a href="">ps.cuentaconmigo@gmail.com</a>
                    </li>
                    <li>
                      Olga Conley G. Orientación Humanista integrativa. Atención online y presencial. Consulta particular. Valor: $10.000. Correo de contacto: <a href="">olga.conleygarrido@gmail.com</a>
                    </li>
                    <li>
                      Eliana Rodríguez. Orientación Psicoanalítica. Atención online y presencial. Consulta particular e isapres. Correo de contacto: <a href="">merodriguez1@uc.cl</a>
                    </li>
                    <li>
                      Karina Castillo V. Orientación Psicoanalítica. Atención Online. Consulta particular e isapres. Valor: $20.000. Correo de contacto: <a href="">Ps.karina.castillo@gmail.com</a>
                    </li>
                    <li>
                      Eduardo Guajardo. Orientación psicoanalítica. Atención Online. Consulta isapres. Correo de contacto: <a href="">eduardo.guajardo@ug.uchile.cl</a>
                    </li>
                    <li>
                      Bárbara Ruz. Orientación Sistémica. Atención online. Consulta FONASA, particular e isapres. Valor: de $10.000 a $15.000. Correo de contacto: <a href="">barbararuzb@gmail.com</a>
                    </li>
                    <li>
                      Vanesa Arenas M. Orientación  Terapia de Aceptación y Compromiso /cognitivo-conductual. Atención online y particular. Valor: entre $12.000 y $25.000. Correo de contacto: <a href="">vanesa.arenas.va@gmail.com</a>
                    </li>
                    <li>
                      Alejandro Goye. Orientación Integrativa. Atención Online (después de 18:00 hrs.). Consulta Fonasa particular e isapres. Valor $9.310 Fonasa y $15.000 Particular. Correo de contacto: <a href="">psgoye@gmail.com</a>
                    </li>
                    <li>
                      Hernán Fuenzalida. Orientació  Psicoanalítica. Atención online. Consulta particular. Valor: desde $17.000. Correo de contacto: <a href="">hernanfuenzac@gmail.com</a>
                    </li>
                    <li>
                      Andrés Vásquez. Orientación Cognitivo Conductual. Atención Online. Consulta Fonasa (en tramite), Particular e Isapres. Correo de contacto: <a href="">andrsvsqz@gmail.com</a>
                    </li>
                    <li>
                      Karina Garrido. Terapeuta Ocupacional Presencial. Consulta Particular. $15.000. TOMA DE TEST ADOS-2 (TEA) ADULTOS $70.000. Correo de contacto: <a href="">karinagarrido@gmail.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConveniosYProfesionales;