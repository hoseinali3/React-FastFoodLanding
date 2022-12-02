
import './App.css';
import Navbar1 from './Components/Navbar/Navbar1';

import FooterBox from './Components/Footer-Box/Footer-Box';
import MobileMenu from './Components/MobileMenu/Mobile-Menu';
import GoToTop from './GoToTop/GoTo-Top';
import Example from './Example/Example';
import { useRoutes } from 'react-router-dom';
import Routes from './Routes'

function App() {


  const router = useRoutes(Routes)




  return (
    <div className="App">
    <Navbar1></Navbar1>
    
    
    <MobileMenu></MobileMenu>
    {router}
    <FooterBox></FooterBox>
    <GoToTop></GoToTop>
   
    </div>
  )
}

export default App;
