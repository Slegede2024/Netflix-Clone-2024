import React from 'react'
import "./RowList.css"
import Row from '../Row/Row'
import requests from '../../../utils/requests';

const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchurl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchurl={requests.fetchTrending} />
      <Row title="Top Rated" fetchurl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchurl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchurl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchurl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchurl={requests.fetchRomanceMovies} />
      <Row title="Tv Shows" fetchurl={requests.fetchTvShow} />
      <Row title="Documentaries" fetchurl={requests.fetchDocmentaries} />
    </>
  );
}

export default RowList
