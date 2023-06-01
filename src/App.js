import React,{useState}  from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/SideBar';
import Home from './components/Home'
import AddScenario from './components/AddScenario'
import AddVehicle from './components/AddVehicle'
import AllScenario from './components/AllScenario'
import NoPage from './components/NoPage';

const App = () => {
 const [addScenarioData,setAddScenarioData]=useState([])
  const [addVehicle,setAddVehicle]=useState([])
  //add Senario 
  const handlerAddScenario=(newItem)=>{
    setAddScenarioData(preValue => {
      return [...preValue, newItem]
    })
  }

  // on Delete
  const HandlerDeleted=(id)=> {
    console.log("clickied",id)
    setAddScenarioData(preValue=>{
      return preValue.filter((item,index)=>index!==id)
    })
  } 

   //add vehicle Deatails
   const handlerAddVehicle=(newValue)=>{
    setAddVehicle(preValue => {
      return [...preValue, newValue]
    })
   }

  //  Delete Alll
  const handlerDeleteAll =()=>{
    setAddScenarioData([])
  }


  return (
    <BrowserRouter>
    <Sidebar>
      <Routes>
          <Route path="/addScenario" element={<AddScenario  handlerAddScenario={handlerAddScenario} />} />
          <Route path="/allScenario" element={<AllScenario  addScenarioData={addScenarioData} HandlerDeleted={HandlerDeleted}  handlerDeleteAll={handlerDeleteAll} setAddScenarioData={setAddScenarioData} />} />
          <Route path="/addVehicle" element={<AddVehicle addScenarioData={addScenarioData} handlerAddVehicle={handlerAddVehicle} />} />
          <Route path="/" element={<Home addVehicle={addVehicle} addScenarioData={addScenarioData} />} />
          <Route path="/home" element={<Home addVehicle={addVehicle} addScenarioData={addScenarioData}/>} />
          <Route path="*" element={<NoPage />} />
      </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
