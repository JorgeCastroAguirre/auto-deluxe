import React from 'react'
import { BsSliders2 } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

function FiltrarBoton({abierto,cerrado,estado,precioMax,setPrecioMax}) {
  return (
    <div className='boton_filtrar'>

        <button className='icono_filtrar' onClick={estado? cerrado:abierto}>
            <BsSliders2/>  
        </button>
      
      {estado &&(
        <div className='panel_filtro'>
          <button className='cerrar_filtro' onClick={cerrado}>
            <IoClose />
          </button>
          <div className='filtrar_por_precio'>
            <p className='texto_filtrar_por_precio'>Filtrar y ordenar por: </p>
            <p>Precio:</p>
            <input type="range" min="1" max="200" step="1" value={precioMax} onChange={(e)=>setPrecioMax(Number(e.target.value))}/>
            <p>Hasta S/. {precioMax}</p>
          </div>
        </div>
      )}

    </div>
  )
}

export default FiltrarBoton