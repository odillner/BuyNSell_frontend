import React from "react"

function ProfileButton({onProfile}) {
    return (
        <button className="btn btn-primary" id="profile-button" onClick={onProfile}>
            Profile
        </button>
    )
}

export default ProfileButton