import React from "react";
import { Link } from "react-router-dom";

const HeaderMobile = ({setShowNav}) => {
  return (
    <div>
      <div className="flex flex-col justify-between h-screen w-screen fixed z-10 bg-gray-100 border-r">
        <div className="px-4 py-6  ">
          <nav className="flex flex-col mt-20 space-y-1">
            <Link onClick={()=>setShowNav(false)}
              to="/flowers"
              className="flex items-center px-4 py-2 text-gray-700 rounded-lg"
            >
              <span className="ml-3 text-sm font-medium"> Flowers </span>
            </Link>

            <Link onClick={()=>setShowNav(false)}
              to="/bouquets"
              className="flex items-center px-4 py-2 text-gray-700  rounded-lg"
            >
              <span className="ml-3 text-sm font-medium"> Bouquets </span>
            </Link>

        
            <Link onClick={()=>setShowNav(false)}
              to="/#service"
              className="flex items-center px-4 py-2 text-gray-700  rounded-lg hover:hover:text-gray-700"
            >
              <span className="ml-3 text-sm font-medium"> Service </span>
            </Link>

            <Link onClick={()=>setShowNav(false)}
              to="/contact"
              className="flex items-center px-4 py-2 text-gray-700 rounded-lg hover:hover:text-gray-700"
            >
              <span className="ml-3 text-sm font-medium">Contact</span>
            </Link>

            <details className="group">
              <summary className="flex items-center px-4 py-2 text-gray-700   rounded-lg cursor-pointer hover:hover:text-gray-700">
              
                <span className="ml-3 text-sm font-medium"> Account </span>

                <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <nav className="mt-1.5 ml-8 flex flex-col">
        
                <Link onClick={()=>setShowNav(false)}
                  to="/login"
                  className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>

                  <span className="ml-3 text-sm font-medium"> Login </span>
                </Link>

                <form action="/logout">
                  <button
                    type="submit"
                    className="flex items-center w-full px-4 py-2 text-gray-500 rounded-lg hover:hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>

                    <span className="ml-3 text-sm font-medium"> Logout </span>
                  </button>
                </form>
              </nav>
            </details>
          </nav>
        </div>

      </div>
    </div>
  );
};

export default HeaderMobile;
