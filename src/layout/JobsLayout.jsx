import React from 'react'
import { Outlet } from 'react-router-dom'

const JobsLayout = () => {
  return (
    <div>
        <h2>Jobs Opening</h2>
        <p>We are looking for talented individuals to join our team.</p>

        <Outlet />
    </div>
  )
}

export default JobsLayout