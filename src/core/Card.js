import React from 'react';
import ImageHelper from './helper/imageHelper';
import { Navigate } from 'react-router-dom';

let isAuthenticated = true;

const Card = ({
    product,
    // addToCart = true,
    removeFromCart = false,
}) => {
    const cartTitle = product ? product.name : "A photo";
    const cartDescription = product ? product.description : "A photo of the product";
    const cartPrice = product ? product.price : "Default";

    const addToCart = () => {
        if (isAuthenticated) {
            console.log('Added to cart');
        } else {
            console.log('Please login');
        }
    }

    const getARedirect = (redirect) => {
        if (redirect) {
            return <Navigate to="/cart" />;
        }
    }

    const showAddToCart = (addToCart) => {
        return (
            addToCart && (
                <button
                    onClick={addToCart}
                    className="btn btn-block btn-outline-success mt-2 mb-2">
                    Add to cart
                </button>
            )
        )
    }

    const showRemoveFromCart = (removeFromCart) => {
        return (
            removeFromCart && (
                <button
                    onClick={() => {
                        //TODO: handle this too
                        console.log('Product removed from cart');
                    }}
                    className="btn btn-block btn-outline-danger mt-2 mb-2">
                    Remove from cart
                </button>
            )
        )
    }

    return (
        <div className='card text-white bg-dark border border-ingo'>
            <div className='card-header lead'>{cartTitle}</div>
            <div className='card-body'>
                <ImageHelper product={product} />
                <p className='lead bg-success font-weight-normal text-warp px-2'>{cartDescription}</p>
                <p className='btn btn-success rounded btn-sm px-4'>${cartPrice}</p>
                <div className='row'>
                    <div className='col-12'>
                        {showAddToCart(addToCart)}
                    </div>
                    <div className='col-12'>
                        {showRemoveFromCart(removeFromCart)}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card;