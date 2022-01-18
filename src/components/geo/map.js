import React, {useEffect} from "react";
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import ListingMarker from "../geo/listingMarker"

function Map({center, listings, recommended, highlighted, height, onMarkerClick}) {
    const c = (center) ? [center.latitude, center.longitude] : [59.32462279908758, 18.071380368487894]

    useEffect(() => {
        const getIndex = (highlighted) => {
            for (let i = 0; i < listings.length; i++) {
                if (highlighted.id === listings[i].id) {
                    return i;
                }
            }
        }

        if (highlighted) {
            const markers = document.getElementsByClassName('leaflet-marker-icon')

            if (markers) {
                const found = markers[getIndex(highlighted)];

                if (found) {
                    found.dispatchEvent(new MouseEvent('mouseover', {
                        view: window,
                        bubbles: true,
                        cancelable: true
                    }))
                }
            }
        }

        return () => {
            const map = document.getElementById('leaflet-map')

            if (map) {
                map.click();
            }
        }
    }, [highlighted, listings])

    const ChangeCenter = ({coords}) => {
        const map = useMap();
        map.setView(coords, map.getZoom());

        return null;
    }

    const getMarkers = (listings) => {
        if (!listings) {
            return
        }

        if (!listings[0]) {
            return <ListingMarker
                listing={listings}
                onClick={onMarkerClick}
            />
        }

        return listings.map(listing => {
            return <ListingMarker
                key={listing.id}
                listing={listing}
                onClick={onMarkerClick}
            />
        })
    }

    return (
        <MapContainer className="map"
                      id="leaflet-map"
                      style={{ height: height }}
                      center={c}
                      zoom={10}
                      scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ChangeCenter coords={c}/>
            {getMarkers(listings)}
            {getMarkers(recommended)}
        </MapContainer>
    );
}


export default Map