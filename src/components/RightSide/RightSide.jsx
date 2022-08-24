import React from 'react';
import './RightSide.css';
import Updates from '../../components/Updates/Updates';
import CustomerReview from '../../components/CustomerReview/CustomerReview'
function RightSide () {
  return (
    <div className="RightSide">
        <div>
            <h3>Updates</h3>
            <Updates/>
        </div>
        <div>
            <h3>StudentsReview</h3>
            <CustomerReview/>
        </div>
    </div>
  )
}

export default RightSide







