import React from 'react';
import { cardsData } from '../DATA/Data';
import './Cards.css'
import Card from '../../components/Card/Card'


function Cards() {
  return (
    <div className="Cards">
       {
       cardsData.map((card,id)=>
       
   {
    return(
        <div className="parentContainer" key={id}>
<Card title={card.title}
color={card.color}
barValue={card.barValue}
value={card.value}
png={card.png}
series={card.series}/>
        </div>
    );
   }  )
}


    </div>
  );
};

export default Cards