import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Routes, Route, Navigate, useNavigate} from 'react-router-dom'

import {initSession} from "./reducers/session"
import {performSearch} from "./reducers/search";

import SearchResultPresenter from "./presenters/searchResultPresenter";
import ListingPresenter from "./presenters/listingPresenter";
import SignUpPresenter from "./presenters/signupPresenter";
import CreateListingPresenter from "./presenters/createListingPresenter";
import UserPresenter from "./presenters/userPresenter";
import TopBarPresenter from "./presenters/topBarPresenter";
import ErrorPage from "./components/util/errorPage"
import NotificationPresenter from "./presenters/notificationPresenter";
import LogInPresenter from "./presenters/logInPresenter";

function App() {
    const dispatch = useDispatch()
    const session = useSelector(state => state.session)
    const nav = useNavigate()

    useEffect(() => {
        // Continues previous session if it exists
        dispatch(initSession())
        // Starts of searching for all listings
        dispatch(performSearch(0))
    }, [dispatch])

    return (
        <>
            <NotificationPresenter/>
            <div className="app">
                <TopBarPresenter session={session}/>
                <div className="main">
                    <Routes>
                        <Route exact path="/"
                            element={
                                <SearchResultPresenter/>
                            }
                        />
                        <Route exact path="/login"
                            element={
                                (session) ? <Navigate to="/"/> : <LogInPresenter/>
                            }

                        />
                        <Route exact path="/search"
                               element={
                                   <SearchResultPresenter/>
                               }
                        />
                        <Route exact path="/create-listing"
                               element={
                                   (session) ? <CreateListingPresenter/> : <Navigate to="/"/>
                               }
                        />
                        <Route exact path="/listing/:id"
                               element={
                                   <ListingPresenter/>
                               }
                        />
                        <Route exact path="/signup"
                               element={
                                   (session) ? <Navigate to="/"/> : <SignUpPresenter/>
                               }
                        />
                        <Route exact path="/user/:id"
                               element={
                                   <UserPresenter/>
                               }
                        />
                        <Route path='*'
                               element={
                                   <ErrorPage cancel={() => nav('/')}/>
                               }
                        />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default App
