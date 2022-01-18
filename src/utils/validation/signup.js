import {
    isNumber,
    isLetters
} from './validation';


function signUpValidation({
                    username,
                    password,
                    email,
                    phone,
                    name,
                    address
                }){

    let errorMessage = null;

    /*
    const formDOM = document.forms.signUpForm
    const errorDOM = document.getElementById("signup-error-message");
    let username = formDOM.username
    let password = formDOM.password
    let email = formDOM.email
    let phone = formDOM.phone
    let name = formDOM.name
    let address = formDOM.address
    */

    if(!username){
        errorMessage = "Username must be specified"
        return [true, errorMessage];
    } else if (!isUsernameValid(username)){
        errorMessage = "Username must be altest 4 characters";
        return [true, errorMessage];
    }

    if (!password){
        errorMessage = "Password must be specified";
        return [true, errorMessage];
    } else if (!isPasswordValid(password)){
        errorMessage = "Password must be altest 8 characters";
        return [true, errorMessage];
    }

    if(!email){
        errorMessage = "Email must be specified";
        return [true, errorMessage];
    } else if(!isEmailValid(email)){
        errorMessage = "Incorrect email format";
        return [true, errorMessage];
    }

    if(!phone){
        errorMessage = "Phone number must be specified";
        return [true, errorMessage];
    } else if(!isNumber(phone)){
        errorMessage = "Phone number must be specified only in numbers";
        return [true, errorMessage];
    }

    if(!name){
        errorMessage = "Name must be specified";
        return [true, errorMessage];
    } else if(!isLetters(name)){
        errorMessage = "Name can only contain letters";
        return [true, errorMessage];
    }

    if(!address){
        errorMessage = "Address must be specified";
        return [true, errorMessage];
    }

    return [false, errorMessage];
}

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordValid = (password) => {
    const re = /^.{8,}$/;
    return re.test(password);
}

const isUsernameValid = (username) => {
    const re = /^.{4,}$/;
    return re.test(username);
}

export default signUpValidation