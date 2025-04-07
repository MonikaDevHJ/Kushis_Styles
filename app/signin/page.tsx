"use client";
import React from "react";

const SignInPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-fuchsia-700">Sign In</h1>
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border rounded focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 border rounded focus:outline-none"
        />
        <button
          type="submit"
          className="w-full bg-fuchsia-700 text-white py-2 rounded hover:bg-fuchsia-500"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SignInPage;
