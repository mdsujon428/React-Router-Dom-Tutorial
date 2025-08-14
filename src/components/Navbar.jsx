import { NavLink,useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
        <nav className='navbar'>
            <img src="" alt="" width="130"/>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <button onClick={() => navigate("/contact")}> Get Started </button>
        </nav>
  )
}

export default Navbar