import React from 'react'
import BotonesDeEnlaces from './BotonesDeEnlaces'
import BotonesDeRedes from './BotonesDeRedes'
import imagenEmpresa from '../Imagenes/imagen_empresa.jpeg'
import { FaFacebook,FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import '../Hojas-de-estilo/Padre.css'



function Padre() {
  return (  
    <>
      <div className='contenedor_principal'> 
        <div className='contenedor_imagen_empresa'><img className='imagen_empresa' src={imagenEmpresa}/></div>
        <p className='texto-empresa'>AutoAccesorios - Lima Peru</p>
        <p className='slogan_empresa'>"Lo que tu auto necesita, sin complicaciones".</p>
        <BotonesDeEnlaces link='' nombre='COMPRA POR WHATSAPP'/>
        <BotonesDeEnlaces link='/catalogo' nombre='CATALOGO'/>
        
          <div><p>NUESTRAS REDES: </p></div>
          <div className='contenedor_botones_redes'>
          
            <BotonesDeRedes link='https://www.tiktok.com/@autodeluxe_store' Icono={AiFillTikTok}/>
            <BotonesDeRedes link='https://www.tiktok.com/@autodeluxe_store' Icono={FaInstagram}/>
            <BotonesDeRedes link='https://www.facebook.com/AutoDeluxeStore' Icono={FaFacebook}/>
          
          </div>
        

      </div>
        
      
      
    </>

  )
}
export default Padre