import { Product } from "../Data/Product";

interface Props {
  params: {
    category: string;
  };
}

const CategoryPage = ({ params }: Props) => {
  const { category } = params;

  // Filter products based on category
  const filterProduct = Product.filter(
    (item) => item.categoryPage.toLowerCase() === category.toLowerCase()
  );

  // Dynamic filters based on category
  const getFilters = () => {
    if (category === "men") {
      return (
        <>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Size</label>
            <select className="w-full border rounded p-2">
              <option value="">All Sizes</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Color</label>
            <select className="w-full border rounded p-2">
              <option value="">All Colors</option>
              <option value="blue">Blue</option>
              <option value="black">Black</option>
              <option value="white">White</option>
            </select>
          </div>
        </>
      );
    } else if (category === "women") {
      return (
        <>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Size</label>
            <select className="w-full border rounded p-2">
              <option value="">All Sizes</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Material</label>
            <select className="w-full border rounded p-2">
              <option value="">All Materials</option>
              <option value="cotton">Cotton</option>
              <option value="silk">Silk</option>
              <option value="wool">Wool</option>
            </select>
          </div>
        </>
      );
    } else if (category === "grocery") {
      return (
        <>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Brand</label>
            <select className="w-full border rounded p-2">
              <option value="">All Brands</option>
              <option value="aashirvaad">Aashirvaad</option>
              <option value="tata">Tata</option>
              <option value="fortune">Fortune</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Price Range</label>
            <select className="w-full border rounded p-2">
              <option value="">All Prices</option>
              <option value="under-500">Under ₹500</option>
              <option value="500-1000">₹500 - ₹1000</option>
              <option value="1000-2000">₹1000 - ₹2000</option>
            </select>
          </div>
        </>
      );
    }
    else if (category === "mobiles") {
      return (
        <>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Brand</label>
            <select className="w-full border rounded p-2">
              <option value="">All Brands</option>
              <option value="aashirvaad">Vivo</option>
              <option value="tata">Realme</option>
              <option value="fortune">Redme</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Price Range</label>
            <select className="w-full border rounded p-2">
              <option value="">All Prices</option>
              <option value="under-500">Under ₹500</option>
              <option value="500-1000">₹500 - ₹1000</option>
              <option value="1000-2000">₹1000 - ₹2000</option>
            </select>
          </div>
        </>
      );
    }
      else if (category === "gifts") {
      return (
        <>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Brand</label>
            <select className="w-full border rounded p-2">
              <option value="">All Brands</option>
              <option value="aashirvaad">Vivo</option>
              <option value="tata">Realme</option>
              <option value="fortune">Redme</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Price Range</label>
            <select className="w-full border rounded p-2">
              <option value="">All Prices</option>
              <option value="under-500">Under ₹500</option>
              <option value="500-1000">₹500 - ₹1000</option>
              <option value="1000-2000">₹1000 - ₹2000</option>
            </select>
          </div>
        </>
      );
    }
      else if (category === "makeup") {
      return (
        <>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Brand</label>
            <select className="w-full border rounded p-2">
              <option value="">All Brands</option>
              <option value="aashirvaad">Vivo</option>
              <option value="tata">Realme</option>
              <option value="fortune">Redme</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Price Range</label>
            <select className="w-full border rounded p-2">
              <option value="">All Prices</option>
              <option value="under-500">Under ₹500</option>
              <option value="500-1000">₹500 - ₹1000</option>
              <option value="1000-2000">₹1000 - ₹2000</option>
            </select>
          </div>
        </>
      );
    }
    
    return null;
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold capitalize mb-4">{category} Collection</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left: Filter Sidebar */}
        <div className="md:col-span-1 bg-gray-100 p-4 rounded shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>

          {/* Dynamic Filters based on Category */}
          {getFilters()}

        </div>

        {/* Right: Product Grid */}
        <div className="md:col-span-3">
          {filterProduct.length === 0 ? (
            <p className="text-red-600 text-lg">No products found for "{category}"</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterProduct.map((item, index) => (
                <div key={index} className="border rounded shadow p-4 text-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded mb-3"
                  />
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600 mt-1">₹{item.price}</p>
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
