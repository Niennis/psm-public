'use client'
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

import FooterDae from "@/components/Footer";

import { useMediaQuery } from "@mui/material";
import { FaArrowLeft } from "react-icons/fa";

export default function PlanDeAccionEnSaludMental({ children }) {
  const isMediumSize = useMediaQuery('(min-width:768px)');
  const router = useRouter()
  const pathname = usePathname()

  const isActive = (href) => {
    return pathname === href ? 'quienes-somos-active' : 'nav-link-quienes-somos';
  };

  return (
    <>
      {isMediumSize && <div style={{
        height: '620px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_IMG}plan_accion_cabecera.jpg${process.env.NEXT_PUBLIC_KEY_IMG}`}
          alt="Quienes somos cabecera"
          height={0}
          width={0}
          sizes="100vw"
          fill
          priority // Carga optimizada para imágenes importantes
          style={{
            objectFit: 'cover',
            objectPosition: 'center 10%',
            height: '100%',
            width: '100%',
          }}
        />
      </div >
      }

      <div className="row flex-column d-flex align-items-center mt--md-5 section-quienes-somos m-0" /* style={{padding:0, margin: 0}} */>
        <div className="col-12 mt--md-5 p-0">
          <div>
            {isMediumSize &&
              <>
                <button className=' mt-4 mb-5 lato-btn btn-back-desktop'
                  onClick={() => router.back()}
                >
                  <FaArrowLeft /> Volver
                </button>
              </>
            }
            {children}
          </div>
        </div>
      </div>
      <FooterDae />
    </>
  );
}
