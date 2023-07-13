import React from 'react'

import {BsFillEnvelopeAtFill, BsLinkedin, BsInstagram} from "react-icons/bs"

function Footer() {
  return (
    <div style={{borderTop: "1px solid"}}>
      <div style={{display: 'flex', flexDirection: "row", justifyContent:"space-between", marginTop: "20px"}}>
          <BsFillEnvelopeAtFill />
          <BsLinkedin />
          <BsInstagram />
      </div>


    </div>
  )
}

export default Footer