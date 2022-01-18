import React from "react"

function LogInButton({onLogin}) {
    return (
        <button className="btn btn-primary" id="login-nav-button" onClick={onLogin}>Login</button>
    )
}

export default LogInButton