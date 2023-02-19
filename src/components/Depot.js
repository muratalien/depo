import React from 'react'

function Depot(props) {
  return (
    <div className='col-4 mb-3'>
         <div className='depot-img'>
            <img src={props.img} />
        </div>
        <div className='depot-time mt-4'>
            <p>{props.time}</p>
        </div>
        <div className='depot-header'>
            <h6>{props.header}</h6>
        </div>
        <div className='depot-text'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque</p>
        </div>
        <div className='depot-more'>
            <p>Learn More -- </p>
        </div>
    </div>
  )
}

export default Depot