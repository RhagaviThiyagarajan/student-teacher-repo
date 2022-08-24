import React from 'react';
import './Updates.css';
import { UpdatesData } from '../DATA/Data';

function Updates() {
  return (
    <div className="Updates">
        {UpdatesData.map((update)=>{
            return(
                <div className="update">
                    <img src={update.img} alt="profile"/>
                    <div className="msg">
                        
                        <div style={{marginBottom:'0.5rem'}}>
                            <span>{update.name}</span>
                            <div className="update-msg">{update.msg}</div>
                        </div>
                   
                        <span>{update.time}</span>
                    </div>
                    </div>
                   

            );
        })}
    </div>
  );
};

export default Updates