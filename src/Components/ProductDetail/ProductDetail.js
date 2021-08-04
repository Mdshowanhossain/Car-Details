import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../fakeData.json'
import ProductBrand from '../ProductBrand/ProductBrand';
import ProductColor from '../ProductColor/ProductColor';
import ProductModel from '../ProductModel/ProductModel';



const ProductDetail = () => {

    const { id } = useParams();

    const [details, setDetails] = useState(fakeData);

    const detail = details.filter((product, index) => {
        return product._id === id
    })
    return (
        <>
            {
                detail.map(product => (
                    <div className="details" key={product._id}>
                        <div style={{ backgroundImage: `url(${product.images[0]})` }} className="image_container" />

                        <div className="box-details">
                            <h2 title={product.title}>{product.title}</h2>
                            <h3>{product.price}</h3>

                            <ProductColor colors={product.colors} />

                            <ProductBrand sizes={product.size} />

                            <p>{product.description}</p>
                            <p>{product.content}</p>
                            <ProductModel images={product.images} />
                            <button className="cart">Add to Cart</button>

                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default ProductDetail;