import React from "react";
import SingleListing from "./singleListing";

/* Component that displays a view of the given listings */
function ListingView({listings, onClick, onHover, onDeleteListing}) {
    if (!listings || listings.length === 0) {
        return (
            <div className="no-result-wrapper">
                No results!
            </div>
        );
    }

    return (
        <table className="table table-striped">
            <tbody>
            <tr>
                <td/>
                <td><b>Title</b></td>
                <td><b>Price</b></td>
                <td className="listing-desc"><b>Description</b></td>
                <td className="listing-desc"><b>Location</b></td>
                <td/>
            </tr>
            {listings.map(listing =>
                    <SingleListing
                        key={listing.id}
                        listing={listing}
                        onClick={onClick}
                        onHover={onHover}
                        onDeleteListing={onDeleteListing}
                    />
            )}
            </tbody>
        </table>
    );
}

export default ListingView