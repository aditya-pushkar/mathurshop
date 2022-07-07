import React from 'react'
import Products from '../components/explore/products'

const Bouquet = () => {
  return (
    // Be carefull it is Bouquet not flower beacause of way the api bilt.
    <Products pageTitle={'BOUQUETS'} fetchProduct={'bouquet'}/>
  )
}

export default Bouquet