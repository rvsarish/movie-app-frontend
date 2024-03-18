import React from 'react'
import image from "./vikram.jpg"
import "./Movie.css"
import Counter from './Counter'
import { useState } from 'react'    
import IconButton from '@mui/material/IconButton';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import InfoIcon from '@mui/icons-material/Info';
import { Card, CardActions, CardContent } from '@mui/material'
import MovieList from './MovieList'
import { useNavigate } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// import axios from "axios"

export default function Movie({movieTake,getMovies}) {

  const navigate = useNavigate()

    const [show, setShow] = useState(false);

    const deleteMovie = (id) => {
      fetch(`https://65f16b79034bdbecc762702f.mockapi.io/Movie/${id}`,{
        method: "DELETE",
      })
      .then(()=> getMovies())
      .then(() => alert("This Card gets Deleted Now."))
         console.log(id);

    };
  return (
    <Card className='movie-container'>
        <img className='movie-poster' src={movieTake.poster} />
        <CardContent>
        <div className='movie-spec'>
            <h2 className='movie-name'>{movieTake.name}
            <IconButton color="primary" aria-label="add an alarm" onClick={() => setShow(!show)}>
        {show ? <ToggleOnIcon /> : <ToggleOffIcon />}
      </IconButton>
      <IconButton color="primary" aria-label="add an alarm" onClick={() => navigate(`/portal/view/${movieTake._id}`)}>
        <InfoIcon/>
      </IconButton>
            </h2>
            <h3 className='movie-rating'>{movieTake.rating}</h3>
        </div>
        </CardContent>
        {show ? <p className='movie-summary'> {movieTake.summary}
        </p> : null}
        <CardActions>
        <Counter />
        <IconButton 
        sx={{marginLeft: "auto"}}
        aria-label='editMovie'
         onClick={() => navigate(`/portal/edit/${movieTake.id}`)}>
        <EditIcon/>
      </IconButton>

      <IconButton 
        sx={{marginLeft: "auto"}}
        aria-label='delete'
       onClick={() => deleteMovie(movieTake.id)}>
        <DeleteIcon/>
      </IconButton>
        </CardActions>
    </Card>
  )
}
