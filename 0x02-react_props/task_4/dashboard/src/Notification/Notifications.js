import React from 'react'
import './Notification.css'
import { getLatestNotification } from '../asset/utils'
import closeIcon from '../asset/close-icon.png'
import NotificationItem from './NotificationItem'

export default function Notifications() {
    const notifications = [
        {
          type: 'default',
          value: 'New course availabl',
          html: null,
        },
        {
          type: 'default',
          value: 'New resume available',
          html: null,
        },
        {
            type: 'urgent',
            value: '',
            html: getLatestNotification()
        }
      ];
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
                {notifications.map((notification) => (
                    <NotificationItem type={notification.type} value={notification.type} html={notification.html} />
                ))}
            </ul>
        </div>
    )
}