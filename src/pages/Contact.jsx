import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>Contact</h3>
       <div className='contact-btn'>
         <button onClick={() => navigate('info')}> Contact Info </button>
         <button onClick={() => navigate('form')}> Contact Form </button>
       </div>

    </div>
  )
}

export default Contact