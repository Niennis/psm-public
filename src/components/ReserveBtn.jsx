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

  return (
    <>
      <Link href="#" style={{ cursor: 'not-allowed' }}>
        <button
          className=' btn-reservar ui-large btn-shadow desktop-container '
          style={{
            backgroundColor: bgColor,
            color: color,
            cursor: 'not-allowed',
          }}
        // onClick={handleOpen}
        >
          <Today style={{ margin: matches ? '-2px 4px 0 0' : '-3px 0 0', fontSize: '15px' }} />
          {text}
        </button>

        <button
          className=' btn-reservar-mobile lato-btn btn-shadow mobile-container'
          style={{
            backgroundColor: bgColor,
            color: color,
            cursor: 'not-allowed',
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
