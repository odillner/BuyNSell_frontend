import React, {useState} from "react"
import {useNavigate} from "react-router-dom";
import listingService from '../services/listings'
import {useDispatch, useSelector} from "react-redux";

import ListingCreationForm from "../components/listing/createListing";
import {error, info} from "../reducers/notification";
import createListingValidation from "../utils/validation/createlisting";
import LoadingWrapper from "../components/util/loadingWrapper";

function CreateListingPresenter() {
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [uploadMessage, setUploadMessage] = useState('No image uploaded')
    const session = useSelector(state => state.session)
    const dispatch = useDispatch()
    const nav = useNavigate();

    const createListing = async (e) => {
        const listing = {
            title: e.target.form[0].value,
            price: e.target.form[1].value,
            location: e.target.form[2].value,
            image: e.target.form[3].files[0],
            desc: e.target.form[4].value
        }

        let [validationError, msg] = createListingValidation(listing)

        if (validationError) {
            setErrorMessage(msg)
            return;
        } else {
            setErrorMessage('')
        }

        let formdata = new FormData();
        formdata.append('title', listing.title);
        formdata.append('desc', listing.desc);
        formdata.append('price', listing.price);
        formdata.append('image', listing.image);
        formdata.append('imageUrl', listing.image.name);
        formdata.append('location', listing.location);


        if (!loading) {
            try {
                setLoading(true)

                const res = await listingService.create(formdata, session.token)

                setLoading(false)
                dispatch(info("Listing successfully posted!", 5))
                nav('/listing/' + res.id);
            } catch (err) {
                dispatch(error("Error creating listing", 5))
                setLoading(false)
            }
        }
    }

    return (
        <LoadingWrapper loading={loading} data={true}>
            <div>
                {(session ? <ListingCreationForm createListing={createListing} error={errorMessage} uploadMessage={uploadMessage} setUploadMessage={setUploadMessage} /> : <p>Log in to create listing</p>)}
            </div>
        </LoadingWrapper>
    )
}

export default CreateListingPresenter