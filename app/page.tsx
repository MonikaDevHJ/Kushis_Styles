import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Main from "./components/Main"

export default function Home() {
  return (
   <div className=" py-1.5 px-5  lg:px-5 md:px-1.5  sm:px-2">
     <Navbar/>

     <div className="mt-3">
     <Main/>
     </div>
    
     <Footer/>
   </div>
  );
} 
