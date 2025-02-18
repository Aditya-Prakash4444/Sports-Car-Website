import React, {useContext} from 'react';
import './vehicleCard.css';
import { Link } from 'react-router-dom';
import VehicleRating from './VehicleRating';
import { AppContext } from '../App';

function VehicleCard({car}) {
    const {library, setLibrary} = useContext(AppContext);
    
    const handleAddToLibrary = (car) => {
        setLibrary([...library, car]);
    }

    const handleRemoveFromLibrary = (car) => {
        setLibrary(library.filter(item => item._id !== car._id));
    }

  return (
    <div className='col-lg-4 col-md-6'>
        <div className="vehicle">
            <div className="vehicle-image">
                <img src={car.bannerImg} alt="" className="img-fluid" />
            </div>
            <h3>
                <Link to={`/vehicles/${car._id}`}>
                    {car.title}
                </Link>
            </h3>
            <VehicleRating rating={car.rating} />
            <p>{car.description.substring(0,30)}...</p>
            <span className='price'> ${car.price && car.price.toLocaleString('en-US')}</span>
            <div className="buttons">
                <Link className={`like ${library.includes(car) ? 'active' : undefined}`}
                onClick={library.includes(car)
                ? ()=>handleRemoveFromLibrary(car)
                : ()=>handleAddToLibrary(car)
                }
                >
                    Like <i className="bi bi-heart-fill"></i>
                </Link>
                <Link to={`/vehicles/${car._id}`} className='details'>
                    Detail <i className="bi bi-plus-lg"></i>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default VehicleCard;