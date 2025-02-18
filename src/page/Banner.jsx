import React, {useContext, useState} from 'react';
import './banner.css'; 
import { AppContext } from '../App';
import SlideBtn from '../components/SlideBtn';
import CircleBar from '../components/CircleBar';
import { Link } from 'react-router-dom';


function Banner() {
  const {data: cars, setData: setCars} = useContext(AppContext);
  const [video, setVideo] = useState(false);

  const toggleVideo=()=>{
    setVideo(!video);
  }

  const handleSlideChange = ind =>{
    if(ind >= 1){
      ind = -1;
    }

    setCars(cars.map((car, index)=>{
      car.active=false;
      if(index === ind+1){
        car.active=true;
      }
      return car;  
    }));
  };

  return (
    <div className='banner'>
      {cars && cars.length > 0 && cars.slice(0, 2).map((car, index) => (
        <div key={car._id} className={`slide ${car.active ?  'active' : undefined}`}>
          <div className="container-fluid">
            <div className="row banner-top">
              <div className='col-lg-4 p-0 banner-top-left'>
                <div className='banner-title'>
                  <h1>Get Your Dream {car.make}</h1>
                  <span className='slide-number'>0{car._id}</span>
                </div>
                <SlideBtn index={index} slideChange={handleSlideChange} />
              </div>
              <div className='col-lg-8 p-0 banner-top-right'>
                <img 
                src={car.bannerImg} 
                alt="" 
                className={`img-fluid ${video? undefined: 'active'}`}
                >
                </img>
                <video 
                className={`banner-video ${video? 'active': undefined}`}
                src={car.video} 
                autoPlay loop muted>
                </video>
                <div className='car-breif'>
                  <div className='car-intro'>
                    <CircleBar 
                    name="HP" 
                    number={car.power}
                    color="#FFFF00"
                    />
                    <CircleBar 
                    name="Engine" 
                    number={car.engine}
                    color="#008080"
                    />
                    <CircleBar 
                    name="New" 
                    number={car.new}
                    color="	#800080"
                    />
                  </div>
                  <div className='car-nav'>
                    <li>
                      <Link to={`/vehicles/${car._id}`}>
                        Details <i class="bi bi-arrow-right-short"></i>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={toggleVideo}>
                        {video ? 'Image' : 'Video'}{''}
                        <i class="bi bi-arrow-right-short"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to='/vehicle'>
                        More Vehicles {' '}
                        <i class="bi bi-arrow-right-short"></i>
                      </Link>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="row banner-bottom">
              <div className='col-lg-4 p-0'>
                <div className='banner-img'>
                  <img src={car.leftImg} alt="" className='img-fluid'></img>
                </div>
              </div>
              <div className='col-lg-5 p-0'>
                <div className='car-description'>
                  <h2>{car.title}</h2>
                  <div className='car-feature'>
                    <p>{car.description}</p>
                    <Link to={`/vehicles/${car._id}`} 
                    className='detail-link text-center'>
                      Explore <i class="bi bi-arrow-right-short"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 p-0'>
                <img src={car.rightImg} alt="" className='img-fluid'></img>
              </div>
            </div>
          </div>
        </div>
      ))}
      
    
    </div>
  );
}

export default Banner;
