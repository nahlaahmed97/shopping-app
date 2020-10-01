import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen(props) {


    const productList = useSelector(state => state.productList)
    const { products, loading, error } = productList;
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listProducts());


        return () => {
            //
        }

    }, [])

    return loading ? <div>loading..</div> :
        error ? <div>{error}</div> :
            <ul className="products">

                {
                    products.map(product => <li key={product._id}>
                        <div className="product">
                            <Link to={'/products/' + product._id}>

                                <img className="product-image" src={product.image} alt="product" /></Link>
                            <div className="product-name">
                                <Link to={'/products/' + product._id}>{product.name}</Link></div>
                            <div className="product-brand">{product.brand}</div>
                            <div className="product-price">{product.price}</div>
                            <div className="product-rate">{product.rating} Stars {product.numReviews}</div>

                        </div>
                    </li>
                    )
                }



            </ul>
}

export default HomeScreen;