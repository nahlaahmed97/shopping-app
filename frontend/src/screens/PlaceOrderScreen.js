import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import { createOrder } from '../actions/orderActions';
function PlaceOrderScreen(props) {

  
  return <div>
    <CheckoutSteps step1 step2 step3 step4 ></CheckoutSteps>
    <div><h3>your order is shipped</h3></div>
    </div>

}

export default PlaceOrderScreen;