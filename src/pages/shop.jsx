import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from "../components/popular/popular"
import Offers from "../components/Offers/Offers"
import NewCollections from '../components/Newcollections/Newcollections'
import NewsLetter from '../components/NewsLetter/NewsLetter'

function shop() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default shop