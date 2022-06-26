import React from 'react';

import Hero from '../components/homepage/Hero';
import CardFlower from '../components/homepage/CardFlower';
import CardBouquet from '../components/homepage/CardBouquet';
import Service from '../components/homepage/Service';
import Faq from '../components/homepage/Faq';

const HomePage = () => {
  return (
    <div>
        <Hero />
        <CardFlower />
        <CardBouquet />
        <Service />
        <Faq />
    </div>
  )
}

export default HomePage