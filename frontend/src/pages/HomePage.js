import React from 'react'

import Hero from '../components/homepage/Hero'
import CardFlower from '../components/homepage/CardFlower'
import CardBouquet from '../components/homepage/CardBouquet'

const HomePage = () => {
  return (
    <div>
        <Hero />
        <CardFlower />
        <CardBouquet />
        {/* <CardBouquet />
        <Service />
        <Footer />  */}
    </div>
  )
}

export default HomePage