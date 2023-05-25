import React from 'react';
import "./alquilerList.css";
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { alquilerRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function Alquileres() {
  const[data, setData] = useState(alquilerRows)
  const handleDelete = (id) =>{
    setData(data.filter((item)=> item.id !==id));
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'product', headerName: 'Producto', width: 200, renderCell:(params)=>{
      return(
        <div className='alquilerListItem'>
          <img className='alquilerListImg' src={params.row.avatar} alt="" />
          {params.row.name}
        </div>
      )
    } },
    { field: 'vehiculo', headerName: 'Tipo', width: 150 },
    {
      field: 'status',
      headerName: 'Estado',
      width: 180,
    },
    {
      field: 'transaction',
      headerName: 'Precio',
      width: 180,
    },
    {
      field:'action',
      headerName:'Acciones',
      width: 150,
      renderCell: (params)=>{
        return(
          <>
            <Link to ={"/vehiculos/"+params.row.id}>
              <button className="alquilerListEdit">Editar</button>
            </Link>
            
            <DeleteOutline className='alquilerListDelete' onClick={()=>handleDelete(params.row.id)}/>
          </>
          
        );
      },
    },
  ];
  return (
    <div className='alquilerList'>
        <div className='vehiculoContenedor'>
            <h1 className='vehiculoTitulo'>Lista de Vehiculos</h1>
            <Link to="/newVehiculo">
                <button className='vehiculoAddBoton'>Nuevo</button>
            </Link>
        </div>
        <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection/>
    </div>
  )
}
