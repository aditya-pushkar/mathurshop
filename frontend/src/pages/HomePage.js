import React from 'react';

import Hero from '../components/homepage/Hero';
import ProductSection from '../components/homepage/ProductSection';
import Service from '../components/homepage/Service';
import Faq from '../components/homepage/Faq';

const HomePage = () => {
  return (
    <div>
        <Hero />
        <ProductSection sectionTitle={'FLOWER'} bgColor={'gray-100'} fetchProduct={'flowers'} navigateTo={'flowers'}/>
        <ProductSection sectionTitle={'BOUQUET'} bgColor={'white'} fetchProduct={'bouquet'} navigateTo={'bouquets'}/>
        <Service />
        <Faq />
    </div>
  )
}

export default HomePage