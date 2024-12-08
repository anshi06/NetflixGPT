import React, { useState, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { checkValidateData, checkValidateName } from "../utils/validate";

const Login = () => {
  const[isSignInForm, setIsSignInForm] = useState(true);
  const[errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleFormSubmit = () => {
    const message = checkValidateData(email.current.value, password.current.value);
    setErrorMessage(message);
    if(!isSignInForm){
      const message = checkValidateName(name.current.value);
      errorMessage ? setErrorMessage(errorMessage) :setErrorMessage(message);
     if(message) return;
    }

    if(message){
      return;
    }

    //SignIn / Sign Up
  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div className="">
      <Header />
      <img
        className="w-full absolute"
        alt="background-img"
        src="https://cdn-images-1.medium.com/v2/resize:fit:1024/1*5lyavS59mazOFnb55Z6znQ.png"
      />
      <form className="p-12 bg-slate-800 w-3/12 absolute mx-auto top-28 right-0 left-0 flex flex-col text-white rounded bg-opacity-90" onSubmit={(e) => e.preventDefault()}>
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type="text" placeholder="Full Name" className="my-2 p-4 bg-gray-700" ref={name}/>}
        <input type="text" placeholder="Email Address" className="my-2 p-4 bg-gray-700" ref={email}/>
        <input type="password" placeholder="Password" className="my-2 p-4 bg-gray-700" ref={password}/>
        {errorMessage && <p className="text-red-500 font-bold text-lg">{errorMessage}</p>}
        <button className="p-4 my-6 bg-red-800 rounded-lg" onClick={handleFormSubmit}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
