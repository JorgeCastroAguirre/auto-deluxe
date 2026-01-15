import React from 'react'
import {useParams} from 'react-router-dom'
import {listaProductos} from '../Data/listaProductos'
import { FaWhatsapp } from "react-icons/fa";
import '../Hojas-de-estilo/Producto.css'

function Producto() {
    const {producto_id}=useParams()

    const producto = listaProductos.find(
      p => p.id === Number(producto_id)
    )
    if (!producto) {
      return <h2>Producto no encontrado</h2>
    }
    const numeroWhatsApp = "996442395" // tu número real

    const mensaje = `Hola, estoy interesado en el producto:
    ${producto.nombre}
    Precio: ${producto.precio}`

    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`

   
  return (
    <>
      <div className='contenedor_producto_'>
        <div className='contenedor_imagenes'>
          <img src={producto.imagen} />
          <img src={producto.i_2} />
          <img src={producto.i_3} />
          <img src={producto.i_4} />
        </div>
        <div className='caracteristicas'>
            <div className='contenedor_definicion'>
              <p>{producto.nombre}</p>
              <p>{producto.precio}</p>
              <a href={linkWhatsApp} target="_blank" rel="noopener noreferrer" className="link_wssp">
                <button className='boton_wssp'>
                  <FaWhatsapp className='icono_wssp'/>
                  <p className='comprar_wssp'>Comprar por WHATSAPP</p>
                </button>
              </a>
            </div>
        </div>
      </div>  
      
    </>
  )
}

export default Producto