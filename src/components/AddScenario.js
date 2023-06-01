import React, { useState } from 'react'
import CommonButton from './CommonButton'
import './index.css'



export default function AddScenario({ handlerAddScenario }) {
  const [isValid,setIsValid]=useState(false)
  const [data, setData] = useState({
    scenarioName: "",
    scenarioTime: "",
  })

  

  const handleChange = (e) => {
    const { name, value } = e.target
    setData(preValue => {
      return { ...preValue, [name]: value }
    })
  }

  return (
    <div className='add-scenario'>
      <div>
        <h1>Add Scenario</h1>
      </div>
      <div className='container'>
        <div className='input-data'>
          <p className='para'>Scenario Name</p>
          <input
            className='input-field'
            placeholder='Test Scenario'
            type='text'
            name='scenarioName'
            onChange={handleChange}
            value={data.scenarioName}
          />
        </div>
        <div className='input-data'>
          <p className='para'>Scenario Time (Second)</p>
          <input
            className='input-field'
            type='number'
            name='scenarioTime'
            value={data.scenarioTime}
            onChange={handleChange}
            placeholder='Time'
            requireds
          />
       {isValid && <p style={{color:"red"}}>Scenario is required</p>} 
        </div>
      
      </div>
     


      {/* common Button */}
      <CommonButton 
        handlerAddScenario={handlerAddScenario} 
        setData={setData} 
        data={data} 
        setIsValid={setIsValid}
      />

    </div>
  )
}
