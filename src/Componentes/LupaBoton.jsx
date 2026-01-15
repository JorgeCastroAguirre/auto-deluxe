import React from 'react'
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoIosCloseCircle } from "react-icons/io";

function LupaBoton({abierto,ontoggle,cerrar,busqueda,setBusqueda}) {
  return (
    <div className='contenedor_lupa'>
        <button className='boton_lupa' onClick={ontoggle}>
            <HiMagnifyingGlass/>
        </button>

        {abierto && (
            <div className="recuadro_busqueda"> 
                <input 
                    className='input_de_busqueda'
                    type="text"
                    placeholder="Buscar producto..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                />
                <HiMagnifyingGlass className='icono_lupa'/>
                <IoIosCloseCircle className='icono_cerrar_input' onClick={cerrar}/>     
            </div>
        )}  
    </div>
    
  )
}

export default LupaBoton