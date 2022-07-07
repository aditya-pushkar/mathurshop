import React,  {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import Card from "../Card";

import baseUrl from "../../baseUrl";

// fetchProduct --> Based on a Api 'flowers' Or 'bouteque'
const ProductSection = ({sectionTitle, bgColor, fetchProduct, navigateTo}) => {

  const [products, setProducts] = useState([])
  
  useEffect(()=>{
    getProduct()
  }, [])

  const getProduct = async() => {
    const response = await fetch(`${baseUrl}/api/product/${fetchProduct}/`,{
      method: 'GET'
    })
    const data = await response.json()
    const productData = await data.results
    setProducts(productData)
  }


  // console.log("PRODUCTS : ", products)
  return (
    <div className={`bg-${bgColor}`}>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="mb-10 text-4xl font-bold text-center leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
          {sectionTitle}
        </h1>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {
            products.map((product, index)=>(
              <Card key={index} id={product.id} title={product.title} primaryImg={product.primaryImg}/>
            ))
          }
        </div>
      </div>

      <Link to={`/${navigateTo}`}>
      <p style={{paddingBottom: "25px",textDecoration: "underline", marginTop: "-50px"}} className="text-center  transition duration-500 ease-in-out text-primaryBtn  smooth hover:text-lg">explore</p>
      </Link>

    </div>
  );
};

export default ProductSection;
