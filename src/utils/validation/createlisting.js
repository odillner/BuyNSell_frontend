import {
    isNumber,
    isLetters
} from './validation';


function createListingValidation({
                            title,
                            price,
                            location,
                            image,
                            desc
                        }){

    let errorMessage = null;

    if(!title){
        errorMessage = "Title must be specified";
        return [true, errorMessage];
    }

    if (!price){
        errorMessage = "Price must be specified";
        return [true, errorMessage];
    } else if (!isNumber(price)){
        errorMessage = "Price can only contain numbers";
        return [true, errorMessage];
    }

    if (!location){
        errorMessage = "Location must be specified";
        return [true, errorMessage];
    } else if (!isLocationValid(location)){
        errorMessage = "Location can only contain letters";
        return [true, errorMessage];
    }

    if(!image){
        errorMessage = "Please upload image";
        return [true, errorMessage];
    } else if (!isImagevalid(image.name)){
        errorMessage = "Image must of file type gif, jpg, jpeg, tiff or png.";
        return [true, errorMessage];
    }

    if(!desc){
        errorMessage = "Description must be specified";
        return [true, errorMessage];
    }

    return [false, errorMessage];
}

const isImagevalid = (imageName) => {
    const re = /[\/.](gif|jpg|jpeg|tiff|png)$/;
    return re.test(imageName);
};

const isLocationValid = (imageName) => {
    const re = /^[a-zA-ZÄäÅåÖö ]+$/;
    return re.test(imageName);
};

export default createListingValidation