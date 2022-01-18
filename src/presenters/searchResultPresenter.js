import React, {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

import LoadingWrapper from "../components/util/loadingWrapper";
import ListingView from "../components/listing/listingView";
import Map from "../components/geo/map";

function SearchResultPresenter() {
    const {results, loading} = useSelector(state => state.search)
    const [highlighted, setHighlighted] = useState(null)
    const nav = useNavigate();

    const onClick = (listing) => {
        nav('/listing/' + listing.id);
    }

    const onHover = (listing) => {
        setHighlighted(listing)
    }

    useEffect(() => {
        setHighlighted((results[0]) ? results[0] : null)
    }, [results])

    return (
        <div className="search-result-wrapper">
            <div className="search-map-wrapper">
                <Map listings={results}
                     center={(highlighted) ? highlighted.coords: null}
                     highlighted = {highlighted}
                     height={250}
                     onMarkerClick={onClick}
                />
            </div>
            <div className="search-listing-wrapper">
                <LoadingWrapper loading={loading} data={results}>
                    <ListingView listings={results} onClick={onClick} onHover={onHover}/>
                </LoadingWrapper>
            </div>
        </div>

    )
}

export default SearchResultPresenter