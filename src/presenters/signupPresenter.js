import React, {useState} from "react"
import SignUpForm from "../components/session/signUpForm";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import signUpValidation from "../utils/validation/signup";
import signUpService from "../services/signup";
import {logInUser} from "../reducers/session";
import {error, info} from "../reducers/notification";
import LoadingWrapper from "../components/util/loadingWrapper";

function SignUpPresenter() {
    const [errorMessage, setErrorMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const nav = useNavigate();

    const signUp = async (e) => {
        const new_user = {
            username: e.target.form[0].value,
            password: e.target.form[1].value,
            email: e.target.form[2].value,
            phone: e.target.form[3].value,
            name: e.target.form[4].value,
            address: e.target.form[5].value
        }

        let [validationError, msg] = signUpValidation(new_user);

        if(validationError){
            setErrorMessage(msg);
            return false;
        } else {
            setErrorMessage('');
        }

        if (!loading) {
            try {
                setLoading(true)

                await signUpService.signup(new_user)
                await dispatch(logInUser(new_user.username, new_user.password))

                dispatch(info("Successfully signed up!", 5))

                nav('/')

                setLoading(false)
            } catch (err) {
                dispatch(error("Error signing up!", 5))

                setLoading(false)
                setErrorMessage(err.response.data.error);
            }
        }
    }

    return (
        <LoadingWrapper loading={loading} data={true}>
            <SignUpForm errorMessage={errorMessage} onSignUp={signUp}/>
        </LoadingWrapper>
    )
}

export default SignUpPresenter