import React from 'react';

const ProductModel = ({ images }) => {
    return (
        <div className="thumb">
            {
                images.map((img, index) => (
                    <img src={img} alt="" key={index} />
                ))
            }
        </div>
    );
};

export default ProductModel;