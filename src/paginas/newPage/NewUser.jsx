import React from 'react';
import "./newUser.css";
import { Link } from 'react-router-dom';


export default function NewUser() {
    return (
        <div className='newUser'>
            <h1 className='newUserTitle'>Nuevo Usuario</h1>
            <form className='newUserForm'>
                <div className='newUserItem'>
                    <label>Nombre de Usuario</label>
                    <input type="text" placeholder='JorDan' />
                </div>
                <div className='newUserItem'>
                    <label>Nombre Completo</label>
                    <input type="text" placeholder='Jorge Angeles Torres' />
                </div>
                <div className='newUserItem'>
                    <label>Email</label>
                    <input type="email" placeholder='jorge.angeles.zx@gmail.com' />
                </div>
                <div className='newUserItem'>
                    <label>Contraseña</label>
                    <input type="password" placeholder='password' />
                </div>
                <div className='newUserItem'>
                    <label>Telefono</label>
                    <input type="text" placeholder='+51 989 112 138' />
                </div>
                <div className='newUserItem'>
                    <label>Direcion</label>
                    <input type="text" placeholder='Lima, Peru' />
                </div>
                
                <div className='newUserItem'>
                    <label>Activo</label>
                    <select className='newUserSelect' name="active" id="active">
                        <option value="yes">Si</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className='newUserItem'>
                    <label>Rol</label>
                    <select name="roll" id="roll" className='newUserSelect'>
                        <option value="adminSis">Administrador de sistemas</option>
                        <option value="Admin">Administrador</option>
                        <option value="Pilot">Piloto</option>
                        <option value="Almac">Almacenero</option>
                        <option value="Segur">Personal de Seguridad</option>
                        <option value="Cliente">Cliente</option>
                    </select>
                </div>
                <Link to="/users" className='link'>
                    <button className='newUserButton'>Crear</button>
                </Link>
            </form>
        </div>
    )
}
