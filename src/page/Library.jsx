import React, { useContext } from 'react';
import './library.css';
import PageTitle from '../components/PageTitle';
import bgImg from '../image/vehiclebg.jpg';
import { AppContext } from '../App';
import VehicleCard from '../components/VehicleCard'; 
import { Link } from 'react-router-dom';

function Library() {
  const { library: cars } = useContext(AppContext);
  return (
    <div id='library' className='page library'>
      <img src={bgImg} alt="" className='img-fluid page-img' />
      <div className='container'>
        <PageTitle 
          title="Vehicle Library"
          subtitle="Explore the world of horses"
        />
        <div className='row'>
          {
            cars && cars.length === 0 ? (
              <div className='text-center'>
                <h3 className='empty'>You have no collection</h3>
                <Link className="browse" to='/vehicles'>
                  Browse Vehicles
                </Link>
              </div>
            ) : (
              cars.map(car => <VehicleCard key={car._id} car={car} />)
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Library;