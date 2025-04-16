"use client";

import React, { useState } from "react";

const ForgotPassword = () => {
  const [email , setEmail] = useState("")
  const [message , setMessage ] = useState("")


  const handleSubmit = async (e:React.FormEvent)=>{
    e.preventDefault();

    if(!email){
      setMessage("please enter Your mail");
      return;
    }
    try {
      const res = await fetch("/api/forgot-password" , {
        method : "POST",
        headers : {
          "content-type" : "application/json",
        },
        body : JSON.stringify({email}),
      });   

      const data = await res.json();

      if(res.ok ){
        setMessage("Reset Link has been   sent to your email");

      }else {
        setMessage (data.message || "something went wrong   ");
      }
    }
    catch (err){
      console.log("error sending reset email :",err); 
      setMessage("failed to send reset link ");
    }

  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-fuchsia-700 mb-4">Forgot Password</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value = {email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded focus:outline-none"
          />

        {
          message && (
            <p className="text-red-600 mb-2">{message}</p>
          )
        }
          <button
            type="submit"
            className="w-full bg-fuchsia-700 text-white py-2 rounded hover:bg-fuchsia-600"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
