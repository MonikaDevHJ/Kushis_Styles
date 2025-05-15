"use client"

import { useState } from "react";
import { Product } from "../Data/Product";
import CategoryFilters from "../components/category/categoryFilter"

interface Props {
  params: {
    category: string;
  };
}

const CategoryPage = ({ params }: Props) => {
  const { category } = params;

  const [selectedItem , setSelectedItem] = useState("")

  // Filter products based on category
  const filterProduct = Product.filter(
    (item) => item.categoryPage.toLowerCase() === category.toLowerCase()
  );



  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold capitalize mb-4">{category} Collection</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left: Filter Sidebar */}
        <div className="md:col-span-1 bg-gray-100 p-4 rounded shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>

          {/* Dynamic Filters based on Category */}
          <CategoryFilters category={category} setSelected = {setSelectedItem} />


        </div>

        {/* Right: Product Grid */}
        <div className="md:col-span-3">
          {filterProduct.length === 0 ? (
            <p className="text-red-600 text-lg">
              No products found for "{category}"
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filterProduct.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
                >
                  {/* Image with Heart Icon */}
                  <div className="w-full aspect-[3/4] relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />

                    {/* Wishlist Heart Icon – Top Right */}
                    <div className="absolute top-2 right-0">
                      <button className="text-red-500 text-4xl hover:scale-110 transition-transform">
                        ♥
                      </button>
                    </div>
                  </div>


                  {/* Title and Price */}
                  <div className="p-4 flex justify-between items-center mt-3">
                    <p className="font-semibold text-lg text-gray-800">{item.title}</p>
                    <p className="text-gray-950 mt-1 font-bold">₹{item.price}</p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap justify-center gap-2 px-4 pb-4 mt-3">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
                      Buy Now
                    </button>
                    <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition">
                      Add to Cart
                    </button>
                    <button className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 transition">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>



      </div>
    </div>
  );
};

export default CategoryPage;
