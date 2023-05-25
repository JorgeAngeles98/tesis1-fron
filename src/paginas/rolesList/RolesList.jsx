import React from 'react';
import "./rolesList.css";
import { rolesRows } from '../../dummyData';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function RolesList() {
    const [data, setData] = useState(rolesRows);
    const handleDelete = (id)=>{
    setData(data.filter((item)=> item.id !==id));
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Nombre', width: 250 },
    {
      field: 'descripcion',
      headerName: 'Descripcion',
      width: 350,
    },
    {
        field: 'estado',
        headerName: 'Estado',
        width: 180,
      },
    {
      field:'action',
      headerName:'Acciones',
      width: 150,
      renderCell: (params)=>{
        return(
          <>
            <Link to ={"/rolesList/"+params.row.id}>
              <button className="rollListEdit">Editar</button>
            </Link>
            
            <DeleteOutline className='rollListDelete' onClick={()=>handleDelete(params.row.id)}/>
          </>
          
        );
      },
    },
  ];
  return (
    <div className='rollList'>
        <div className='rollContenedor'>
            <h1 className='rollTitulo'>Lista de roles de usuario</h1>
            <Link to="/rolesNew">
                <button className='rollAddBoton'>Nuevo</button>
            </Link>
        </div>
        <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection/>
    </div>
  )
}
