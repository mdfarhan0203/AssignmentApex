import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const menuItem=[
        {
            path:"/",
            name:"Home",
        },
        {
            path:"/addScenario",
            name:"Add Scenario",
        },
        {
            path:"/allScenario",
            name:"All Scenario",
        },
        {
            path:"/addVehicle",
            name:"Add Vehicle",
        },

    ]
    return (
        <div className="container">
           <div style={{width: "300px"}} className="sidebar">
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           {/* <div className="icon">{item.icon}</div> */}
                           <div className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main className='main-container'>{children}</main>
        </div>
    );
};

export default Sidebar;