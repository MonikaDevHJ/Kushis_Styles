'use client'
import React, { useState } from "react";

const WomensPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    { id: 1, category: "kurtis", image: "/assets/Womens_image.jpg", label: "Stylish Kurti" },
    { id: 2, category: "jeans", image: "/assets/Womens_image.jpg", label: "Blue Jeans" },
    { id: 3, category: "kurtis", image: "/assets/Womens_image.jpg", label: "Cotton Kurti" },
    { id: 4, category: "jeans", image: "/assets/Womens_image.jpg", label: "Ripped Jeans" },
    { id: 5, category: "tops", image: "/assets/Womens_image.jpg", label: "Floral Top" },
    { id: 6, category: "dresses", image: "/assets/Womens_image.jpg", label: "Evening Dress" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Filter Section */}
        <div className="w-full md:w-1/4 bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
          <select
            className="w-full border rounded-md p-2 mb-4"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="kurtis">Kurtis</option>
            <option value="jeans">Jeans</option>
            <option value="tops">Tops</option>
            <option value="dresses">Dresses</option>
          </select>
        </div>

        {/* Product Cards Section */}
        <div className="w-full md:w-3/4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.label}
                className="h-32 w-full object-cover rounded-md mb-2"
              />
              <p className="text-center font-semibold">{product.label}</p>
            </div>
          ))}
        </div>
      </div>    
    </div>
  );
};

export default WomensPage;
