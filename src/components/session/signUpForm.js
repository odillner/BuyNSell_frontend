import React from "react"
import '../../styling/style_signup.css';
import ErrorMessage from "../util/errorMessage";


function SignUpForm({errorMessage, onSignUp}) {
    const signUp = async (e) => {
        e.preventDefault()
        onSignUp(e)
    }

    return (
        <div className="container" id="signup">
            <div className="row">
                <div className="col-md-4">
                <h3>User credentials</h3>
                    <div className="signUpForm">
                        <form id="signUpForm">
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
                                    type="text"
                                    name="password"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    id="email-input"
                                    className="form-control"
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    id="phone number-input"
                                    className="form-control"
                                    type="text"
                                    name="phone"
                                    placeholder="Phone"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    id="name-input"
                                    className="form-control"
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    id="address-input"
                                    className="form-control"
                                    type="text"
                                    name="address"
                                    placeholder="Address"
                                />
                            </div>
                            <button className="btn btn-primary form-control" id="login-button" type="submit" onClick={(e) => {signUp(e);}}>
                                    Submit
                            </button>
                        </form>
                    </div>
                    <div className="error-messages">
                        <ErrorMessage message={errorMessage}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm