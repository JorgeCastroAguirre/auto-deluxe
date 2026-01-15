import React from 'react'


function Productos({imagen,nombre,precio}) {
  return (
    <>
        <div className='contenedor_producto'>
            <div className="caja_imagen_producto">
                <img className='imagen_producto' src={imagen}/>
            </div>
            <p className='nombre_producto'>{nombre}</p>
            <p className='precio_producto'>{precio}</p>
        </div>
    </> 
  ) 
}

export default Productos