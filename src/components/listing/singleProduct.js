import React from "react";
import placeholder from '../../assets/image-placeholder.jpg'

function SingleProduct({listing}) {
    if (!listing) {
        return null
    }

    if (!listing.product || Object.keys(listing.product).length === 0) {
        return (
            <div className="single-product">
                <b>No products found</b>
            </div>
        )
    }

    const product = listing.product

    return (
        <a href={product.sourceURLs[0]} target="_blank" rel="noreferrer">
            <div className="single-product product-clickable">
                    <div className="single-product-top">
                        <img className="single-product-img" alt="No img" src={(product.imageURLs) ? product.imageURLs[0] : placeholder} height={50} width={50}/>
                        <div>
                            <b>{product.name.substring(0, 40).concat((product.name.length > 40) ? "..." : "")}</b>
                        </div>
                    </div>
                    <div className="single-product-info">
                        {(product.prices) ? "Price: " + (product.prices[0].amountMax*7).toString().substring(0, 10) + " SEK": "No price info"}
                    </div>
            </div>
        </a>
    );
}

export default SingleProduct