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


export default function MobileMenu() {
  const [state, setState] = useState(false)



  const toggleDrawer = (anchor, open) => (event) => {
    console.log(open);
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (

    <List sx={{ width: 250, direction: "rtl" }} className="mobile-color">
      {NavbarDatas.map((item, index) => (
        <>
          <ListItem key={index} sx={{ padding: 0 }}  >

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

                <>
                  <ListItemButton>

                    <AccordionDetails key={menu.id} className="mobile-undermenu">

                      <img src={menu.icon} className="mobile-icons" alt="" /> <NavLink to={`/${menu.link}`}>{menu.title}</NavLink>
                    </AccordionDetails>
                  </ListItemButton>
                  <Divider className='devider'/>
                </>

              ))}
            </Accordion>)}


          </ListItem>
          <Divider className='devider'/>
        </>
      ))}

    </List>
    
  );

  return (
    <div className='mobile-menu' >
      <Fragment key={"right"}  sx={{direction:"ltr"}}>

        <div className="hamburger-menu" onClick={toggleDrawer("right", true)} >
          <div className="hamburger-menu-lines"></div>
        </div>
        

        <SwipeableDrawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          sx={{direction:"ltr"}}
          >
          {list("right")}
        </SwipeableDrawer>
         
      </Fragment>




    </div>
  )
}


