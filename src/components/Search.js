import React,{useState} from 'react'
import StarRatingComponent from 'react-star-rating-component';
const Search = ({getRate,rate}) => {
    const [name, setName] = useState('');
    const [rating, setRating] = useState(1)
    const onStarClick=(nextValue, prevValue, name) =>{
        getRate(nextValue);
      }
      
     
  return (
    <div>
  <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rate}
          onStarClick={onStarClick}
        />
    </div>
  )
}

export default Search