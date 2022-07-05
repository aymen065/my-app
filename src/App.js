//import { faBuromobelexperte } from '@fortawesome/free-brands-svg-icons';
import './App.scss';
import Layout from './components/Layout';
import Home from './components/Home';
import {Routes , Route} from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
      <Routes>
        <Route path="/my-app" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/my-app/about/" element={<About/>}/>
        <Route path="/my-app/contact/" element={<Contact/>}/>
        <Route path="/my-app/portfolio/" element={<Portfolio />} />
       </Route> 
       
    </Routes> 
    </>
  );
}

export default App;
