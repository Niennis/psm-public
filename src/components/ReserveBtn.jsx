"use client"
// import { useState } from "react";
import { Today } from "@mui/icons-material"
// import Modal from "./Modal";
import Link from "next/link"
// import { redirect } from "next/dist/server/api-utils"
import { redirect } from "next/navigation"
import { useMediaQuery } from "@mui/material"

const ReserveBtn = ({ text, bgColor, color }) => {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const matches = useMediaQuery('(min-width:600px)');
  const isMediumDevice = useMediaQuery('(min-width:601px and max-width:1280px)');
  const URL_RESERVAR = '#'

  return (
    <>
      <Link href={URL_RESERVAR}>

        {/* DESKTOP */}
        <button
          className=' btn-reservar ui-large btn-shadow desktop-container '
          style={{
            backgroundColor: bgColor,
            color: color,
            width: isMediumDevice ? '189px' : '140px',
          }}
        // onClick={handleOpen}
        >
          <Today style={{ margin: matches ? '-2px 4px 0 0' : '-3px 0 0', fontSize: '15px' }} />
          {text}
        </button>

        {/* MOBILE */}
        <button
          className=' btn-reservar-mobile lato-btn btn-shadow mobile-container'
          style={{
            backgroundColor: bgColor,
            color: color,
          }}
        // onClick={handleOpen}
        >
          <Today style={{ margin: matches ? '-2px 4px 0 0' : '-3px 0 0', fontSize: '15px' }} />
          {text}
        </button>
      </Link>
      {/* <Modal open={open} handleClose={handleClose} /> */}
    </>
  )
}

export default ReserveBtn;
