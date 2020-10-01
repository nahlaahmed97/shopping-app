import React, { useEffect,useState } from "react";

import { Link } from "react-router-dom";


import { useSelector, useDispatch } from "react-redux";
import { register } from "../actions/userActions";

function RegisterScreen(props) {
    const [name, setName ]=useState('');
    const [email, setEmail ]=useState('');
    const [rePassword , setrePassword] = useState('');

    const [password , setPassword] = useState('');
    const userRegister = useSelector(state => state.userRegister);
    const {loading, userInfo, error} = userRegister;
    
    const dispatch = useDispatch();
    const redirect = props.location.search?props.location.search.split("=")[1]:'/';
    useEffect(() => {
      if(userInfo){
          props.history.push(redirect)
      }
        return () => {
            //
        };
    }, [userInfo]);
   const submitHandler = (e) =>{
       e.preventDefault();
       dispatch(register(name,email,password))
   }
    return (
       <div className="form">
           <form onSubmit={submitHandler}>
               <ul className="form-container">
                   <li>
                       <h2>Create a new account</h2>
                   </li>
    <li>{loading && <div>loading ...</div>}
    {error && <div>{error}</div>}</li>
                   <li>
                       <label htmlFor="name">
                           name
                       </label>
                       <input type="name" name="name" id="name" onChange={(e)=> setName(e.target.value)}>

                       </input>
                   </li>
                   <li>
                       <label htmlFor="email">
                           Email
                       </label>
                       <input type="email" name="email" id="email" onChange={(e)=> setEmail(e.target.value)}>

                       </input>
                   </li>
                   <li>
                   <label htmlFor="password">
                           password
                       </label>
                       <input type="password" name="password" id="password" onChange={(e)=> setPassword(e.target.value)}>

                       </input>
                   </li>
                   <li>
                   <label htmlFor="rePassword">
                          re-password
                       </label>
                       <input type="Password" name="rePassword" id="rePassword" onChange={(e)=> setrePassword(e.target.value)}>

                       </input>
                   </li>
                   <li>
                       <button type="submit" className="button">create account</button>
                   </li>
                     <li>
                         Already have an account?
                   <li><Link to={redirect === "/"?"signin":"signin?redirect="+ redirect}className="button">sign in </Link></li>

                     </li>
               </ul>
           </form>
       </div>
)
}

export default RegisterScreen;
