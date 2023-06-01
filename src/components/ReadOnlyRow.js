import React from "react";
import { Link } from "react-router-dom";
import { BsPlusCircle } from "react-icons/bs";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdCreate } from "react-icons/md";

const ReadOnlyRow = ({ index, val,HandlerDeleted,handleEditClick }) => {
  const { scenarioName, scenarioTime} = val
  let noOfVecicle = 1


  return (
    <tr>
      <td>{index + 1}</td>
      <td>{scenarioName}</td>
      <td>{scenarioTime +'s'}</td>
      <td>{noOfVecicle}</td>
      <Link to='/addVehicle'><td><BsPlusCircle  /></td></Link>
      <td><MdCreate  onClick={(event) => handleEditClick(index)}/></td>
      <td><RiDeleteBin6Fill onClick={()=>HandlerDeleted(index)} /></td>
    </tr>
  );
};

export default ReadOnlyRow;
