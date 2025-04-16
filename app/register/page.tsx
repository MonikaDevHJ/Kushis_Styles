"use client";
import React, { useState } from "react";
import Link from "next/link";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError("Please fill out all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password should be at least 6 characters.");
      return;
    }

    setError(""); // Clear error
    setSuccess(""); // Clear previous success

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Registration failed.");
      } else {
        setSuccess("Account created successfully!");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      }
    } catch (error) {
      console.error("Registration error:", error);

      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-fuchsia-700">Register</h1>

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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
          Create Account
        </button>
      </form>

      <p className="mt-4 text-sm text-gray-600">
        Already have an account?{" "}
        <Link
          href="/signin"
          className="text-fuchsia-700 hover:underline font-semibold"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
