import { Product } from "../Data/Product";
import CategoryFilters from "../components/category/categoryFilter"

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

  

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold capitalize mb-4">{category} Collection</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left: Filter Sidebar */}
        <div className="md:col-span-1 bg-gray-100 p-4 rounded shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>

          {/* Dynamic Filters based on Category */}
          <CategoryFilters category={category} />


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
