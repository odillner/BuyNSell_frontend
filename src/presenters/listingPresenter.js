import React, {useEffect, useState} from "react"
import LoadingWrapper from "../components/util/loadingWrapper";
import DetailedListing from "../components/listing/detailedListing";
import {useNavigate, useParams} from "react-router-dom";
import listingService from '../services/listings'
import {performSearch} from "../reducers/search";
import {useDispatch} from "react-redux";

function ListingPresenter() {
    const [loading, setLoading] = useState(false)
    const [listing, setListing] = useState({})
    const nav = useNavigate()
    const {id} = useParams()
    const dispatch = useDispatch()

    const getListing = async (id) => {
        if (!loading) {
            setLoading(true)

            try{
                const res = await listingService.getById(id)
                setListing(res)
                setLoading(false)
            } catch(err){
                nav('/404')
                setLoading(false)
            }
        }
    }

    const onCancel = () => {
        nav('/');
    }

    const onRecommended = (listing) => {
        nav('/listing/' + listing.id);
    }

    const onUser = (user) => {
        nav('/user/' + user.id);
    }

    const onLocation = (coords) => {
        dispatch(performSearch(2, coords))
        nav('/');
    }

    useEffect(() => {
        getListing(id)
    }, [id])

    return (
        <div className={"debug"}>
            <LoadingWrapper loading={loading} data={listing}>
                <DetailedListing listing={listing} onCancel={onCancel} onRecommended={onRecommended} onUser={onUser} onLocation={onLocation}/>
            </LoadingWrapper>
        </div>
    )
}

export default ListingPresenter