import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/about" >About</Link> </li>
            <li><Link to="/services" >Services</Link></li>
            <li> <Link to="/contact_us" >Contact Us</Link></li>
        </ul>
    </nav>
  )
}

export default Nav