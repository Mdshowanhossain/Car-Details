import React from 'react';

const ProductBrand = ({ sizes }) => {
    return (
        <div className="sizes">
            {
                sizes.map((size, index) => (
                    <button key={index}>{size}</button>
                ))
            }

        </div>
    );
};

export default ProductBrand;