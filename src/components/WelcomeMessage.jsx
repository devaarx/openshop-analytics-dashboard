// WelcomeMessage.jsx
import React from 'react'
import '../styles/Dashboard.css'
import VectorBackground from '../components/img/icons/Vector.svg' // Import the SVG
import '../styles/Dashboard.css'

function WelcomeMessage() {
    return (
        <div className="welcome-section" style={{ backgroundImage: `url(${VectorBackground})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className="Close">
                <div className="Icon"></div>
            </div>
            <div className="WelcomeBackJohnDoe">Welcome back, John Doe</div>
            <div className="welcomeMessage">
                <span>The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy.</span>
                <br />
                <span>Look here for more information</span>
            </div>
        </div>
    )
}

export default WelcomeMessage;
