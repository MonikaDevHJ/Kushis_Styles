import { it } from "node:test";
import { Product } from "../Data/Product";

interface props {
  params: {
    category: String;
  };
}


const CategoryPage = ({ params }: props) => {

  const { category } = params;

  const filterProduct = Product.filter(
    (item) => item.categoryPage.toLowerCase() === category.toLowerCase()
  );


  return (
    <div className="p-4">
      <p className="">{category} Page</p>

      {filterProduct.length === 0 ? (
        <p>No Product  Found  for "{category}"</p>
      ) : (
        < div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {filterProduct.map((item, index)=>
          <div key={index} className="border p-4 rounded shadow ">
            <p>{item.price}</p>
            
          </div>
           )}


        </div>
      )}
    </div >

  )
}
export default CategoryPage;