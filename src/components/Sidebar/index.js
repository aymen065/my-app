import './index.scss'
import { NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faUser , faHome , faEnvelope , faSuitcase} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin , faGithub} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className='nav-bar'>
      <nav>
        <NavLink exact="true" activeclassname="active" to='/my-app' className='Home-Link'> 
            <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
        </NavLink>
        <NavLink exact="true" activeclassname="active" to='/my-app/about' className='about-Link'> 
            <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
        </NavLink>
        <NavLink activeclassname="active" className="portfolio-link" to="/my-app/portfolio">
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" to='/my-app/contact' className='contact-Link'> 
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
        </NavLink>
      </nav>
      <ul>
        <li>
          <a exact="true" activeclassname="active" rel="noreferrer" href='https://www.linkedin.com/in/aymen-chaabani-0b9b12229/' className='linkedin-Link' target="_blank">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
          </a>
        </li>
        <li>
          <a rel="noreferrer" href='https://github.com/aymen065' className='github-Link' target="_blank">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
          </a>
        </li>
        
      </ul>
    </div>
  )
}

export default Sidebar
