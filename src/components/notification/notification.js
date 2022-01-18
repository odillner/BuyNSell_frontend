import React from 'react'
import CloseButton from "./closeButton"

const Notification = ({notification, onClose}) => {
    if (!notification) {
        return null
    }

    return (
        <div className="notification-wrapper">
            <div className={notification.type}>
                    <CloseButton onClick={onClose}/>
                    <div className="notification-info">
                        {notification.message}
                    </div>
            </div>
        </div>
    )
}

export default Notification