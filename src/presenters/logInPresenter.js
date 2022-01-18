import React, {useState} from "react"
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import LogInForm from "../components/session/logInForm";
import loginValidation from "../utils/validation/login";
import {logInUser} from "../reducers/session";

function LogInPresenter() {
    const [errorMessage, setErrorMessage] = useState("")

    const nav = useNavigate();
    const dispatch = useDispatch()

    const logIn = async (e) => {
        const username = e.target.form[0].value
        const password = e.target.form[1].value

        let [validationError, msg] = loginValidation({username, password});

        if(validationError){
            setErrorMessage(msg);
            return;
        } else {
            setErrorMessage('');
        }

        try {
            await dispatch(logInUser(username, password))
            nav('/');
        } catch (err) {
            setErrorMessage('Username or password incorrect');
        }
    }

    const onSignUp = () => {
        nav('/signup')
    }

    return (
        <div>
            <LogInForm onLogin={logIn} onSignUp={onSignUp} error={errorMessage}/>
        </div>
    )
}

export default LogInPresenter