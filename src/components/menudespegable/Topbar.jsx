import React from 'react';
import "./topbar.css";
import {
    NotificationsNone, Settings, AccessAlarm
} from "@material-ui/icons";
import { Link } from 'react-router-dom';

export default function Topbar() {
    return (

        <div className="topbar">
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <Link to="/" className='link'>
                        <span className='logo'>Bujama Lacus</span>
                    </Link>
                    
                </div>
                <div className='topRight'>
                    <div className='topbarIconsContainer'>
                        <NotificationsNone />
                        <span className="topIconBage">2</span>
                    </div>
                    <div className='topbarIconsContainer'>
                        <Settings />
                    </div>
                    <div className='topbarIconsContainer'>
                        <AccessAlarm />
                    </div>
                    <img src="https://upload-os-bbs.hoyolab.com/upload/2023/03/08/152302988/3b9415417f390e73c36b5cb0a4d46134_6205935156698273499.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fquality%2Cq_80%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp" alt="" className='topAvatar' />
                </div>
            </div>
        </div>

    )
}