import React, {useState} from "react";
import HeaderMobile from '../components/header/HeaderMobile';

const Headers = () => {
  const [showNav, setShowNav] = useState(false)
  const [navBackgroundCol, setNavBackgroundCol] = useState(false)

  const changeBackgroundCol = () => {
    const scrl = window.scrollY;
    if(scrl !== 0){
      setNavBackgroundCol(true)
      return 0;
    }
    setNavBackgroundCol(false)
  }

  window.addEventListener('scroll', changeBackgroundCol);

  const showNavFunc = () =>{
    if(showNav===true){
      setShowNav(false);
      return 0;
    }
    setShowNav(true)
  }

  return (
    <div >
      {showNav ? (<HeaderMobile />) : " "}
      <header  className={`shadow-sm  w-screen fixed z-10 ${navBackgroundCol || showNav ? "bg-white text-black" : ("bg-gradient-to-r from-gradiantRed to-gradiantOrange text-white")} `}>
        <div className="max-w-screen-xl p-4 mx-auto ">
          <div className="flex items-center justify-between space-x-4 lg:space-x-10">
            <div className="flex lg:w-0 lg:flex-1">
              <span className="w-20 h-10 bg-gray-200 rounded-lg"></span>
            </div>

            <nav className="hidden space-x-8 text-sm font-medium md:flex">
              <a  href="#">
                Flower
              </a>
              <a href="#">
               Bouquet 
              </a>
              <a  href="#">
                Service
              </a>
              <a  href="#">
                Contact
              </a>
              {/* className="text-gray-500" */}
            </nav>

            <div className="items-center justify-end flex-1 hidden space-x-4 sm:flex">
              <a
                className="px-5 py-2 text-sm font-medium text-white bg-primaryBtn rounded-lg"
                href=""
              >
                Log in
              </a>
            </div>

            <div className="lg:hidden" onClick={showNavFunc}>
              <button
                className="p-2 text-white bg-primaryBtn rounded-lg"
                type="button"
              >
                <span className="sr-only">Open menu</span>
                <svg
                  aria-hidden="true"
                  className="w-6 h-5 mb-1"
                  fill="none"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Headers;
