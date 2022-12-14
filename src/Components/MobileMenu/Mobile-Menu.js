import { useState, Fragment } from 'react';
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
import NavbarDatas from '../NavbarDatas';
import { NavLink } from 'react-router-dom';
import { padding } from '@mui/system';
import { SwipeableDrawer } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';

export default function MobileMenu() {
  const [open, setOpen] = useState(false)



 
  const list = (anchor) => (

    <List sx={{ width: 250, direction: "rtl" }} className="mobile-color">
      <CloseIcon sx={{marginRight:2,fontSize:50,color:"#3a3a3a"}} onClick={() => setOpen(prev => !prev)}/>
      {NavbarDatas.map((item, index) => (
        <div key={item.id}>
          <ListItem  sx={{ padding: 0 }}  >

            {!item.submenu ? (<ListItemButton><ListItemText primary={item.title} className="mobile-litxt">


              <NavLink style={{ padding: "3px 0", textAlign: "right" }} to={`/${item.link}`}></NavLink>

            </ListItemText>
            </ListItemButton>) : (<Accordion sx={{ width: "100%", direction: "rtl", textAlign: "right" }} className="accordion">
              <ListItemButton className="mobile-li" >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{ width: "100%" }}
                >

                  <NavLink to={`/${item.link}`}>{item.title}</NavLink>
                </AccordionSummary>
              </ListItemButton>
              {item.menus.map(menu => (

                <div key={menu.id}>
                  <ListItemButton>

                    <AccordionDetails  className="mobile-undermenu">

                      <img src={menu.icon} className="mobile-icons" alt="" /> <NavLink to={`/${menu.link}`}>{menu.title}</NavLink>
                    </AccordionDetails>
                  </ListItemButton>
                  <Divider className='devider'/>
                </div>

              ))}
            </Accordion>)}


          </ListItem>
          <Divider className='devider'/>
        </div>
      ))}

    </List>
    
  );

  return (
    <div className='mobile-menu' >
      

        <div className="hamburger-menu" onClick={() => setOpen(prev => !prev)} >
          <div className="hamburger-menu-lines"></div>
        </div>
        

        <SwipeableDrawer
          anchor={"right"}
          open={open}
          onClose={() => setOpen(prev => !prev)}
          sx={{direction:"ltr"}}
          >
          {list("right")}
        </SwipeableDrawer>
         
      




    </div>
  )
}


