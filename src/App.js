import Topbar from "./components/menudespegable/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Inicio from "./paginas/inicio/Inicio"
import UserList from "./paginas/userList/UserList";
import NewUser from "./paginas/newPage/NewUser";
import Usuario from "./paginas/usuario/Usuario"
import AlquilerList from "./paginas/AlquileresList/AlquilerList";
import Alquiler from "./paginas/alquiler/Alquiler";
import NewVehiculo from "./paginas/newVehiculo/NewVehiculo";
import RolesList from "./paginas/rolesList/RolesList";
import Roles from "./paginas/roles/Roles";
import RolesNew from "./paginas/rolesNew/RolesNew";

function App() {
  return (
      <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="rolesList" element={<RolesList/>}/>
            <Route path="/rolesList/:rolesId" element={<Roles/>}/>
            <Route path="/rolesNew" element={<RolesNew/>}/>
            <Route exact path="/" element={<Inicio/>}/>
            <Route path="/users" element={<UserList/>}/>
            <Route path="/users/:userId" element={<Usuario/>}/>
            <Route path="/newUser" element={<NewUser/>}/>
            <Route path="/vehiculos" element={<AlquilerList/>}/>
            <Route path="/vehiculos/:vehiculosId" element={<Alquiler/>}/>
            <Route path="/newVehiculo" element={<NewVehiculo/>}/>
          </Routes>
        </div>
      </Router>
      
  );
}

export default App;
