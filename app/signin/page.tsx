"use client";
import React, { useState } from "react";
import Link from "next/link";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      const res = await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed.");
      } else {
        setSuccess("Login successful!");
        setError("");
        setEmail("");
        setPassword("");
        // Optional: Redirect to dashboard or homepage
        // router.push("/dashboard");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-fuchsia-700">Sign In</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded focus:outline-none"
        />

        {error && (
          <p className="text-red-500 text-sm mb-4 font-medium">{error}</p>
        )}
        {success && (
          <p className="text-green-600 text-sm mb-4 font-medium">{success}</p>
        )}

        <button
          type="submit"
          className="w-full bg-fuchsia-700 text-white py-2 rounded hover:bg-fuchsia-500"
        >
          Sign In
        </button>
        <p className="text-sm text-right text-fuchsia-700 hover:underline cursor-pointer mt-2">
          <Link href="/forgot-password">Forgot Password?</Link>
        </p>

      </form>

      <p className="mt-4 text-sm text-gray-600">
        Don’t have an account?{" "}
        <Link
          href="/register"
          className="text-fuchsia-700 hover:underline font-semibold"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default SignInPage;
