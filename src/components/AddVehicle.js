import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import './index.css'

export default function AddVehicle({ addScenarioData, handlerAddVehicle }) {
  const [isValid,setIsValid]=useState(false)
  
  
  //validation 

  const validate = (values) => {
    const errors = {};
    let formIsValid = true
    console.log("values",values.positionX)

    if (!values.positionX || values.positionX> 800 || values.positionX<0) {
      errors.positionX = "Scenario is required";
      formIsValid = false
    }
    // setFormErrors(errors)
    return formIsValid;
  }
  //Direction Data 
  const direction = [
    { direction: "Towards", value: "Towards" },
    { direction: "Backward", value: "Backward" },
    { direction: "Upwards", value: "Upwards" },
    { direction: "Downwards", value: "Downwards" },
  ]

  const [addVehicle, setAddVehicle] = useState({
    senarioList: "",
    vehicleName: "",
    speed: "",
    positionX: "",
    positionY: "",
    direction: ""
  })

  // handler Change
  const handlerChange = (e) => {
    const { name, value } = e.target
    setAddVehicle(preValue => { return { ...preValue, [name]: value } })
  }


  // add Button Clicked
  const addButton = () => {
    if (!validate(addVehicle))
      {console.log("bbvv",addVehicle)
      setIsValid(true)
      }
    else {
      setIsValid(false)
      handlerAddVehicle(addVehicle)
    }
    setAddVehicle({
      senarioList: "",
      vehicleName: "",
      speed: "",
      positionX: "",
      positionY: "",
      direction: ""
    })
  }


  // Reset
  const hadlerReset = () => {
    setAddVehicle({
      senarioList: "",
      vehicleName: "",
      speed: "",
      positionX: "",
      positionY: "",
      direction: ""
    })
  }





  return (
    <div className='add-vehicle'>
      <h1 className='header'>
        Add Vehicle
      </h1>
      <div className='add-vehicle-container'>
        <form className='form-container'>
          <div className='item-grid'>
            <p className='para-add-vehicle'>Scenario List</p>
            <select
              className='selected-add-Vehicle'
              name="senarioList"
              value={addVehicle.senarioList}
              onChange={handlerChange}
            >
              <option value="selecteScenario">Select Scenario</option>
              {addScenarioData && addScenarioData.map((item) => {
                return <option value={item.scenarioName}>{item.scenarioName}</option>
              })}
            </select>
          </div>
          <div>
            <p className='para-add-vehicle'>Vehicle Name</p>
            <input
              className='input-add-vehicle'
              id='vehicle-name'
              placeholder='Vehicle Name'
              name='vehicleName'
              value={addVehicle.vehicleName}
              onChange={handlerChange}
            />
          </div>
          <div>
            <p className='para-add-vehicle'>speed</p>
            <input
              className='input-add-vehicle'
              id='speed'
              placeholder='speed vehicle'
              name='speed'
              value={addVehicle.speed}
              onChange={handlerChange}
            />
          </div>
          <div>
            <p className='para-add-vehicle'>Position X</p>
            <input
              className='input-add-vehicle'
              id='positionX'
              placeholder='position X'
              name='positionX'
              value={addVehicle.positionX}
              onChange={handlerChange}
            />
            {isValid && <p style={{color:"red"}}>Position X should not be Greater than  800 800 or less then 0</p>}

          </div>
          
          <div>
            <p className='para-add-vehicle'>Position Y</p>
            <input
              className='input-add-vehicle'
              id='positionY'
              placeholder='Position Y'
              name='positionY'
              value={addVehicle.positionY}
              onChange={handlerChange}
            />
          </div>
          <div>
            <p className='para-add-vehicle'>Direction</p>
            <select
              className='selected-add-Vehicle'
              name="direction"
              id="direction"
              value={addVehicle.direction}
              onChange={handlerChange}
            >
              <option value="SelectDirection">Select Direction</option>
              {direction.map((item) => {
                return (<option value={item.value}>{item.direction}</option>)
              })}
            </select>
          </div>
        </form>
      </div>

      <div className='btn-container'>
        <button className='addBtn greenBtn' onClick={addButton}>Add</button>
        <button className='addBtn orngeBtn' onClick={hadlerReset}>Reset</button>
        <Link to='/home'><button className='addBtn blueBtn'>Go Back</button></Link>
      </div>
    </div>
  )
}
