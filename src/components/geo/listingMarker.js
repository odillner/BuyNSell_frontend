import React from 'react'
import {Marker, Tooltip} from 'react-leaflet'
import { S3_URL } from "../../utils/config";

function ListingMarker({ listing, onClick }) {
    if (!listing) {
        return null
    }

    if (!listing.coords) {
        return null
    }

    return (
        <div className={"marker-wrapper" + listing.id}>
            <Marker position={[listing.coords.latitude, listing.coords.longitude]}
                eventHandlers={{ click: () => { if (onClick) onClick(listing) } }}
            >
                <Tooltip
                    className="map-marker"
                    eventHandlers={{ click: () => { if (onClick) onClick(listing) } }}
                    interactive={true}
                    opacity={100}
                >
                    <img id="img-set" alt="No img" src={S3_URL + listing.imageUrl} height={50} width={50} />
                    <div>
                        <b>
                            {listing.title}
                        </b>
                        <br />
                        {listing.location}
                        <br />
                        {listing.price} SEK
                    </div>
                </Tooltip>
            </Marker>
        </div>
    )
}

export default ListingMarker