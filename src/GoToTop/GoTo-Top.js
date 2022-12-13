
import './GoTo-Top.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import downArrow from "./../icons/down-arrow.png"
import { useState } from 'react';
export default function GoToTop() {
  let [goTop,setGoTop] = useState(false)
    window.onscroll = event => {
        
        if (Math.round(event.path[1].pageYOffset) > 900){
          setGoTop(true)
        } else {
          setGoTop(false)
        }

    }

    const goTopHandler = (e) =>{

      window.scrollTo(0,0)
    }

  return (
    <div className={goTop ? 'gototop active' : 'gototop'} onClick={goTopHandler}>
        <img className='img-fluid' src={downArrow} alt="" />
    </div>
  )
}
