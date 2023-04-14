import React, { useEffect, useState } from 'react'
import GlobalApi from '../API/GlobalApi'
import MovieCard from './MovieCard';

function MovieList(genereId) {
    const[movieList, setMovieList] = useState([])
    useEffect(()=>{
        movieListByGEnreId();

    },[])
    const movieListByGEnreId = ()=>{
        GlobalApi.getMovieByGenraId(genereId.genereId).then((res)=>
        {
            setMovieList(res.data.results)
        })
    }
  return (
    <div className='mb-4 px-8 md:px-24 ' >
        <li className='list-none w-full overflow-scroll scroll-smooth overflow-x-auto  whitespace-nowrap scrollbar-hide'>
             {movieList.slice(0, 7).map((item)=>{
                return(
                    <MovieCard key={item.id} movie={item}/>
                )     
        })}
       </li>
    </div>
  )
}

export default MovieList