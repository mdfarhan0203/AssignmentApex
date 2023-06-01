import React, { useState, Fragment, useEffect } from 'react'
import { Link } from "react-router-dom";
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';


export default function AllScenario(props) {
  const { addScenarioData, HandlerDeleted, handlerDeleteAll, setAddScenarioData } = props
  const [addFormData, setAddFormData] = useState({
    scenarioName: "",
    scenarioTime: "",
    noOfVecile: "",
  })

  const [editId, setEditId] = useState(null)

  const HandlerFormChange = (e) => {
    const { name, value } = e.target
    setAddFormData(preValue => {
      return { ...preValue, [name]: value }
    })

  }

  const [editFormData, setEditFormData] = useState({
    scenarioName: "",
    scenarioTime: "",
    noOfVecile: ""
  });



  const handleEditClick = (index) => {
    console.log("idddd", index)
    setEditId(index)
  };

  const handleCancelClick = () => {
    setEditId(null);
  };


  return (
    <div className='all-Scenario'>
      <div className='all-scenario-header'>
        <h1 className='all-head'>All Scenario</h1>
        <div className='btn-all-scenario'>
          <Link to='/addScenario'><button className='button blueBtn'>New Scenario</button></Link>
          <Link to='/addVehicle'><button className='button greenBtn'>Add Vehicles</button></Link>
          <button className='button orngeBtn' onClick={handlerDeleteAll}>Delete All</button>
        </div>
      </div>

      <div className='table-all-Scenario'>
        <table>
          <thead className='header-All-scenario'>
            <th>Scenario Id</th>
            <th>Scenario Name</th>
            <th>Scenario Time</th>
            <th>Number of Vehicles</th>
            <th>Add Vecicle</th>
            <th>Edit</th>
            <th>Add Vehicle</th>
          </thead>
          <tbody>
            {addScenarioData && addScenarioData.map((val, index) => {
              return (
                <Fragment>
                  {editId === index ?
                    (
                      <EditableRow
                        editFormData={editFormData}
                        handleCancelClick={handleCancelClick}
                        val={val}
                        setAddFormData={setAddFormData}
                        addScenarioData={addScenarioData}
                        editId={editId}
                        setAddScenarioData={setAddScenarioData} />
                    )
                    :
                    (
                      <ReadOnlyRow
                        index={index}
                        val={val}
                        HandlerDeleted={HandlerDeleted}
                        handleEditClick={handleEditClick} />
                        )
                        
                        }
                </Fragment>)
            })}
          </tbody>
        </table>
      </div>

    </div>
  )
}
