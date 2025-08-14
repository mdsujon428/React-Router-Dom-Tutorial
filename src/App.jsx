import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Route, createBrowserRouter, 
  createRoutesFromElements,RouterProvider} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import RootLayout from './layout/RootLayout' 

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home />}/>
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  )
  console.log(router)
  return ( <RouterProvider router={router}/> )
}

export default App
