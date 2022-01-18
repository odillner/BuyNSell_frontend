import React from "react"
import TopBar from "../components/header/topBar";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {endSession} from "../reducers/session";
import SearchFormPresenter from "./searchFormPresenter";

function TopBarPresenter() {
    const session = useSelector(state => state.session)
    const nav = useNavigate()
    const dispatch = useDispatch()

    const onLogo = async () => {
        nav('/')
    }

    const onLogin = () => {
        nav('/login')
    }

    const onLogout = async () => {
        dispatch(endSession())
        nav('/')
    }

    const onProfile = () => {
        nav('/user/' + session.user.id)
    }

    const onCreateListing = () => {
        nav('/create-listing')
    }

    return (
        <TopBar
            session={session}
            onLogout={onLogout}
            onProfile={onProfile}
            onCreateListing={onCreateListing}
            onLogin={onLogin}
            onLogo={onLogo}
        >
            <SearchFormPresenter/>
        </TopBar>
    )
}

export default TopBarPresenter