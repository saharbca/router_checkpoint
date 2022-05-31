import React from 'react'
import { useParams } from 'react-router-dom';
import '../Description.css';
import ReactPlayer from "react-player"
const Description = ({movies}) => {
  const params = useParams();
  const moviedes=movies.find(el => el.id==params.id);
  console.log(moviedes);
  console.log(moviedes.description);
  return (
    <div>
      <div className="trailer">
        <ReactPlayer url={moviedes.trailer}/>
      </div>
      <p className="p">
        {moviedes.description}
      </p>

    </div>
   
  )
}

export default Description