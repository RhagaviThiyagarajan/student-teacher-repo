import React,{useState} from 'react';
import logo from '../../components/img/logo.png';
import './Sidebar.css';
import   UilSignOutAlt  from '@iconscout/react-unicons/icons/uil-react';
import {SidebarData} from '../../components/DATA/Data';

import   UilBars  from '@iconscout/react-unicons/icons/uil-react';
function Sidebar() {

    const[selected,setSelected]=useState(0)
    const[expanded,setExpanded]=useState(true)
  return (
 
    <div  className="sidebar">
      <div><UilBars/></div>

        {/*logo*/}

        <div className="logo">
            <img src={logo} alt=""/>
            <span>Rhagavi</span>
        </div>
    

<div className="menu">
{SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() =>setSelected(index)}
            >



                <item.icon/>
                <span>
                    {
                        item.heading
                    }
                </span>
                </div>
        );
    })
    }
    <div className="menuItem ">
        <UilSignOutAlt/>
    </div>
    
       
</div>

</div>


  );
 
};

export default Sidebar