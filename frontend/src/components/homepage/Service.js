import React, {useState} from "react";

import ContactModal from "../../components-small/ContactModal";

const Service = () => {
    // change image automatically using useState and useEffect
    const [contactModal, setContactModal] = useState(false)

    const showContactModal = () => {
      if(contactModal === false){
        setContactModal(true);
        return 0;
      }
      setContactModal(false);
    }

  return (
    <div>

      {/* Correct this  */}
      {contactModal ? (<ContactModal />) : " "}
      <section className="bg-gray-100">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last">
                
              <img
                className="absolute inset-0 object-cover w-full h-full"
                src="https://images.pexels.com/photos/6400831/pexels-photo-6400831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Man using a computer"
              />
            </div>
            
            <div className="lg:py-24">
              <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">Decorate your car.</h1>

              <p className="mt-4 text-gray-600">
                Decorate your car by proffetional on your life best day.
              </p>

              <a onClick={showContactModal}
                className="inline-flex items-center px-8 py-3 mt-8 h-14 text-white transition duration-500 ease-in-out transform  bg-primaryBtn border border-primaryBtn hover:bg-transparent hover:text-primaryBtn active:text-primaryBtn focus:outline-none focus:ring rounded-xl "
              >
                <span  className="text-sm font-medium"> Contact Us </span>

                {/* <svg className="w-5 h-5 ml-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg> */}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
