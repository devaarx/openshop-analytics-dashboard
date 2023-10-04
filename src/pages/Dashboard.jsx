// Dashboard.jsx
import React from 'react'
import WelcomeMessage from '../components/WelcomeMessage' // Import the WelcomeMessage component
import Tasks from '../components/Tasks'
import Piechart from '../components/PieChart'
import ActivityFeed from '../components/ActivityFeed'
import '../styles/Dashboard.css'

export default function Dashboard() {
    return (
        <div className="flex flex-col w-full h-full gap-10 p-1">
            <WelcomeMessage /> {/* Display the WelcomeMessage at the top */}
            <div className="flex w-full h-full">
                {/* Left side: Tasks with Pagination */}
                <div className="flex flex-col gap-6 p-2 ">
                    <Tasks />
                    {/* You can add your pagination component here */}
                    {/* <Pagination /> */}
                </div>

                {/* Right side: Piechart and ActivityFeed */}
                <div className="flex flex-col gap-4 p-2">
                    <ActivityFeed />
                    <Piechart />
                </div>
            </div>
        </div>
    )
}
