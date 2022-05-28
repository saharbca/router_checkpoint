import React  from "react-bootstrap";
import MovieCard from './MovieCard'

const MovieList = ({ movies }) => {
  return (
      <div >
          {movies.map(mv => <MovieCard movie={mv}/>)}
      </div>
  )
}


export default MovieList