import React from 'react';
import "./usuario.css";
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function Usuario() {
  return (
    <div className='user'>
        <div className='userTitleContainer'>
            <h1 className='userTitle'>Editar Usuario</h1>
            <Link to="/users">
                <button className='userAddButton'>Volver</button>
            </Link>
        </div>
        <div className='userContainer'>
            <div className='userShow'>
                <div className='userShowTop'>
                    <img 
                        src="https://e0.pxfuel.com/wallpapers/442/989/desktop-wallpaper-perfil-boy-face-thumbnail.jpg" 
                        alt="" 
                        className='userShowImg'/>
                    <div className='userShowTopTitle'>
                        <span className='userShowUsername'>Akiles Ezkibel Madrazo</span>
                        <span className='userShowUserTitle'>Administrador</span>
                    </div>
                </div>
                <div className='userShowBottom'>
                    <span className='userShowTitle'>Detalles de cuenta</span>
                    <div className='userShowInfo'> 
                        <PermIdentity className='userShowIcon'/>
                        <span className='userShowInfoTitle'>akilesZX2000</span>
                    </div>
                    <div className='userShowInfo'> 
                        <CalendarToday className='userShowIcon'/>
                        <span className='userShowInfoTitle'>09 - 10 - 2023</span>
                    </div>
                    <span className='userShowTitle'>Detalle de contacto</span>
                    <div className='userShowInfo'> 
                        <PhoneAndroid className='userShowIcon'/>
                        <span className='userShowInfoTitle'>+51 989 112 138</span>
                    </div>
                    <div className='userShowInfo'> 
                        <MailOutline className='userShowIcon'/>
                        <span className='userShowInfoTitle'>akilesZX@gmail.com</span>
                    </div>
                    <div className='userShowInfo'> 
                        <LocationSearching className='userShowIcon'/>
                        <span className='userShowInfoTitle'>Peru</span>
                    </div> 
                </div>
            </div>
            <div className='userUpdate'>
                <span className='userUpdateTitle'>Editar</span>
                <form className='userUpdateForm'>
                    <div className='userUpdateLeft'>
                        <div className='userUpdateItem'>
                            <label>Nombre de usuario</label>
                            <input type="text" placeholder='akilesZX2000' className='userUpdateInput'/>
                        </div>
                        <div className='userUpdateItem'>
                            <label>Nombre Completo</label>
                            <input type="text" placeholder='akiles Ezkibel Madrazo' className='userUpdateInput'/>
                        </div>
                        <div className='userUpdateItem'>
                            <label>Email</label>
                            <input type="text" placeholder='akilesZX@gmail.com' className='userUpdateInput'/>
                        </div>
                        <div className='userUpdateItem'>
                            <label>Telefono</label>
                            <input type="text" placeholder='989112138' className='userUpdateInput'/>
                        </div>
                        <div className='userUpdateItem'>
                            <label>Direccion</label>
                            <input type="text" placeholder='Lima, Peru' className='userUpdateInput'/>
                        </div>
                        <div className='userUpdateItem'>
                            <label>Rol</label>
                            <select name="roll" id="roll">
                                <option value="adminSis">Administrador de sistemas</option>
                                <option value="Admin">Administrador</option>
                                <option value="Pilot">Piloto</option>
                                <option value="Almac">Almacenero</option>
                                <option value="Segur">Personal de Seguridad</option>
                                <option value="Cliente">Cliente</option>
                            </select>
                        </div>
                    </div>
                    <div className='userUpdateRight'>
                        <div className='userUpdateUpload'>
                            <img src="https://e0.pxfuel.com/wallpapers/442/989/desktop-wallpaper-perfil-boy-face-thumbnail.jpg" className='userUpdateImg'/>
                            <label htmlFor="file">
                                <Publish className='userUpdateIcon'/>
                            </label>
                            <input type="file" id="file" style={{display:"none"}}/>
                        </div>
                        <Link to="/users">
                            <button className='userUpdateButton'>Actualizar</button>
                        </Link>
                        
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
