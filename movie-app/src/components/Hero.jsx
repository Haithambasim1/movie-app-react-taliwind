import React, { useEffect, useState } from 'react'
import GlobalApi from '../API/GlobalApi'

function Hero() {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  const [movieList, setmovieList] = useState([]);
  const [movieIndex, setMovieIndex] = useState(0);

  useEffect(() => {
    getPupularMovies();
  }, []);

  const getPupularMovies = () => {
    GlobalApi.getPupularMovies.then((res) => {
      const result = res.data.results;
      setmovieList(result);
      const randomIndex = Math.floor(Math.random() * result.length);
      setMovieIndex(randomIndex);
      setTimeout(getPupularMovies, 7000);
    });
  };

  return (
    <div>
      <div
        className="absolute h-[85vh] via-transparent to-transparent w-full  mt-[350px] md:mt[300px] px-10 md:px-24"
      >
        <h2 className="text-white text-[22px] lg:text-[28px]">
          Watch Only On Hulu
        </h2>
        <h2 className="text-white text-[40px] lg:text-[50px] font-bold ">
          {movieList[movieIndex]?.original_title}
        </h2>
        <div className="flex gap-5 mt-5">
          <button className="p-2 bg-white text-gray-600 w-[90px] font-md  hover:bg-gray-400 hover:text-white  rounded-md text-[18px] transition-all ease-in-out duration-300">
            PLAY
          </button>
          <button className="bg-transperant border-2 border-white p-2 text-white cursor-pointer hover:border-gray-400 w-[90px] font-md rounded-md text-[18px] transition-all ease-in-out duration-300">
            DETAILS
          </button>
        </div>
      </div>
      <img
        src={IMAGE_BASE_URL + movieList[movieIndex]?.backdrop_path}
        alt=""
        width={1920}
        height={1080}
        className="h-[100vh] w-full object-cover"
      />
    </div>
  );
}


export default Hero