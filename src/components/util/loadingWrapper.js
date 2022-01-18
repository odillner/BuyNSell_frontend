import React from 'react'

import loadingGif from '../../assets/loading2.gif'

const LoadingWrapper = ({children, loading, data}) => {
    return (
        <>
            {
                (loading) ?
                <div className="loading-image-wrapper">
                    <img className="loading-image" alt="" src={loadingGif}/>
                </div> : (data) ? children : null
            }
        </>
    )
}

export default LoadingWrapper