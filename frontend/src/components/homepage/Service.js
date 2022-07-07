import React, {useState, useEffect, useRef} from "react";
import { useNavigate } from "react-router-dom";

import baseUrl from "../../baseUrl";

const Service = () => {

  const navigate = useNavigate()
  const [imgs, setImgs] = useState();
  const [iterableImg, setIterableImg] = useState([])
  // const [currentImg, setCurrentImg] = useRef()
 
  useEffect(()=>{
    getServiceImg();
  }, [])


  const getItrableImg = () =>{
      if(imgs !== undefined){
      for (let key in imgs[0]){
        if(imgs[0][key] !== undefined && imgs[0][key] !==  null && key !== "id"){
          setIterableImg(imgs[0][key])
          if(key==='img_4'){
            break;
          }
      }}
    }
  }

  console.log("ITERABLE IMGS ", iterableImg)

  const getServiceImg = async() => {
    const response = await fetch(`${baseUrl}/api/service/`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    if(response.status===200){
    const data = await response.json()
      setImgs(data)
    }else{
      navigate("/")
    }
  }

  return (
    
    <div>
      {imgs===undefined || imgs===null ? <div></div> : (
        <section className="bg-gray-100" id="section">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last">
                
              <img
                className="absolute inset-0 object-cover w-full h-full"
                src={imgs[0].primaryImg? `${baseUrl}${imgs[0].primaryImg}` : ("https://images.pexels.com/photos/6400831/pexels-photo-6400831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")}
                alt="Man using a computer"
              />
            </div>
            
            <div className="lg:py-24">
              <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">Decorate your car.</h1>
              
              <p className="mt-4 text-gray-600">
                Decorate your car by proffetional on your life best day.
              </p>
              
              {/* Go to contact page */}
              <a 
                className="inline-flex items-center px-8 py-3 mt-8 h-14 text-white transition duration-500 ease-in-out transform border hover:border-primaryBtn bg-primaryBtn hover:bg-white hover:text-primaryBtn active:text-primaryBtn focus:outline-none focus:ring rounded-xl "
              >
                <span  className="text-sm font-medium"> Contact Us </span>
               
              </a>
            </div>
          </div>
        </div>
      </section>
      )}
    </div>
  );
};

export default Service;
