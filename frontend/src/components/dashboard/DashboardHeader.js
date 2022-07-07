import React, { useState } from "react";

import Option from "../../subComponent/dashboardHeader/Option";

const DashboardHeader = () => {

  const [showOptions, setShowOptions] = useState(false)

  const handleOptions = () => {
    if(showOptions){
      return setShowOptions(false);
    }
    return setShowOptions(true);
  }

  const handleOptionsOnScroll = () =>{
    if(showOptions){
      return setShowOptions(false)
    }
  }

  window.addEventListener('scroll', handleOptionsOnScroll);

  return (
    <div>
      <header className="bg-gradient-to-r from-gradiantRed to-gradiantOrange h-60">
        <div className="max-w-screen-xl px-4 py-8 lg:my-0 -my-2 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center sm:justify-between sm:gap-4">
            <div className="flex items-center justify-between flex-1 gap-8 sm:justify-end">
              <div className="flex gap-4">
                <section className="block p-2.5 text-gray-600 bg-white rounded-lg hover:text-gray-700 shrink-0 shadow-sm disabled:lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    stroke-width="0"
                    className="text-gray-100"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M8.686 4l2.607-2.607a1 1 0 0 1 1.414 0L15.314 4H19a1 1 0 0 1 1 1v3.686l2.607 2.607a1 1 0 0 1 0 1.414L20 15.314V19a1 1 0 0 1-1 1h-3.686l-2.607 2.607a1 1 0 0 1-1.414 0L8.686 20H5a1 1 0 0 1-1-1v-3.686l-2.607-2.607a1 1 0 0 1 0-1.414L4 8.686V5a1 1 0 0 1 1-1h3.686zM6 6v3.515L3.515 12 6 14.485V18h3.515L12 20.485 14.485 18H18v-3.515L20.485 12 18 9.515V6h-3.515L12 3.515 9.515 6H6zm6 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                      fill="rgba(75,85,99,1)"
                    />
                  </svg>
                </section>

                <section>
                  {/* Menu */}
                  
                  <div className="inline-flex items-stretch bg-white border rounded-md py-1 ">
                    <div
                      className="px-4 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-l-md "
                    >
                      Options
                    </div>

                    <div className="relative">
                      <button onClick={handleOptions}
                        type="button"
                        className="inline-flex items-center justify-center h-full px-2 text-gray-600 border-l border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                      {showOptions ? (
                        <div
                        className="absolute right-0 z-10 w-56 mt-4 lg:-mx-16 -mx-20 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg"
                        role="menu"
                      >
                        <div className="p-2">
                          <Option optionTitle={'Create a user'} optionNavigate={"/dashboard/update-socials"}/>
                          <Option optionTitle={'Create a product'} optionNavigate={"/dashboard/create-product/undefine"}/>
                          <Option optionTitle={'Update socials'} optionNavigate={"/dashboard/update-socials"}/>
                          <Option optionTitle={'Update services'} optionNavigate={"/dashboard/update-socials"}/>
                        </div>
                      </div>
                      ) : ("")}
                      
                    </div>
                  </div>

                </section>
              </div>

              <button
                type="button"
                className="flex items-center transition rounded-lg group shrink-0"
              >
                <img
                  className="object-cover w-10 h-10 rounded-full"
                  src="https://www.hyperui.dev/photos/man-4.jpeg"
                  alt="Simon Lewis"
                />

                <p className="hidden ml-2 text-xs text-left sm:block">
                  <strong className="block text-white font-medium">
                    Simon Lewis
                  </strong>

                  <span className="text-white"> simonlewis@fakemail.com </span>
                </p>
              </button>
            </div>
          </div>

          <div className="mt-8">
            <h1 className="text-2xl font-bold text-white sm:text-3xl">
              Welcome Back, Barry!
            </h1>

            <p className="mt-1.5 text-sm text-white opacity-75">
              Improve your website for the users ! 🚀
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default DashboardHeader;
