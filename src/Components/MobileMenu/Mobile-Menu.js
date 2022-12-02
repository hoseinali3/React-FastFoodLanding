import {useState,Fragment} from 'react';
import './Mobile-Menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { NavLink } from 'react-router-dom';
import { padding } from '@mui/system';

export default function MobileMenu() {
  const [state,setState] = useState(false)



const toggleDrawer = (anchor, open) => (event) => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
  }

  setState({ ...state, [anchor]: open });
};
const list = (anchor) => (
  <Box
    sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
    role="presentation"
    onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}
  >
   
    
    

    <List>
   {["home","menus","weblog","order","branches","aboutUs","contactUs"].map((item,index) => (
    <>
     <ListItem key={index} style={{padding:"0"}}>
     <ListItemButton>
     <ListItemText primary={item} >

            <NavLink style={{padding:"3px 0",textAlign:"left"}} to={`/${item}`}></NavLink>
     </ListItemText>
             
     </ListItemButton>
     </ListItem>
     <Divider />
    </>
   ))}
          
    </List>
  </Box>
);

    return (
        <div className='mobile-menu' >
           <Fragment key={"left"}>
         
        <div className="hamburger-menu" onClick={toggleDrawer("left", true)} >
        <div className="hamburger-menu-lines"></div>
    </div>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </Fragment>
       


    <nav className="mobile-navbar">
          <ul>
            <li><a href="#">خانه</a></li>
            <li><a href="#">خانه</a></li>
            <li><a href="#">خانه</a></li>
            <li><a href="#">خانه</a></li>
            <li><a href="#">خانه</a></li>
            <li><a href="#">خانه</a></li>
          </ul>
        </nav>
       

        </div>
    )
}


