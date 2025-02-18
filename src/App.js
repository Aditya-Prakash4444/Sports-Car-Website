import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'boxicons/css/boxicons.min.css';
import { Routes, Route} from 'react-router-dom';

import Banner from './page/Banner';
import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Vehicle from './page/Vehicle';
import VehicleDetail from './page/VehicleDetails';
import Library from './page/Library';
import Services from "./page/Services";
import Contact from "./page/Contact";
import VehicleDetails from './page/VehicleDetails';


export const AppContext = React.createContext();

function App() {
  const [data, setData] = useState([]);
  const [library, setLibrary] = useState([]);


  const fetchData = ()=>{
    fetch('http://localhost:3000/api/vehiclesData.json')
    .then(res=>res.json())
    .then(data=>setData(data))
    .catch(e => console.log(e.message));
  }
  useEffect(()=>{
    fetchData();
    
  }, []);

  return (
    <>
      <AppContext.Provider value={{data, setData, library, setLibrary}}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Banner />} />
          <Route exact path="/vehicles" element={<Vehicle />} />
          <Route exact path='/vehicles/:id' element={<VehicleDetails/>} />
          <Route exact path='/library' element={<Library />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </AppContext.Provider>
    </>
  )
}

export default App;
