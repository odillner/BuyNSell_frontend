import React  from "react";
import ErrorMessage from "../util/errorMessage";
import '../../styling/style_create_listing.css';

function ListingCreationForm({createListing, error, uploadMessage, setUploadMessage}) {
    const onSubmit = (e) => {
        e.preventDefault()
        createListing(e)
    }

    return (
        <div className="container" id="create-listing">
            <div className="row">
                <div className="col-md-4">
                <h3>Listing details</h3>
                    <div>
                        <form id="createListingForm" className="create-listing-form" method="post" encType="multipart/form-data">
                            <div className="form-group">
                                <input
                                    id="listing-title"
                                    name="title"
                                    placeholder="Title"
                                    className="form-control"
                                    required
                                    />
                            </div>
                            <div className="form-group">
                                <input
                                    id="listing-price"
                                    name="price"
                                    placeholder="Price"
                                    className="form-control"
                                    required
                                    />
                            </div>
                            <div className="form-group">
                                <input
                                    id="listing-location"
                                    name="location"
                                    placeholder="Location"
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    id="image"
                                    name="image"
                                    type="file"
                                    className="form-control"
                                    onChange={e => {setUploadMessage(e.target.files[0].name)}}
                                    required
                                    hidden
                                />
                                <label className="btn btn-primary form-control" htmlFor="image">Upload image</label>
                                <span id="file-chosen">{uploadMessage}</span>
                            </div>
                            <div className="form-group">
                                <textarea className="text_area" rows="6" cols="33"
                                    id="listing-description"
                                    name="description"
                                    placeholder="Description"
                                    />
                            </div>
                            <div>
                                <button className="btn btn-primary form-control" id="create-lising-button" onClick={(e) => onSubmit(e)}>
                                    Create listing!
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="error-messages">
                        <ErrorMessage message={error}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListingCreationForm
