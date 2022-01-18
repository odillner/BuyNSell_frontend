import React from 'react'
import ProfileButton from "../session/profileButton";
import CreateListingButton from "../listing/createListingButton";
import LogOutButton from "../session/logOutButton";
import LogInButton from "../session/logInButton";

const TopBar = ({children, session, onProfile, onCreateListing, onLogout, onLogin, onLogo}) => {
    return (
        <div className="header">
                <div className="header-item header-logo-item">
                    <div className="header-logo" onClick={onLogo}>
                        <p>BuyNSell</p>
                    </div>
                </div>
                <div className="header-item header-form">
                    {children}
                </div>
                <div className="header-item">
                    {(session) ?
                        <div className="header-buttons">
                            <ProfileButton onProfile={onProfile}/>
                            <CreateListingButton onCreateListing={onCreateListing}/>
                            <LogOutButton onLogout={onLogout}/>
                        </div>
                        :  <div className="header-buttons"> 
                                <LogInButton onLogin={onLogin}/>
                            </div>
                    }
                </div>
        </div>
    )
}

export default TopBar