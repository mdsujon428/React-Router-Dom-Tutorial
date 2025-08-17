import {Route, createBrowserRouter, 
  createRoutesFromElements,RouterProvider} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Jobs,{JobsLoader}  from './pages/Jobs'
import RootLayout from './layout/RootLayout' 
import JobsLayout from './layout/JobsLayout' 
import ContactLayout from './layout/ContactLayout'
import ContactInfo from './components/ContactInfo'
import ContactForm from './components/ContactForm'
import NotFound from './components/NotFound'
import JobDetail,{JobDetailLoader} from './components/JobDetail'
import Error from './components/Error'



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
        <Route path="jobs" element={<JobsLayout />} >
          {/* Add other routes here */}
          <Route index element={<Jobs/>} loader={JobsLoader} />
          <Route path=":id" element={<JobDetail />} 
          loader={JobDetailLoader} errorElement={<Error />} />
          {/* Catch-all route for 404 Not Found */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )
  return ( <RouterProvider router={router}/> )
}

export default App
