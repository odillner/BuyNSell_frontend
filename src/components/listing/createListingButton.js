import React from "react"

function CreateListingButton({onCreateListing}) {
    return (
        <button className="btn btn-primary" id="create-listing-button" onClick={() => onCreateListing()}>
            Create Listing
        </button>
    )
}

export default CreateListingButton