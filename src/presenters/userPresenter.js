import React, {useEffect, useState} from "react"
import LoadingWrapper from "../components/util/loadingWrapper";
import {useNavigate, useParams} from "react-router-dom";
import userService from '../services/users'
import listingService from '../services/listings'
import UserProfile from "../components/users/userProfile";
import {useDispatch, useSelector} from "react-redux";
import {error, info} from "../reducers/notification";

function UserPresenter() {
    const session = useSelector(state => state.session)
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({})
    const nav = useNavigate();
    const {id} = useParams()
    const dispatch = useDispatch()

    const onDeleteListing = async (e, listing) => {
        e.stopPropagation()

        if (!loading) {
            if (window.confirm('Are you sure you wish to delete this item?')) {
                try {
                    setLoading(true)

                    await listingService.remove(listing.id, session.token)

                    const res = await userService.getById(id)

                    setUser(res)
                    setLoading(false)
                    dispatch(info("Successfully deleted listing", 5))
                } catch (err) {
                    setLoading(false)
                    dispatch(error("Error deleting listing", 5))
                }
            }
        }
    }

    const onCancel = () => {
        nav('/');
    }

    const onListingClick = (listing) => {
        nav('/listing/' + listing.id);
    }

    useEffect(() => {
        const getUser = async (id) => {
            if (!loading) {
                setLoading(true)
                try {
                    const res = await userService.getById(id)

                    setUser(res)

                    setLoading(false)
                } catch (err) {
                    nav('/404')
                    setLoading(false)
                }
            }
        }

        getUser(id)
    }, [id])

    return (
        <div className={"debug"}>
            <LoadingWrapper loading={loading} data={user}>
                <UserProfile user={user} onCancel={onCancel} onListingClick={onListingClick} onDeleteListing={(session) ? (session.user.id === id) ? onDeleteListing : null : null}/>
            </LoadingWrapper>
        </div>
    )
}

export default UserPresenter