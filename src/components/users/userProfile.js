import React from 'react'
import ListingView from "../listing/listingView";
import SingleUser from "./singleUser";

const UserProfile = ({user, onCancel, onListingClick, onDeleteListing}) => {
    if (!user) {
        return null;
    }

    return (
        <div className="user-profile">
            <button className="btn btn-danger" id="user-cancel-button" onClick={onCancel}>
                Cancel
            </button>
            <div className="user-profile-inner">
                <div className="user-listing-wrapper">
                    <h3>{user.username + '\'s items for sale'}</h3>
                    <ListingView listings={user.listings} onClick={onListingClick} onDeleteListing={onDeleteListing}/>
                </div>
                <div className="user-info-wrapper">
                    <SingleUser user={user}/>
                </div>
            </div>
        </div>
    )
}

export default UserProfile