import React from "react"

function DeleteListingButton({deleteListing}) {
    return (
        <button className="btn btn-danger" id="delete-listing-button" onClick={deleteListing}>
            Delete
        </button>
    )
}

export default DeleteListingButton