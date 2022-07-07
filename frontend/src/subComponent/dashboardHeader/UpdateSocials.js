import { stringify } from "postcss";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import "../../assets/css/Login.css";
import baseUrl from "../../baseUrl";

const UpdateSocials = () => {
  const navigate = useNavigate();
  const [socials, setSocials] = useState();

  useEffect(() => {
    getSocials();
  }, []);

  const getSocials = async () => {
    const response = await fetch(`${baseUrl}/api/socials/`, {
      method: "GET",
    });

    if (response.status === 200) {
      const data = await response.json();
      setSocials(data);
    } else {
      navigate("/dashboard");
    }
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    const _id = socials[0].id
    const fb = event.target.facebook.value
    const insta = event.target.instagram.value
    const twitter= event.target.twitter.value
    const phone = event.target.phone.value
    const whatsapp = event.target.whatsapp.value

    // console.log({_id, fb, insta, twitter, phone, whatsapp})
    const response = await fetch(`${baseUrl}/api/socials/update/${_id}/`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({id:_id, fb:fb, instagram:insta, twitter:twitter, phone_number:phone, whatsapp_number:whatsapp})
    })
    if(response.status===200){
      navigate("/dashboard")
    }
  }

  const handleCancel = () =>{
    navigate("/dashboard")
  }

  return (
    <div>
      {socials === undefined ? (
        <div></div>
      ) : (
        <div>
          <div className="pt-32 loginStyle ">
            <div className="flex flex-col max-w-md p-6 sm:p-10  bg-gray-100 text-neutral-600 rounded-2xl shadow-lg">
              <div className="mb-8 text-center ">
                <h1 className="my-3 text-4xl font-bold">Update Socials</h1>
                <p className="text-sm dark:text-gray-400">
                  Update socials for this website
                </p>
              </div>
              <form
                
                onSubmit={handleSubmit}
                className="space-y-12 ng-untouched ng-pristine ng-valid"
              >
                <div className="space-y-4">
                  <div>
                    <label for="facebook" className="block mb-2 text-sm">
                      Facebook
                    </label>
                    <textarea
                      type="url"
                      id="facebook"
                      name="facebook"
                      placeholder="Your Facebook page url"
                      defaultValue={socials[0].fb}
                      className="w-full h-11 px-3 py-2 border rounded-md dark:bg-white dark:text-black"
                    ></textarea>
                  </div>
                  <div>
                    <label for="instagram" className="block mb-2 text-sm">
                      Instagram
                    </label>
                    <textarea
                      type="url"
                      id="instagram"
                      name="instaram"
                      placeholder="Your Instagram page url"
                      defaultValue={socials[0].instagram}
                      className="w-full h-11 px-3 py-2 border rounded-md dark:bg-white dark:text-black"
                    ></textarea>
                  </div>
                  <div>
                    <label for="twitter" className="block mb-2 text-sm">
                      Twitter
                    </label>
                    <textarea
                      type="url"
                      id="twitter"
                      name="twitter"
                      placeholder="Your Twitter page url"
                      className="w-full h-11 px-3 py-2 border rounded-md dark:bg-white dark:text-black"
                      defaultValue={socials[0].twitter}
                    ></textarea>
                  </div>
                  <div>
                    <label for="phone" className="block mb-2 text-sm">
                      Phone Number
                    </label>
                    <textarea
                      type="number"
                      id="phone"
                      name="phone"
                      placeholder="Your Phone number"
                      defaultValue={socials[0].phone_number}
                      className="w-full h-11 px-3 py-2 border rounded-md dark:bg-white dark:text-black"
                    ></textarea>
                  </div>
                  <div>
                    <label for="whatsapp" className="block mb-2 text-sm">
                      WhatsApp
                    </label>
                    <textarea
                      type="number"
                      id="whatsapp"
                      name="whatsapp"
                      placeholder="Your WhatsApp number"
                      className="w-full h-11 px-3 py-2 border rounded-md dark:bg-white dark:text-black"
                      defaultValue={socials[0].whatsapp_number}
                    ></textarea>
                  </div>
                </div>
                <div class="mt-6 sm:flex ">
                  <div className="mt-3 rounded-lg sm:mt-0">
                    <button type="button" onClick={handleCancel} className="items-center block px-10 py-3.5 text-base font-medium text-center text-primaryBtn transition duration-500 ease-in-out transform border-2 bg-gray-50 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                      Cancel
                    </button>
                  </div>
                  <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                    <button className="items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-primaryBtn rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateSocials;
