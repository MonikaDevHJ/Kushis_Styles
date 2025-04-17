"use client";

import { title } from "process";
import React from "react";
import { useState } from "react";

const WomenPAge = () => {
  const [selectedCatogory, setSelectedCatogory] = useState("all");

  const product = [
    { id: 1, image: "/assets/Kurta1.png" },
    { id: 2, image: "/assets/kurta2.jpg" },
    { id: 3, image: "/assets/kurta3.png" },
    { id: 4, image: "/assets/kurta4.png" },
    { id: 5, image: "/assets/kurta5.png" },
    { id: 6, image: "/assets/kurta6.png" },
    { id: 7, image: "/assets/kurta7.png" },
    { id: 8, image: "/assets/kurta8.png" },
    { id: 9, image: "/assets/kurta9.png" },
    { id: 10, image: "/assets/kurta10.png" },
    { id: 11, image: "/assets/kurta11.png" },
    { id: 12, image: "/assets/kurta12.png" },




  ]

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {/* Fliter section  */}
        <div className="bg-white p-5 rounded-md w-52 shadow">
          <label className="block text-xl font-bold mb-2">Category</label>

          <select
            className="w-full border rounded-md p-2"
            // value={selectedCatogory}
            onChange={(e) => setSelectedCatogory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="kurtis">Kurtis</option>
            <option value="jeans">Jeans</option>
            <option value="dresses">Dresses</option>
          </select>
        </div>

        {/* image section cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {product.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md p-3 flex flex-col items-center hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={`Product ${product.id}`}
                className="w-80 h-32 object-cover rounded-md"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default WomenPAge;
