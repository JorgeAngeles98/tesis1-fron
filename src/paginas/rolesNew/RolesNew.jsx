import React from 'react';
import "./rolesNew.css";
import { Link } from 'react-router-dom';

export default function RolesNew() {
  return (
    <div className='rolesNew'>
        <h1 className='rolesNewTitle'>Nuevo Rol</h1>
            <form className='rolesNewForm'>
                <div className='rolesNewItem'>
                    <label>Nombre del Rol</label>
                    <input type="text" placeholder="Administrador"/>
                </div>
                <div className='rolesNewItem'>
                    <label> Descripcion</label>
                    <input type="text" placeholder='tendra todo las operaciones y gestiones disponible' className='rolesNewExtend'/>
                </div>
                <div className='rolesNewItem'>
                    <label>Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <Link to="/rolesList">
                    <button className='rolesNewButton'>Crear</button>
                </Link>
            </form>
    </div>
  )
}
