import React from 'react'
import './index.scss'
import {Link} from 'react-router-dom'
import Aymen from '../Assest/image/Aymen.png'
const Logo = () => {
  return (
    <div>
      <Link className='logo' to='/my-app'>
        <img src={Aymen} alt="Software Engineering Student"></img>
      </Link>
    </div>
  )
}

export default Logo
