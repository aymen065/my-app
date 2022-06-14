import { useEffect, useState } from 'react'
import './index.scss'
import { Link} from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a','y','m','e','n']
    const jobArray = ['S','o','f','t','w','a','r','e',' ','E','n','g','i','n','e','e','r','i','n','g',' ','S','t','u','d','e','n','t']
    useEffect(() => {
      const timer = setTimeout(() => {
          setLetterClass('text-animate-hover');
      }, 4000);

      return () => {
          clearTimeout(timer);
      }
  }); 
    
    
    return (
      <>
    <div className="container home-page">

     <div className='text-zone'>
        <h1>
            <span className={`${letterClass} _11`}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br/>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            &nbsp;
        <AnimatedLetters letterClass={letterClass}
        strArray={nameArray}
        idx={15}
        />
        <br/>
        <AnimatedLetters letterClass={letterClass}
        strArray={jobArray}
        idx={20}
        />
        </h1>
        <h2>fullstack Developer</h2>
        <Link to="/my-app/contact" className='flat-button'>Contact me</Link>

     </div>
     
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Home
