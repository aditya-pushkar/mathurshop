import React from "react";

const Headers = () => {
  return (
    <div >
      <header className="shadow-sm z-50 bg-gradient-to-r from-gradiantRed to-gradiantOrange sticky">
        <div className="max-w-screen-xl p-4 mx-auto text-white">
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
                className="px-5 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg"
                href=""
              >
                Log in
              </a>

              <a
                className="px-5 py-2 text-sm font-medium text-white bg-primaryBtn rounded-lg"
                href=""
              >
                Sign up
              </a>
            </div>

            <div className="lg:hidden">
              <button
                className="p-2 text-white bg-primaryBtn rounded-lg"
                type="button"
              >
                <span className="sr-only">Open menu</span>
                <svg
                  aria-hidden="true"
                  className="w-6 h-5"
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
