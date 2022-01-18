import React from 'react'
import SingleUser from "../users/singleUser";
import '../../styling/listingStyle.css';
import {S3_URL} from "../../utils/config";
import SingleLocation from "../geo/singleLocation";
import SingleProduct from "./singleProduct";
import ListingView from "./listingView";

const DetailedListing = ({listing, onCancel, onRecommended, onUser, onLocation}) => {
    if (!listing) {
        return null
    }

    return (
        <div>
            <div className="detailed-listing">
                <div>
                    <button className="btn btn-danger" onClick={onCancel}>
                        Cancel
                    </button>
                </div>
                <div id="detail-top-padding">
                    <div>
                        <h3>{listing.title}</h3>
                    </div>
                    <div className="detailed-top">
                        <div className="detailed-top-left">
                            General information:
                            <div className="detailed-listing-info">
                                <div>
                                 <b>Price: {listing.price} SEK </b>
                                </div>
                                <br/>
                                <b>Description:</b>
                                <p>{listing.desc}</p>
                            </div>
                            Seller:
                            <SingleUser user={listing.user} onClick={onUser}/>
                        </div>
                        <div className="detailed-top-right-wrapper">
                        <div className="detailed-top-middle">
                            <img className="detailed-listing-image" alt="No img" src={S3_URL +  listing.imageUrl} height={400} width={400}/>
                        </div>
                        <div className="detailed-top-right">
                            Location:
                            <SingleLocation listing={listing} onClick={onLocation}/>
                            Similar product:
                            <SingleProduct listing={listing} onClick={onLocation}/>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="recommendations">
                    <div>
                        <h3>Recommended listings</h3>
                    </div>
                    <div id="rec-listing">
                        <ListingView listings={listing.recs} onClick={onRecommended}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailedListing