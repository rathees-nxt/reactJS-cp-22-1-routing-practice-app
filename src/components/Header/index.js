// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="nav-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="nav-img"
      />
      <h1 className="head">Wave</h1>
    </div>
    <ul className="nav-tab">
      <li className="nav-tab-item">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-tab-item">
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li className="nav-tab-item">
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
