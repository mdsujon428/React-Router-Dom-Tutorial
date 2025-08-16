import React from 'react'
import { Outlet } from 'react-router-dom'

const ContactLayout
 = () => {
  return (
    <div>
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out! </p>
        <Outlet />
    </div>
  )
}

export default ContactLayout
