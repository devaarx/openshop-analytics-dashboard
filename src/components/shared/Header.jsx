import React from 'react'
import '../../styles/Header.css'

// Importing SVGs
import notificationIcon from '../img/icons/Notifications.svg'
import avatarImage from '../img/Profile.svg'

export default function Header() {
    return (
        <div className="header-container">
            <div className="header-title">Dashboard</div>
            <div className="header-icons">
                <img src={notificationIcon} alt="Notification" className="notification-icon" />
                <div className="avatar" style={{ backgroundImage: `url(${avatarImage})` }}></div>
            </div>
        </div>
    )
}
