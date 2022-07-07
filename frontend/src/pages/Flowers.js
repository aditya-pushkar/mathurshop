import React from 'react'

import Products from '../components/explore/products'

const Flowers = () => {
  return (
    // Be carefull it is flowers not flower beacause of way the api built.
    <Products pageTitle={'FLOWER'} fetchProduct={'flowers'} />
  )
}

export default Flowers
