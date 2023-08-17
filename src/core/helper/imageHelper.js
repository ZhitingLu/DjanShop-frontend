import React from 'react'

const imageHelper = ({ product }) => {
    const imageUrl = product ? product.image : `https://www.pexels.com/photo/camera-on-chair-2062324/`;
    return (
        <div className='rounded border border-success p-2'>
            <img src={imageUrl}
                style={{ maxHeight: '100%', maxWidth: '100%' }}
                className='mb-3 rounded'
                alt="product image" />
        </div>
    )
}

export default imageHelper;