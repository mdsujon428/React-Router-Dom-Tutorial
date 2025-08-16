import {Route, createBrowserRouter, 
  createRoutesFromElements,RouterProvider} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import RootLayout from './layout/RootLayout' 
import ContactLayout from './layout/ContactLayout'
import ContactInfo from './components/ContactInfo'
import ContactForm from './components/ContactForm'
import NotFound from './components/NotFound'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home />}/>
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<ContactLayout />} > 
          <Route index element={<Contact />} />
          <Route path="info" element={<ContactInfo />} />
          <Route path="form" element={<ContactForm />} /> 
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )
  console.log(router)
  return ( <RouterProvider router={router}/> )
}

export default App
