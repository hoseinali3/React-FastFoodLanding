import './Section5.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import PizzaBox from '../Section3/PizzaBox'
export default function Section5() {
  const pizzaArray = [
    {id:1,name:'پیتزا توسکانی', pic:'image/new-pizza10-2-300x300.jpg', count:2},
    {id:2,name:'پیتزا مارگاریتا', pic:'image/new-pizza1-2-300x300.jpg', count:2},
    {id:3, name:'پیتزا گوشت سافاری', pic:'image/new-pizza4-2-300x300.jpg', count:2},
    {id:4, name:'پیتزا پپرونی' ,pic:'image/new-pizza2-2-300x300.jpg', count:1},
    {id:5, name:'پیتزا گوشت و قارچ بیکن', pic:'image/new-pizza6-2-300x300.jpg', count:2},
    { id:6,name:'پیتزا آماتریسیانا', pic:'image/new-pizza9-2-300x300.jpg', count:2},
    { id:7,name:'پیتزا ناپولتانا', pic:'image/new-pizza7-2-300x300.jpg', count:1},
    { id:8,name:'پیتزا فانگی', pic:'image/new-pizza10-2-300x300.jpg', count:2}
  ]
  return (
  <div className="sec5-container">

    
{
  pizzaArray.map(pizza =>(
    <PizzaBox key={pizza.id} {...pizza} />
    ))
}
    </div>
    

  )
}
