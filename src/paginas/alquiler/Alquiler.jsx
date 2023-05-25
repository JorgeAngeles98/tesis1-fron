import React from 'react'
import "./alquiler.css"
import { Link } from 'react-router-dom'
import Chart from '../../components/chart/Chart';
import {alquilerData} from "../../dummyData";
import { Publish } from '@material-ui/icons';

export default function  Alquiler() {
  return (
    <div className='alquiler'>
        <div className='alquilerTitleContainer'>
            <h1 className='alquilerTitle'>Lanchas</h1>
            <Link to="/vehiculos">
                <button className='alquilerAddButton'>Volver</button>
            </Link>
        </div>
        <div className='vehiculoTop'>
            <div className='vehiculoTopLeft'>
                <Chart data={alquilerData} datakey="N° de veces alquilado" title="Numero de Alquileres del mes anteior"/>
            </div>
            <div className='vehiculoTopRight'>
                <div className='vehiculoInfoTop'>
                    <img src="https://i0.wp.com/nautispots.com/wp-content/uploads/2018/08/DF6E0F1F-A89C-49D2-AA23-95CCB05AD9CD.jpeg?fit=700%2C452&ssl=1" alt="" className='vehiculoInfoImg'/>
                    <span className='vehiculoName'>Vehiculo 123</span>
                </div>
                <div className='vehiculoInfoBottom'>
                    <div className='vehiculoInfoItem'>
                        <span className='vehiculoInfoKey'>ID: </span>
                        <span className='vehiculoInfoValue'>123</span>
                    </div>
                    <div className='vehiculoInfoItem'>
                        <span className='vehiculoInfoKey'>Precio: </span>
                        <span className='vehiculoInfoValue'>10000</span>
                    </div>
                    <div className='vehiculoInfoItem'>
                        <span className='vehiculoInfoKey'>Estado: </span>
                        <span className='vehiculoInfoValue'>Mantenimiento</span>
                    </div>
                    <div className='vehiculoInfoItem'>
                        <span className='vehiculoInfoKey'>tipo: </span>
                        <span className='vehiculoInfoValue'>Lancha</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='vehiculoBottom'>
            <form className='vehiculoForm'>
                <div className='vehiculoFormLeft'>
                    <label>Nombre Vehiculo</label>
                    <input type="text" placeholder='Lancha 001'/>
                    <label>Disponibilidad</label>
                    <select name="disponibilidad" id="disponibilidad">
                        <option value="disponible">Disponible</option>
                        <option value="mantenimiento">Mantenimiento</option>
                        <option value="inactivo">Inactivo</option>
                    </select>
                    <label>Activar</label>
                    <select name="active" id="active">
                        <option value="yes">Si</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className='vehiculoFormRight'>
                    <div className='vehiculoUpload'>
                        <img src="https://i0.wp.com/nautispots.com/wp-content/uploads/2018/08/DF6E0F1F-A89C-49D2-AA23-95CCB05AD9CD.jpeg?fit=700%2C452&ssl=1" alt="" className='vehiculoUploadImg'/>
                        <label for="file">
                            <Publish/>
                        </label>
                        <input type="file" id='file' style={{display:"none"}}/>
                    </div>
                    <Link to="/vehiculos">
                        <button className='vehiculoButton'>Actualizar</button>
                    </Link>
                    
                </div>
            </form>
        </div>
    </div>
  )
}
