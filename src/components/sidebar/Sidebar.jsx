import React from 'react';
import { LineStyle, Timeline, TrendingUp, PermIdentity, MailOutline, WorkOutline, Report, ChatBubble, Forum, DirectionsBoat, Accessibility } from '@material-ui/icons';
import "./sidebar.css";
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
            <div className="sidebarMenu">
                <h3 className='sidebarTitle'>Dashborad</h3>
                <ul className='sidebarList'>
                    <Link to="/" className='link'>
                        <li className='sidebarlistItem active'>
                            <LineStyle className='sidebarIcon'/>
                            Inicio
                        </li>
                    </Link>
                    
                    <li className='sidebarlistItem'>
                        <Timeline className='sidebarIcon'/>
                        Analisis
                    </li>
                    <li className='sidebarlistItem'>
                        <TrendingUp className='sidebarIcon'/>
                        Alquileres
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className='sidebarTitle'>Menu rápido</h3>
                <ul className='sidebarList'>
                    <Link to="/users" className='link'>
                        <li className='sidebarlistItem'>
                            <PermIdentity className='sidebarIcon'/>
                            Usuarios
                        </li>    
                    </Link>
                    <Link to="/vehiculos" className='link'>
                        <li className='sidebarlistItem'>
                            <DirectionsBoat className='sidebarIcon'/>
                            Vehiculos
                        </li>
                    </Link>
                    <Link to="/rolesList" className='link'>
                        <li className='sidebarlistItem'>
                            <Accessibility className='sidebarIcon'/>
                            Roles
                        </li>
                    </Link>
                    
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className='sidebarTitle'>Notificaciones</h3>
                <ul className='sidebarList'>
                    <li className='sidebarlistItem'>
                        <MailOutline className='sidebarIcon'/>
                        eMail
                    </li>
                    <li className='sidebarlistItem'>
                        <Forum className='sidebarIcon'/>
                        Feedback
                    </li>
                    <li className='sidebarlistItem'>
                        <ChatBubble className='sidebarIcon'/>
                        Mensajes
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className='sidebarTitle'>Personal</h3>
                <ul className='sidebarList'>
                    <li className='sidebarlistItem'>
                        <WorkOutline className='sidebarIcon'/>
                        Administrar
                    </li>
                    <li className='sidebarlistItem'>
                        <Timeline className='sidebarIcon'/>
                        Analiticas
                    </li>
                    <li className='sidebarlistItem'>
                        <Report className='sidebarIcon'/>
                        Reportes
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}








