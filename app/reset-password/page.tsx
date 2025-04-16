"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const ResetPassword = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newPassword) {
      setMessage("Please enter a new password");
      return;
    }

    try {
      const res = await fetch("/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, newPassword }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Password has been reset successfully!");
      } else {
        setMessage(data.message || "Failed to reset password");
      }
    } catch (err) {
      console.log("Error:", err);
      setMessage("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-fuchsia-700 mb-4">Reset Password</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded focus:outline-none"
          />
          {message && <p className="text-red-600 mb-2">{message}</p>}
          <button
            type="submit"
            className="w-full bg-fuchsia-700 text-white py-2 rounded hover:bg-fuchsia-600"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
