
import React, { useState } from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";

import Chart from 'react-apexcharts';

const Card=(props)=> {

  const[expanded,setExpanded]=useState(false)
  return (
  
<AnimateSharedLayout>
{
  
  expanded?
    (
     
      
      <ExpandedCard param={props} setExpanded={()=>setExpanded(false)}/>
      ):(<CompactCard param={props} setExpanded={()=>setExpanded(true)}/>
    
  )}
</AnimateSharedLayout>
  
  );   
};
//compact card

export  function CompactCard({param,setExpanded})
{
  const Png=param.png;
  return(
    <motion.div className="CompactCard"
    style={{
      background:param.color.backGround,
      boxShadow:param.color.boxShadow,
    }}
    layout="exapndableCard"
    onClick={setExpanded}>


    <div className="radialBar">
      <CircularProgressbar
      value={param.barValue}>
text={`{param.barValue}%`}
        </CircularProgressbar>
        <span>{param.title}</span>
      
    </div>

<div className="detail">
<Png/>
<span>${param.value}</span>
<span>Last 24 hours</span>
    </div>
    </motion.div>
  );
}


//ExpandedCard

function ExpandedCard({param,setExpanded})
{
  const data={
    options:{
      chart:{
        type:"area",
        height:"auto",

      },
      dropShadow:{
        enabled:false,
        enabledOnSeries:undefined,
        top:0,
        left:0,
        blur:3,
        color:"#000",
        opacity:0.35,
      },
      fill:{
colors:["#fff"],
type:"gradient",
      },
      datalabels:{
        enabled:false,
      },
      stroke:
      {
        curve:"smooth",
        colors:["white"],
      },
      tooltip:
      {
        x:
        {
          format:"dd/MM/YY HH:MM",
        },
      },
      grid:
      {
show:true,
      },
      xasis:
      {
        type:"datetime",
        categories:[
          "2022-09-19T00:00:00:000Z",
          "2022-09-19T00:00:00:000Z",
          "2022-09-19T00:00:00:000Z",
          "2022-09-19T00:00:00:000Z",
          "2022-09-19T00:00:00:000Z",
          "2022-09-19T00:00:00:000Z",
          "2022-09-19T00:00:00:000Z",

        ],
      },

        },
      };
    
  
    
  return(
    <motion.div
     className="ExpandedCard" style={{
      background:param.color.backGround,
    boxShadow:param.color.boxShadow,
  }} layoutId='expandableCard'>
    <div style={{alignSelf:"flex-end",cursor:"pointer",
      color:"white"}}>
      <UilTimes onClick={setExpanded}/>
      
    </div>
    <span>{param.title}</span>
    <div className="chartContainer">
      <Chart series={param.series} type="area" options={data.options}/>
    </div>
    <span> Last 24 hours
      </span>
 </motion.div>
  )
}

export default Card

