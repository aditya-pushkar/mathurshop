import React, { useState, useEffect } from "react";
import "../assets/css/ProductDetail.css";

import baseUrl from "../baseUrl";
import loading from "../extra/loading";

import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  const [productDetail, SetProductDetail] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    getProductDetail();
  }, []);

  const getProductDetail = async () => {
    const response = await fetch(
      `${baseUrl}/api/product/detail/${productId}/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      const data = await response.json();
      SetProductDetail(data);
    } else {
      setError(true);
    }
  };
  // console.log("PRODUCT DETAIL :", productDetail)

  return (
    <div>
      {!productDetail ? (
        <loading />
      ) : (
        <section>
          <div className="relative max-w-screen-xl px-4 py-8 mx-auto pt-24 lg:pt-44">
            <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
              {productDetail.tag === "flower" ? (
                <img
                  alt="product image"
                  className="w-fit h-auto rounded-xl"
                  src={`${baseUrl}${productDetail.primaryImg}`}
                />
              ) : (
                <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                  <div className="aspect-w-1 aspect-h-1">
                    <img
                      alt="product image"
                      className="object-cover rounded-xl"
                      src={`${baseUrl}${productDetail.primaryImg}`}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 lg:mt-4">
                    {productDetail.img_1 !== null ? (
                      <div className="aspect-w-1 aspect-h-1">
                        <img
                          alt="product image"
                          className="object-cover rounded-xl"
                          src={`${baseUrl}${productDetail.img_1}`}
                        />
                      </div>
                    ) : (
                      " "
                    )}

                    {productDetail.img_2 !== null ? (
                      <div className="aspect-w-1 aspect-h-1">
                        <img
                          alt="product image"
                          className="object-cover rounded-xl"
                          src={`${baseUrl}${productDetail.img_2}`}
                        />
                      </div>
                    ) : (
                      " "
                    )}

                    {productDetail.img_3 !== null ? (
                      <div className="aspect-w-1 aspect-h-1">
                        <img
                          alt="product image"
                          className="object-cover rounded-xl"
                          src={`${baseUrl}${productDetail.img_3}`}
                        />
                      </div>
                    ) : (
                      " "
                    )}

                    {productDetail.img_4 !== null ? (
                      <div className="aspect-w-1 aspect-h-1">
                        <img
                          alt="product image"
                          className="object-cover rounded-xl"
                          src={`${baseUrl}${productDetail.img_4}`}
                        />
                      </div>
                    ) : (
                      " "
                    )}
                  </div>
                </div>
              )}

              <div className="sticky top-0">
                <strong className="border border-blue-600 rounded-full tracking-wide px-3 font-medium py-0.5 text-xs bg-gray-100 text-blue-600">
                  Offer &#65285;
                </strong>

                <div className="flex justify-between mt-5">
                  <div className="max-w-[35ch]">
                    <h1 className="lg:text-7xl text-4xl font-bold lg:-mt-2 text-neutral-600">
                      {productDetail.tag === 'flower' ? `${productDetail.title}` : `${productDetail.title} Bouteque`}
                    </h1>
                  </div>
                </div>

                <details className="relative mt-4 group">
                  <summary className="block">
                    <div>
                      <div className="prose max-w-none group-open:hidden">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ipsa veniam dicta beatae eos ex error culpa
                          delectus rem tenetur, architecto quam nesciunt, dolor
                          veritatis nisi minus inventore, rerum at recusandae?
                        </p>
                      </div>

                      <span className="mt-4 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                        Read More
                      </span>
                    </div>
                  </summary>

                  <div className="pb-6 prose max-w-none">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsa veniam dicta beatae eos ex error culpa delectus rem
                      tenetur, architecto quam nesciunt, dolor veritatis nisi
                      minus inventore, rerum at recusandae?
                    </p>

                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Placeat nam sapiente nobis ea veritatis error consequatur
                      nisi exercitationem iure laudantium culpa, animi
                      temporibus non! Maxime et quisquam amet. A, deserunt!
                    </p>
                  </div>
                </details>

                <ul className="mt-5">
                  <li className="text-sm text-black font-bold">
                    Home Delivery :{" "}
                    <span className="text-primaryBtn">Available</span>
                  </li>
                </ul>

                <div className="p-4 bg-gray-100 border rounded mt-5 w-80">
                  <p className="text-sm">
                    <span className="block">
                      For price and more detail please contact with us on
                      WhatsApp.
                    </span>

                    <p className="mt-2 lg:mt-1">
                      <span className="text-sm lg:text-xs underline">
                        By clicking button below
                      </span>
                    </p>
                  </p>
                </div>

                <section className="mt-8">
                  <div className="flex mt-8">
                    <a
                      href="http://wa.me/+918130855845"
                      target="_blank"
                      className="block px-5 py-3 ml-3 text-lg rounded font-normal text-white bg-green-600 hover:bg-green-500"
                    >
                      WhatsApp
                    </a>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
