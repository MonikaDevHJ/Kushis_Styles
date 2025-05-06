
interface Props {
  params :{
    category : string;
  }
}

const CategoryPage = ({params}:Props) =>{
  const {category} = params;
 return(
  <div>
    <p>{category} Page</p>
    <p>Show content for : {category}</p>
  </div>
 )

}
export default CategoryPage;