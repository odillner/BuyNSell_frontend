import React from "react";

export function SingleLocation({listing, onClick}) {
    if (!listing) {
        return null
    }

    if (!listing.coords) {
        return null
    }

    if (!listing.coords.geoData) {
        return (
            <div className={(onClick) ? "single-location" : "single-location"}>
                <b>{listing.location}</b>
            </div>
        )
    }

    const geoData = listing.coords.geoData

    return (
        <div className={(onClick) ? "single-location location-clickable" : "single-location"} onClick={(onClick) ? () => onClick(geoData) : null}>
            <b>{geoData.name}</b>
            <br/>
            Country: {geoData.country}
            <br/>
            Continent: {geoData.continent}
        </div>
    );
}

export default SingleLocation