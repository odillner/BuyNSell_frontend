import React from 'react'

const CloseButton = ({onClick}) => {
    return (
        <button className="close-notification-button"
            onClick={() => onClick()}
        >
            X
        </button>
    )
}

export default CloseButton