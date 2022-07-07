import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroller";

import Card from "../Card";
import loading from "../../extra/loading";
import baseUrl from "../../baseUrl";

// fetchProduct ? we want to fetch flower Or bouteque it take string 'flowers' / 'bouteque'.
const Products = ({pageTitle , fetchProduct}) => {

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const response = await fetch(
      `${baseUrl}/api/product/${fetchProduct}/?page=${page}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    // console.log("DATA>>> ", data)
    const productData = await data.results;

    if (data.next === null || data.next === undefined) {
      setHasMore(false);
    }
    setProducts([...products, ...productData]);
    setPage(page + 1);
  };


  // console.log("PRODUCTS : ", products)
  return (
    <div className="bg-white" id="flowers">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="mb-10 lg:my-8 my-9 text-6xl font-bold text-center leading-none tracking-tighter text-neutral-600 lg:text-7xl">
          {pageTitle}
        </h1>
        
          <InfiniteScroll
          key={page}
            loadMore={getProduct}
            hasMore={hasMore}
            loader={<loading />}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product, index) => (
                <Card
                  key={index}
                  id={product.id}
                  title={product.title}
                  primaryImg={product.primaryImg}
                />
              ))}
            </div>
          </InfiniteScroll>
      
      </div>
    </div>
  );
};

export default Products;
