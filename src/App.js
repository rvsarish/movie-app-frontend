import './App.css';
import AddMovie from './AddMovie';
import Register from './Register';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Portal from './Portal';
import NotFound from './NotFound';
import Home from './Home';
import Movie from './Movie';
import MovieList from './MovieList';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import { Paper } from '@mui/material';
import MovieDetail from './MovieDetail';
import EditMovie from './EditMovies';


function App() {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <div className="App">
       <ThemeProvider theme={darkTheme}>
        <Paper style={{minHeight:"100vh",borderRadius:"0%"}}elevation={9}>
        
    <Routes>
     <Route path='/' element={<Login />}/>
     
     <Route path='/register' element={<Register />}/>
     <Route path='/movie' element={<Movie />}/>
     <Route path='/portal' 
     element={<Portal mode={mode} setMode={setMode} />}>
        <Route path="addmovie" element={<AddMovie />}/>
        <Route path='home' element={<Home />}/>
        <Route path="movie" element={<MovieList />}/>
        <Route path="view/:id" element={<MovieDetail />}/>
        <Route path="edit/:id" element={<EditMovie />}/>
     </Route> 
     <Route path="*" element={<NotFound />}/>
     </Routes>
     </Paper>
     </ThemeProvider>
    </div>
  );
}

export default App;
