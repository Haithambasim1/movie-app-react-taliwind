import React from 'react'
import GenresList from '../constant/GenresList'
import { IoChevronForwardSharp } from 'react-icons/io5'
import MovieList from './MovieList'


function GenreMovieList() {
  return (
    <div>
        <h2 className='text-white text-[36px] text-center mt-10'>Movies</h2>
            <div>{GenresList.genere.slice(0, 4).map((item)=>{
        return(
            <div className='mt-8'>
                <li key={item.id} className='text-[24px] text-white font-bold list-none p-4 px-24'>{item.name}
                <span className='font-normal text-[16px] cursor-pointer text-gray-400
            float-right flex items-center'>VIEW ALL <IoChevronForwardSharp className='text-white ml-1' /></span>
                </li>
                <MovieList genereId={item.id}/>
            </div>
        )
    })}</div>
    </div>
    
    

  )
}

export default GenreMovieList