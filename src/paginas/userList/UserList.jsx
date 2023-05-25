import React from 'react';
import "./userList.css";
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function UserList() {
  const [data, setData] = useState(userRows);
  const handleDelete = (id)=>{
    setData(data.filter((item)=> item.id !==id));
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'username', headerName: 'Usuario', width: 200, renderCell:(params)=>{
      return(
        <div className='userListUser'>
          <img className='userListImg' src={params.row.avatar} alt="" />
          {params.row.username}
        </div>
      )
    } },
    { field: 'email', headerName: 'Email', width: 250 },
    {
      field: 'status',
      headerName: 'Estado',
      width: 180,
    },
    {
      field: 'roll',
      headerName: 'Rol',
      width: 180,
    },
    {
      field:'action',
      headerName:'Acciones',
      width: 150,
      renderCell: (params)=>{
        return(
          <>
            <Link to ={"/users/"+params.row.id}>
              <button className="userListEdit">Editar</button>
            </Link>
            
            <DeleteOutline className='userListDelete' onClick={()=>handleDelete(params.row.id)}/>
          </>
          
        );
      },
    },
  ];
  return (
    
    <div className='userList'>
        <div className='usuarioContenedor'>
            <h1 className='userTitulo'>Lista de Usuarios</h1>
            <Link to="/newUser">
                <button className='userAddBoton'>Nuevo</button>
            </Link>
        </div>
        <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection/>
    </div>
    
  )
  
}
 