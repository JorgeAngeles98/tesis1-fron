import React from 'react';
import "./roles.css";
import { Link } from 'react-router-dom';

export default function Roles() {
  return (
    <div className='roll'>
        <div className='rollTitleContainer'>
            <h1 className='rollTitle'>Editar Usuario</h1>
            <Link to="/rolesList">
                <button className='rollAddButton'>Volver</button>
            </Link>
        </div>
        <div className='rollContainer'>
            <div className='rollUpdate'>
                <form className='rollUpdateForm'>
                    <div className='rollUpdateLeft'>
                        <div className='rollUpdateItem'>
                            <label>Nombre del Rol</label>
                            <input type="text" placeholder='Administrador' className='rollUpdateInput'/>
                        </div>
                        <div className='rollUpdateItem'>
                            <label>Descripcion</label>
                            <input type="text" placeholder='tendra todo las operaciones y gestiones disponible' className='rollUpdateInputMax'/>
                        </div>
                        <div className='rollUpdateItem'>
                            <label>Activar</label>
                            <select name="active" id="active">
                                <option value="yes">Si</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        
                    </div>
                    <div className='rollUpdateRight'>
                        <Link to="/rolesList">
                            <button className='rollUpdateButton'>Actualizar</button>
                        </Link>
                        
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
