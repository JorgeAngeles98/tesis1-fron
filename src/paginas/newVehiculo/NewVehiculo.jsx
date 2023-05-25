import React from 'react';
import "./newVehiculo.css";
import { Link } from 'react-router-dom';

export default function NewVehiculo() {
    return (
        <div className='newVehiculo'>
            <h1 className='newVehiculoTitle'>Nuevo vehiculo</h1>
            <form className='newVehiculoForm'>
                <div className='newVehiculoItem'>
                    <label>Imagen</label>
                    <input type="file" id='file' />
                </div>
                <div className='newVehiculoItem'>
                    <label>Nombre del vehiculo</label>
                    <input type="text" placeholder="Lancha N°123"/>
                </div>
                <div className='newVehiculoItem'>
                    <label> Tipo de Vehiculo</label>
                    <input type="text" placeholder='Lancha' />
                </div>
                <div className='newVehiculoItem'>
                    <label>Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className='newVehiculoItem'>
                    <label>Precio del Vehiculo</label>
                    <input type="number" placeholder='s/ 20000' />
                </div>
                <Link to="/vehiculos">
                    <button className='newVehiculoButton'>Crear</button>
                </Link>
                
            </form>
        </div>
    )
}
