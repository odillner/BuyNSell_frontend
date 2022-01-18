import React from "react"

function LogOutButton({onLogout}) {
    return (
        <button className="btn btn-danger" id="log-out-button" onClick={onLogout}>
            Log Out
        </button>
    )
}

export default LogOutButton