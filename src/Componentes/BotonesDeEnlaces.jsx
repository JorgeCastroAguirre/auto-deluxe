import React from 'react'
import {NavLink} from 'react-router-dom'
import '../Hojas-de-estilo/BotonesDeEnlaces.css'


function BotonesDeEnlaces(props) {
  return (
    <>
    <div className='contenedor_botones_de_enlaces'>
      <div className='padre_boton_enlace'>
        <NavLink className="botones_enlaces" to={props.link}>{props.nombre}</NavLink>
      </div>
    </div>
    </>
  ) 
}

export default BotonesDeEnlaces