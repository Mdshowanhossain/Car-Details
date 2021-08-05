import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../fakeData.json'
import ProductBrand from '../ProductBrand/ProductBrand';
import ProductColor from '../ProductColor/ProductColor';
import ProductModel from '../ProductModel/ProductModel';



const ProductDetail = () => {
    const { id } = useParams();
    const [details, setDetails] = useState(fakeData);
    const [index, setIndex] = useState(0)
    const imgDiv = useRef();

    const detail = details.filter((product, index) => {
        return product._id === id
    })

    const handleMouseHover = (e) => {

        const { left, top, width, height } = e.target.getBoundingClientRect();

        const X = (e.pageX - left) / width * 100;
        const Y = (e.pageY - top) / height * 100;
        // console.log(imgDiv.current);
        imgDiv.current.style.backgroundPosition = `${X}% ${Y}%`
    }


    return (
        <>
            {
                detail.map(product => (
                    <div className="details" key={product._id}>
                        <div style={{ backgroundImage: `url(${product.images[index]})` }} onMouseMove={handleMouseHover} className="image_container" ref={imgDiv} onMouseLeave={() => imgDiv.current.style.backgroundPosition = `center`} />
                        <div className="box-details">
                            <h2 title={product.title}>{product.title}</h2>
                            <h3>{product.price}</h3>
                            <ProductColor colors={product.colors} />
                            <ProductBrand sizes={product.sizes} />
                            <p>{product.description}</p>
                            <p>{product.content}</p>
                            <ProductModel images={product.images} setIndex={setIndex} />
                            <button className="cart">Add to Cart</button>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default ProductDetail;