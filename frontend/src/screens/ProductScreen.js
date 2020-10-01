import React, { useEffect,useState } from "react";

import { Link } from "react-router-dom";
import { detailsProduct } from "../actions/productActions";
import { useSelector, useDispatch } from "react-redux";

function ProductScreen(props) {
    const [qty , setQuantity] = useState (1);
    const productDetails = useSelector((state) => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {
            //
        };
    }, []);
 const handleAddToCart = () =>{
     props.history.push("/cart/"+props.match.params.id+"?qty="+qty)
 }
    return (
        <div>
            <div className="back-to-homescreen">
                <Link to="/">Back to homescreen</Link>
            </div>
            {loading ? (
                <div>loading..</div>
            ) : error ? (
                <div>{error}</div>
            ) : (
                        <div className="details">
                            <div className="details-image">
                                <img src={product.image} alt="product"></img>
                            </div>
                            <div className="details-info">
                                <ul>
                                    <li>
                                        <h4>{product.name}</h4>
                                    </li>
                                    <li>
                                        {product.rating} Stars ({product.numReviews} Reviews)
              </li>
                                    <li>
                                        Price: <b>${product.price}</b>
                                    </li>
                                    <li>
                                        description:<div>{product.description}</div>
                                    </li>
                                </ul>
                            </div>
                            <div className="details-action">
                                <ul>
                                    <li>Price: {product.price}</li>
                                    <li>Status: {product.countInStock> 0? "in Stock":"out of stock"}</li>
                                    <li>
                                        Quantity:{" "}
                                        <select value={qty} onChange={(e)=>{setQuantity(e.target.value)}}>
                                            {[...Array(product.countInStock).keys()].map(item=>
                                            <option key={item+1} value={item+1}>{item+1}</option>
                                            )}
                                        </select>
                                    </li>
                                    <li>
                                    {product.countInStock >0 &&
                                        <button className="button" onClick={handleAddToCart}>Add To Cart</button>
                                         }
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
        </div>
    );
}

export default ProductScreen;
