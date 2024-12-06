import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Login = () => {
  return (
    <div className="">
      <Header />
      <img
        className="w-full h-[850px] absolute"
        alt="background-img"
        src="https://cdn-images-1.medium.com/v2/resize:fit:1024/1*5lyavS59mazOFnb55Z6znQ.png"
      />
      <form className="p-12 bg-slate-800 w-4/12 absolute mx-auto top-1/4 right-0 left-0 flex flex-col text-white rounded bg-opacity-90">
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input type="text" placeholder="Email Address" className="my-2 p-4 bg-gray-700" />
        <input type="password" placeholder="Password" className="my-2 p-4 bg-gray-700" />
        <button className="p-4 my-6 bg-red-800 rounded-lg">Sign In</button>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
