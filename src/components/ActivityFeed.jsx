import React from 'react'
import '../styles/ActivityFeed.css'
import ProfileIcon from '../components/img/Avatar-1.svg'
import ProfileIcon2 from '../components/img/Avatar-2.svg'

// Dummy data
const activityData = [
    {
        id: 1,
        name: 'Kushantha Charuka',
        action: 'created',
        detail: 'Contract #00124 need John Beige’s signature',
        date: 'Sep 16, 2022 at 11:30 AM',
        image: ProfileIcon
    },
    {
        id: 2,
        name: 'Kushantha Charuka',
        action: 'created',
        detail: 'Contract #00124 need John Beige’s signature',
        date: 'Sep 16, 2022 at 11:30 AM',
        image: ProfileIcon2
    }
]

export default function ActivityFeed() {
    return (
        <div className="activity-container">
            <strong className="activity-title">Activity Feed</strong>

            <div className="mt-4 flex flex-col gap-1">
                {activityData.map((activity) => (
                    <div key={activity.id} className="activity-item flex items-start gap-2">
                        <img src={activity.image} alt="Profile" className="profile-icon" />
                        <div className="activity-content flex flex-col justify-center">
                            <span className="activity-name-action">
                                <strong>{activity.name}</strong> {activity.action}
                                <span className="activity-detail">{' ' + activity.detail}</span>
                            </span>
                            <span className="activity-date">{activity.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
