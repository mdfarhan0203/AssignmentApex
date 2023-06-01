import React, { useEffect, useState } from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdCreate } from "react-icons/md";
import Moving from './Moving';
import './index.css'

export default function Home({ addVehicle, addScenarioData }) {
  const [senarioSelected, setSenarioSelected] = useState(false)
  const [selected, setSelected] = useState([])



  // handler Change
  const handlerChange = (e) => {
    let selectedScenario = e.target.value
    let scenarioData = addVehicle.filter(item => item.senarioList === selectedScenario)
    setSelected(scenarioData)
    setSenarioSelected(true)
  }


  //scenario List change
  useEffect(() => {
  }, [selected])


  return (
    <div>
      <div className='home-container'>
        <h1 className='header-home'> Scenario</h1>
      </div>
      <div  className='home-dropdown'>
        <p className='para-home'>Scenario Name</p>
        <select 
        className='selected-home'
        name="senarioList" 
        value={addScenarioData.scenarioName} 
        onChange={handlerChange}>
        <option value="selecteScenario">Select Scenario</option>
        {addScenarioData && addScenarioData.map((item) =>
        <option value={item.scenarioName}>{item.scenarioName}</option>
        )}
        </select>
        </div>

      {/* table */}
      <div className='home-table'>
        <table>
          <tr className='thead-home'>
            <th>Vehicle Id</th>
            <th>Vehicle Name</th>
            <th>Position X</th>
            <th>Position Y</th>
            <th>Speed</th>
            <th>Direction</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>

          {senarioSelected && selected && selected.map((val, key) => {
            return (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{val.vehicleName}</td>
                <td>{val.positionX}</td>
                <td>{val.positionY}</td>
                <td>{val.speed}</td>
                <td>{val.direction}</td>
                <td><MdCreate /></td>
                <td><RiDeleteBin6Fill /></td>
              </tr>
            )
          })}
        </table>
      </div>

      <div className='home-container'>
        <button className='btn-home greenBtn'>Start Simulation</button>
        <button className='btn-home blueBtn '>Stop Simulation</button>
      </div>
      <div className='board'>
        <Moving senarioSelected={senarioSelected} selected={selected} />
      </div>
    </div>
  )
}
