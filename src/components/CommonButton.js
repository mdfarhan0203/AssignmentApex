import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

export default function CommonButton({ handlerAddScenario, setData, data,setIsValid }) {
    // const [formErrors, setFormErrors] = useState({});

    const validate = (values) => {
        const errors = {};
        let formIsValid = true

        if (!values.scenarioTime) {
            errors.scenarioTime = "Scenario is required";
            formIsValid = false
        }
        // setFormErrors(errors)
        return formIsValid;
    }

    const handlerAdd = () => {
        if (!validate(data)) 
            setIsValid(true)
        else {
            setIsValid(false)
            handlerAddScenario(data)
        }
        setData({
            scenarioName: '',
            scenarioTime: '',
        })
    }
  
    console.log("data><><><>",data)
    // Reset Button 
    const handlerReset = () => {
        setData({
            scenarioName: '',
            scenarioTime: '',
        })
    }

    return (
        <div className='btn-container'>
            <button className='btn greenBtn' onClick={handlerAdd}>Add</button>
            <button className='btn orngeBtn' onClick={handlerReset}>Reset</button>
            <Link to='/'><button className='btn blueBtn'>Go Back</button></Link>
        </div>
    )
}
