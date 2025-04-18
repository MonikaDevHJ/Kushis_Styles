"use client";

import { title } from "process";
import React from "react";
import { useState } from "react";

const WomenPAge = () => {
  const [selectedCatogory, setSelectedCatogory] = useState("all");
  const [selectsize, setSelectsize] = useState("all")

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
    <div className="min-h-screen bg-gray-100 py-10 px-2 border">
    <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-10">
      
      {/* Sidebar */}
      <div className="bg-white p-5 rounded-md shadow h-fit lg:ml-[-80px]">
        <label className="block text-xl font-bold mb-4">Category</label>
        <select
          className="w-full border rounded-md p-2"
          value={selectedCatogory}
          onChange={(e) => setSelectedCatogory(e.target.value)}
        >
          <option value="all">Select Collections</option>
          <option value="kurtis">Kurtis</option>
          <option value="jeans">Jeans</option>
          <option value="dresses">Dresses</option>
        </select>

        <select
          className="w-full border rounded-md p-2 mt-4"
          value={selectsize}
          onChange={(e) => setSelectsize(e.target.value)}
        >
          <option value="all">Select Size </option>
          <option value="kurtis">M</option>
          <option value="jeans">L</option>
          <option value="dresses">XL</option>
          <option value="dresses">XXL</option>

        </select>
      </div>
  
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {product.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <img
              src={product.image}
              alt={`Product ${product.id}`}
              className="w-full h-64 object-contain"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">Product {product.id}</h3>
              <p className="text-gray-500">Women's Collection</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
  
};

export default WomenPAge;
