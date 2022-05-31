import React from 'react'
import ReactPlayer from "react-player"
import { useParams } from 'react-router-dom';
const Trailer = ({movies}) => {
    const params = useParams();
    const moviedes=movies.find(el => el.id==params.id);

    return (
      <div>
       
       <ReactPlayer url={moviedes.trailer}/>
         
      
         

  
      </div>
     
    )
  }

export default Trailer