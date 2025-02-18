import React, {useContext} from 'react';
import { AppContext } from '../App';
import './vehicle.css';
import bgImg from '../image/vehiclebg.jpg';
import PageTitle from '../components/PageTitle';
import VehicleCard from '../components/VehicleCard';



function Vehicle() {
  const {data: cars, setData: setCars} = useContext(AppContext);
  return (
    <div id='vehicle' className='page vehicles'>
      <img src={bgImg} alt="" className="img-fluid page-img" />

      <div className='container'>
        <PageTitle title='Vehicles Catelogue' subtitle='Choose your dream car' />
        <div className='row'>
          {cars && cars.length>0 && cars.map(car => 
            <VehicleCard key={car._id} car={car}/>
          )}
        </div>
      </div>
    </div>
  )
}

export default Vehicle;