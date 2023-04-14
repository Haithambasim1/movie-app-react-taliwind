import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import GenreMovieList from '../components/GenreMovieList'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='w-full h-[200vh]'>
        <Header />
        <Hero />
        <GenreMovieList />
        <Footer />
    </div>
  )
}

export default Home