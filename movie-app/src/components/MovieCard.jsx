import React from 'react'

function MovieCard(movie) {
    const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";

  return (
    <div className=' inline-block m-2 md:m-3 cursor-pointer group:'>
        <img src={IMAGE_BASE_URL+movie.movie.backdrop_path} alt="movie img" 
        className='w-[240px] md:w-[370px] object-cover rounded-2xl mb-2 hover:border-[5px] border-gray-400 p-1 transition-all duration-200 ease-in-out'  />
        <h2 className='text-gray-400 text-[12px] md:text-[17px] mt-2 font-bold'>{movie.movie.id%2!=0?"Watch Movie": "Start Whatching!"}</h2>
        <h2 className=' text-white text-[18px] cursor-pointer mt-2 transition-all md:text-[20px]'>{movie.movie.original_title}</h2>

    </div>
  )
}

export default MovieCard