import './Section5.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import pizzaimg1 from './../../../image/new-pizza10-2-300x300.jpg'
import pizzaimg2 from './../../../image/new-pizza1-2-300x300.jpg'
import pizzaimg3 from './../../../image/new-pizza4-2-300x300.jpg'
import pizzaimg4 from './../../../image/new-pizza2-2-300x300.jpg'
import pizzaimg5 from './../../../image/new-pizza6-2-300x300.jpg'
import pizzaimg6 from './../../../image/new-pizza9-2-300x300.jpg'
import pizzaimg7 from './../../../image/new-pizza7-2-300x300.jpg'
import pizzaimg8 from './../../../image/new-pizza10-2-300x300.jpg'


import PizzaBox from '../Section3/PizzaBox'
export default function Section5() {
  const pizzaArray = [
    {id:1,name:'پیتزا توسکانی', pic:pizzaimg1, count:2},
    {id:2,name:'پیتزا مارگاریتا', pic:pizzaimg2, count:2},
    {id:3, name:'پیتزا گوشت سافاری', pic:pizzaimg3, count:2},
    {id:4, name:'پیتزا پپرونی' ,pic:pizzaimg4, count:1},
    {id:5, name:'پیتزا گوشت و قارچ بیکن', pic:pizzaimg5, count:2},
    { id:6,name:'پیتزا آماتریسیانا', pic:pizzaimg6, count:2},
    { id:7,name:'پیتزا ناپولتانا', pic:pizzaimg7, count:1},
    { id:8,name:'پیتزا فانگی', pic:pizzaimg8, count:2}
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
