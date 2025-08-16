import React from 'react'
import {useNavigate} from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div> 
        <h1>404 - Page Not Found</h1>
        <br />
        <p>Sorry, the page you are looking for does not exist.</p>
        <br/>

        <button className='go-back-btn' onClick={() => navigate('/')}>Go Back</button>
    </div>
  )
}

export default NotFound