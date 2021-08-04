import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../DataProvider/DataProvider'

const Products = () => {

    // const [products, setProducts] = useContext(DataContext)
    // console.log(products)
    return (
        <div>

            <div className="products">
                <div className="card">
                    <Link href="">
                        <img src="https://i.postimg.cc/xCdw6hCw/car-img5.png" alt="" />
                    </Link>
                    <div className="box">
                        <h3>
                            <a href="">Car Products 01</a>
                        </h3>
                        <p>DESCRIPTION</p>
                        <h4>$400</h4>
                        <button>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
