import React, {useEffect, useState} from 'react';
import './vehicleRating.css';


function VehicleRating({rating}) {
    const [stars, setStars] = useState([]);
    const generateStars = ()=>{
        let stars= []
        if(rating>5 || rating<1){
            return;
        }
        for(let i=0; i<rating; i++){
            stars.push(i);
        }
        return stars;
    };

    useEffect(()=>{
        setStars(generateStars());
    }, []);



  return (
    <div className='stars'>
      {
        stars.map(star => (
        <i key={star} className='bi bi-star-fill'></i>
       ))
      }
    </div>
  );
}

export default VehicleRating;