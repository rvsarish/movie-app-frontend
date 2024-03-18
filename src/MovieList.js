import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import "./App.css"
export default function MovieList() {

    const [movie,setMovie]=useState([]);
    const getMovies=()=>{
        // fetch("https://65f16b99034bdbecc762724b.mockapi.io/movie" , {

        fetch("http://localhost:4000/get" , {
                    method:"GET",
        })
        .then((data)=>data.json())
        .then((mvs)=>setMovie(mvs));
    }
    useEffect(()=>{
        getMovies();
    },[]
    );
    console.log(movie);
  return (
    <div className='movie-list'>
        {movie.map((list,index)=>(
            <div key={index}>
                <Movie movieTake={list} />
            </div>
        ))}
    </div>
  )
}