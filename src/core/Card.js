import React from 'react';
import ImageHelper from './helper/imageHelper';

const Card = ({
    product,
    addToCart = true,
    removeFromCart = false,
}) => {
    return (
        <div className='card text-white bg-dark border border-ingo'>
            <div className='card-header lead'>A photo from pexels</div>
            <div className='card-body'>
                <ImageHelper product={product} />
                <p className='lead bg-success font-weight-normal text-warp'>A nice photo</p>
                <p className='btn btn-success rounded btn-sm px-4'>$5</p>
                <div className='row'>
                    <div className='col-12'>
                        <button
                            onClick={() => { }}
                            className="btn btn-block btn-outline-success mt-2 mb-2">
                            Add to cart
                        </button>
                    </div>
                    <div className='col-12'>
                        <button
                            onClick={() => { }}
                            className="btn btn-block btn-outline-danger mt-2 mb-2">
                            Remove from cart
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card;