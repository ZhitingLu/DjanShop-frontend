import React, { useState, useEffect } from 'react';
import { getProducts } from "./helper/coreapicalls";
import Base from './Base';
import "../styles.css";
import Card from './Card';


const Home = () => {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    const loadAllProducts = () => {
        getProducts()
            .then(data => {
                if (data.error) {
                    setError(data.error);
                    console.log(data.error);
                }
                else {
                    setProducts(data);
                }
            })
            .catch(err => console.log(err));
    }


    useEffect(() => {
        loadAllProducts();
    }, []);

    return (
        <Base title="Cat T-shirts" description="Welcome to my store" >
            <h1>Home component</h1>
            <div className='row'>
                {products.map((product, index) => {
                    return (
                        <div key={index} className='col-4 mb-4'>
                           <Card product={product} />
                        </div>
                    )
                })}
            </div>
        </Base>
    )
}

export default Home;