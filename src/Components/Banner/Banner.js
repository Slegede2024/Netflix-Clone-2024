import React, { useState, useEffect } from 'react'
import axios from "../../utils/axios"
import request from "../../utils/requests"
import "./Banner.css"




const Banner = () => {
    const [movie,setMovie] = useState({});
    useEffect(() => {
        (async () => {
        try {
            const response = await axios.get(request.fetchNetflixOriginals)
            console.log(request)
            setMovie(response.data.results[
                Math.floor(Math.random() * response.data.results.length)
            ]);
        } catch (error) {
            console.log("error",error);
        }
        })();
    }, []);

    function truncate(str,n) {
         return str?.length > n ? str.substr(0, n-1) + '...' : str;
    }
     
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "Cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button play">Play</button>
          <button className="banner__button play">MY List</button>
        </div>
        <h1 className='banner__description'>{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner__fadeBottom" />
    </div>
  );
}


export default Banner
