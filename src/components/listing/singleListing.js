import React from "react";
import {S3_URL} from '../../utils/config'
import DeleteListingButton from "./deleteListingButton";

export function SingleListing({listing, onClick, onHover, onDeleteListing}) {
    if (!listing) {
        return null;
    }

    return (
        <tr onClick={() => onClick(listing)} className="single-listing" onMouseEnter={() => (onHover) ? onHover(listing) : null}>
            <td>
                <img alt="thumbnail" src={S3_URL + listing.imageUrl} height={100} width={100} />
            </td>
            <td><div>{limitLength(listing.title)}</div></td>
            <td><div>{listing.price}</div></td>
            <td className="listing-desc"><div><p>{limitLength(listing.desc)}</p></div></td>
            <td className="listing-desc"><div>{listing.location}</div></td>
            <td>
                {(onDeleteListing) ? <DeleteListingButton deleteListing={(e) => onDeleteListing(e, listing)}/> : null}
            </td>
        </tr>
    );
}

/**
 * Limits the length of a string
 * @param {any} text
 */
function limitLength(text) {
    const maxLimit = 500;
    if (text.length <= maxLimit) {
        return text;
    }
    return text.substring(0, maxLimit - 3).concat("...");
}

export default SingleListing