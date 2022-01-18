
function loginValidation({username, password}){
    let errorMessage = null;

    if(!username){
        errorMessage = "Username must be specified";
        return [true, errorMessage];  
    } 
    if (!password){
        errorMessage = "Password must be specified";
        return [true, errorMessage];  
    }

    return [false, errorMessage];
}

export default loginValidation