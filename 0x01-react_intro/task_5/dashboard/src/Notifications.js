import React from 'react'
import './Notification.css'
import { getLatestNotification } from './utils'
import closeIcon from './close-icon.png'

export default function Notifications() {
    const handleButtonClick = () => {
        console.log('Close button has been clicked')
    }
    return(
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <button aria-label='Close'
            onClick={handleButtonClick}
            style={{
                position: 'absolute',
                top: '10px',
                right: '10px'
            }}>
                <img style={{width:'10px', height:'10px'}} src={closeIcon} alt='icon' />
            </button>
            <ul>
                <li data-priority='default'>New course available</li>
                <li data-priority='urgent'>New resume available</li>
                <li data-priority='urgent' dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
            </ul>
        </div>
    )
}