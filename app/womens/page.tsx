"use client";

import { title } from "process";
import React from "react";
import { useState } from "react";

const WomenPAge = () => {
  const [selectedCatogory, setSelectedCatogory] = useState("all");
  const [selectsize, setSelectsize] = useState("all")

  const product = [
    { id: 1, image: "/assets/Kurta1.png", title: "PURPLE DUPPATA SET", price: 299, category: "Kurties" },
    { id: 2, image: "/assets/kurta2.jpg", title: "RED GRAND SET", price: 459, category: "Kurties" },
    { id: 3, image: "/assets/kurta3.png", title: "SIMPLE BLUE SET", price: 899, category: "Kurties" },
    { id: 4, image: "/assets/kurta4.png", title: "ROYAL EXPORT", price: 799, category: "Kurties" },
    { id: 5, image: "/assets/kurta5.png", title: "WOMEN BASKET", price: 198, category: "Kurties" },
    { id: 6, image: "/assets/kurta6.png", title: "GVS SHOPPE", price: 599, category: "Kurties" },
    { id: 7, image: "/assets/kurta7.png", title: "LIBAS", price: 599, category: "Kurties" },
    { id: 8, image: "/assets/kurta8.png", title: "MAS", price: 866, category: "Kurties" },
    { id: 9, image: "/assets/kurta9.png", title: "KLOSIAI", price: 999, category: "Kurties" },
    { id: 10, image: "/assets/kurta10.png", title: "DISHA FASHION", price: 199, category: "Kurties" },
    { id: 11, image: "/assets/kurta11.png", title: "GORISKSI", price: 299, category: "Kurties" },
    { id: 12, image: "/assets/kurta12.png", title: "ZZZ COLECTION", price: 699, category: "Kurties" },
    { id: 13, image: "/assets/J1.png", price: "799", category: "Jeans" },
    { id: 14, image: "/assets/J2.png", price: "599", category: "Jeans" },
    { id: 15, image: "/assets/J3.png", price: "999", category: "Jeans" },
    { id: 16, image: "/assets/J4.png", price: "299", category: "Jeans" },
    { id: 17, image: "/assets/J5.png", price: "599", category: "Jeans" },
    { id: 18, image: "/assets/J6.png", price: "999", category: "Jeans" },
    { id: 19, image: "/assets/J7.png", price: "399", category: "Jeans" },
    { id: 20, image: "/assets/J8.png", price: "599", category: "Jeans" },
    { id: 21, image: "/assets/J9.png", price: "799", category: "Jeans" },
    { id: 22, image: "/assets/J10.png", price: "399", category: "Jeans" },
    { id: 23, image: "/assets/J11.png", price: "499", category: "Jeans" },
    { id: 24, image: "/assets/J12.png", price: "699", category: "Jeans" },






  ]


  const filterProduct = selectedCatogory === "all" ? product : product.filter((item) => item.category === selectedCatogory);

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
            <option value="Kurties">Kurtis</option>
            <option value="Jeans">Jeans</option>
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
          {filterProduct.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={`Product ${product.id}`}
                  className="w-full h-64 object-contain"
                />
                <button className="absolute top-2 right-2 text-red-400 text-2xl z-10">
                  ❤️
                </button>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold mb-1">Product {product.id}</h3>
                <p className="text-gray-500 text-sm">{product.title}</p>
                <p className="text-gray-800 font-semibold mb-3 text-lg">₹{product.price}</p>

                {/* Buttons */}
                <div className=" mt-4  flex flex-wrap gap-4 justify-center">
                  <button className="bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600 transition">Buy Now</button>
                  <button className="bg-green-500 text-white text-sm px-3 py-1 rounded hover:bg-green-600 transition">Add to Cart</button>
                  <button className="bg-gray-700 text-white text-sm px-3 py-1 rounded hover:bg-gray-800 transition">View Details</button>
                </div>
              </div>


            </div>
          ))}
        </div>
      </div>
    </div>

  );

};

export default WomenPAge;
