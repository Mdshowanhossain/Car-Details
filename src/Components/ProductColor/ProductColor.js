import React from 'react';

const ProductColor = ({ colors }) => {
    return (
        <div className="colors">
            {
                colors.map((color, index) => (
                    <button style={{ backgroundColor: color }}></button>
                ))
            }
        </div>
    );
};

export default ProductColor;