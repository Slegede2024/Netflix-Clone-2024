import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "../../../utils/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({ title, fetchurl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrls, setTrailerUrls] = useState({});
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(fetchurl);
        setMovies(request.data.results);
      } catch (error) {
        console.log("Error fetching movies:", error);  
      }
    })();
  }, [fetchurl]);

  const handleClick = async (movie) => {
    if (trailerUrls[movie.id]) {
      setTrailerUrls((prev) => {
        const updatedTrailers = { ...prev };
        delete updatedTrailers[movie.id];
        return updatedTrailers;
      });
    } else {
      try {
        const url = await movieTrailer(
          movie?.name || movie?.title || movie?.original_name || ""
        );
        if (url) {
          const urlParams = new URLSearchParams(new URL(url).search);
          const videoId = urlParams.get("v");

          setTrailerUrls((prev) => ({
            ...prev,
            [movie.id]: videoId,
          }));
        } else {
          console.log("Trailer not found for:", movie.name || movie.title);
        }
      } catch (error) {
        console.log("Error fetching trailer:", error);
      }
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies?.map((movie) => (
          <div key={movie.id} className="row__posterContainer">
            <img
              onClick={() => handleClick(movie)}
              src={`${base_url}${
                isLargeRow
                  ? movie.poster_path
                  : movie.backdrop_path ||
                    "https://image.tmdb.org/t/p/original/721p2lNSGp2iSlUUukZwCzEKrnn.jpg"
              }`}
              alt={movie.name || movie.title}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            />
            {trailerUrls[movie.id] && (
              <YouTube videoId={trailerUrls[movie.id]} opts={opts} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;
