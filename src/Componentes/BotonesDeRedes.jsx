import React from 'react'
import {NavLink} from 'react-router-dom'
import '../Hojas-de-estilo/BotonesDeRedes.css'

function BotonesDeRedes({link,Icono}) {
  return (
    <>
      <div className='botones_redes'>
        <NavLink className='botones' to={link}><Icono/></NavLink>
      </div>
    </>
  )
}

export default BotonesDeRedes