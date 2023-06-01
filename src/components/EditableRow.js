
const EditableRow = ({handleCancelClick,val,addScenarioData,editId,setAddScenarioData}) => {
  
    const handlerChange=(e)=>{
      const {name,value}=e.target
      let newData=addScenarioData.map((item,index)=>{
        return editId===index ?{...item,[name]:value}:item
      })
      setAddScenarioData(newData)
    }


  return (
    <div className="ediatable-table">
      <table>
      <tr>
        <td>
          <input
            type="number"
            required="required"
            placeholder="Scenario Id..."
            name="scenarioId"
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter an Scenario Name..."
            name="scenarioName"
            value={val.scenarioName}
            onChange={handlerChange}
          ></input>
        </td>
        <td>
          <input
            type="number"
            required="required"
            placeholder="Enter a Scenario Time..."
            name="scenarioTime"
            value={val.scenarioTime}
            onChange={handlerChange}
          ></input>
        </td>
        <td>
          <input
            type="number"
            required="required"
            placeholder="Enter an Number of Vehicle..."
            name="noOfVehicle"
            value={val.noOfVehicle}
            onChange={handlerChange}
          ></input>
        </td>
        <td>
          <button type="button">Save</button>
          <button type="button" onClick={handleCancelClick}>
            Cancel
          </button>
        </td>
      </tr>
      </table>
    </div>
  );
};

export default EditableRow;
