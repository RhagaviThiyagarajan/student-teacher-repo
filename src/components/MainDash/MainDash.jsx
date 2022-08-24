import React from 'react';
import Cards from '../../components/cards/Cards'
import Table from '../../components/Table/Table'
const MainDash = () => {
  return (
    <div className="MainDash">
        <h1>Dashboard</h1>
        <Cards/>
      
        <Table/>
    </div>
  )
}

export default MainDash
