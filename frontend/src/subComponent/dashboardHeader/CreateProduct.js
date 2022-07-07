import React, { useState } from "react";

import "../../assets/css/Login.css";

import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import baseUrl from "../../baseUrl";

const CreateProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [currentTag, setCurrentTag] = useState('flower')
  const [error, setError] = useState({
    show: false,
    title: ""
  })
  const [data, setData] = useState({
    title: "",
    description: "",
  })

  const handleSubmit = async(e) => {
    e.preventDefault()

    let formData = new FormData()
    formData.append('title', data.title)
    formData.append('description', data.description)
    formData.append('tag', currentTag)
    formData.append('primaryImg', data.primaryImg)
    if(data.img_1){
      formData.append('img_1', data.img_1)
    }
    if(data.img_2){
      formData.append('img_2', data.img_2)
    }
    if(data.img_3){
      formData.append('img_3', data.img_3)
    }
    if(data.img_4){
      formData.append('img_4', data.img_4)
    }
    
    const config = {headers :{ 'Content-Type': 'multipart/form-data'}};
    const URL = `${baseUrl}/api/product/create/`
    axios 
        .post(URL, formData, config)
        .then((res)=>{
          if(res.status === 201){
            navigate(`/product/${res.data}`)
            console.log("RESPONSE DATA", res.data)
          }
        })
        .catch((err)=> console.log(err))
    
  }
  
  const handleInputChange = (e) => {
    e.preventDefault()
    let formData = {...data}
    formData[e.target.name] = e.target.value
    setData(formData)
  }

  const handleChange = (e) => {
    const imgg = e.target.files[0]
    if(imgg){
      let formData = {...data}
      formData[e.target.name] = imgg
      setData(formData)
    }

  }
  
  const handleTag = (tag) => {
    setCurrentTag(tag)
  };
  
  const handleCancel = () => {
    navigate("/dashboard");
  };

  // console.log("DATA>>>>", data)

  return (
    <div>
      <div>
        <div className="pt-32 loginStyle ">
          <div className="flex flex-col max-w-md p-6 sm:p-10 lg:max-w-2xl lg:-mx-20 bg-gray-100 text-neutral-600 rounded-2xl shadow-lg">
            <div className="mb-8 text-center ">
              <h1 className="my-3 text-4xl font-bold">Create Product</h1>
              <p className="text-sm dark:text-gray-400">
                Create a product for this website
              </p>
            </div>
            <form className="space-y-12 ng-untouched ng-pristine ng-valid" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label for="title" className="block mb-2 text-sm">
                    Title
                  </label>
                  <textarea
                    onChange={handleInputChange}
                    type="text"
                    name="title"
                    placeholder="Your Product Title"
                    className="w-full h-15 px-3 py-2 border rounded-md dark:bg-white dark:text-black"
                  ></textarea>
                </div>
                <div>
                  <label for="description" className="block mb-2 text-sm">
                    Description
                  </label>
                  <textarea
                    onChange={handleInputChange}
                    type="text"
                    name="description"
                    placeholder=" Your Product Description"
                    className="w-full h-24 px-3 py-2 border rounded-md dark:bg-white dark:text-black"
                  ></textarea>
                </div>
                <div>
                  <label for="tag" className="block mb-2 text-sm">
                    Tag
                  </label>
                  <select className="h-10 pl-5 rounded-md bg-white shadow-2xl" onChange={(event)=>handleTag(event.target.value)}>
                    <option value="flower">flower</option>
                    <option value="bouquet">bouquet</option>
                  </select>
                </div>

                <div>
                  <label for="primaryImg" className="block mb-2 text-sm">
                    Primary Image
                  </label>
                  <input
                    onChange={handleChange}
                    type="file"
                    name="primaryImg"
                    accept="image/jpeg,image/png"
                    className="w-full h-11 shadow px-3 py-2 border rounded-md bg-white dark:text-black"
                  />
                </div>

                {currentTag==='flower' ? null : (
                  <div>
                    <div>
                      <label for="img_1" className="block mb-2 text-sm">
                        Add Image
                      </label>
                      <input
                      onChange={handleChange}
                        type="file"
                        name="img_1"
                        accept="image/jpeg,image/png"
                        className="w-full h-11 shadow px-3 py-2 border rounded-md bg-white dark:text-black"
                      />
                    </div>

                    <div>
                      <label for="img_2" className="block mb-2 text-sm">
                        Add Image
                      </label>
                      <input
                      onChange={handleChange}
                        type="file"
                        name="img_2"
                        accept="image/jpeg,image/png"
                        className="w-full h-11 shadow px-3 py-2 border rounded-md bg-white dark:text-black"
                      />
                    </div>

                    <div>
                      <label for="img_3" className="block mb-2 text-sm">
                        Add Image
                      </label>
                      <input
                      onChange={handleChange}
                        type="file"
                        name="img_3"
                        accept="image/jpeg,image/png"
                        className="w-full h-11 shadow px-3 py-2 border rounded-md bg-white dark:text-black"
                      />
                    </div>

                    <div>
                      <label for="img_4" className="block mb-2 text-sm">
                        Add Image
                      </label>
                      <input
                      onChange={handleChange}
                        type="file"
                        name="img_4"
                        accept="image/jpeg,image/png"
                        className="w-full h-11 shadow px-3 py-2 border rounded-md bg-white dark:text-black"
                      />
                    </div>
                  </div>
                )}
              </div>
              <div class="mt-6 sm:flex ">
                <div className="mt-3 rounded-lg sm:mt-0">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="items-center block px-10 py-3.5 text-base font-medium text-center text-primaryBtn transition duration-500 ease-in-out transform border-2 bg-gray-50 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Cancel
                  </button>
                </div>
                <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                  <button  className="items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-primaryBtn rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Create
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
