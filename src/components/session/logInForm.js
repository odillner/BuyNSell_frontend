import React from "react"
import ErrorMessage from "../util/errorMessage";
import '../../styling/style_login.css';

function LogInForm({onLogin, onSignUp, error}) {
    const logIn = (e) => {
        e.preventDefault()
        onLogin(e)
    }

    return (
        <div className="container" id="login">
            <div className="row">
                <div className="col-md-4">
                <h3>User credentials</h3>
                    <div className="logInForm">
                        <form className="lform" id="logInForm">
                            <div className="form-group">
                                <input
                                    id="username-input"
                                    className="form-control"
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    id="password-input"
                                    className="form-control"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                            <div>
                                <button className="btn btn-primary form-control"  id="login-button" type="submit" onClick={(e) => {logIn(e);}}>
                                    Log In
                                </button>
                                <button className="btn btn-primary form-control" id="signup-button" type="submit" onClick={onSignUp}>
                                    Sign up
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="error-messages">
                        <ErrorMessage message={error}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default LogInForm