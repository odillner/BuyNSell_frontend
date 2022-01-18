/* Form validation helper functions */

function isNumber(input){
    const re = /^\d+$/;
    return re.test(input);
}

const isLetters = (input) => {
    const re = /^[a-zA-Z ]+$/;
    return re.test(input);
}

export {
    isNumber, 
    isLetters
}