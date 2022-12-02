import './Section3.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import PizzaBox from './PizzaBox'
export default function Section3() {
  const pizzaArray = [
    {id:1,name:'پیتزا توسکانی', pic:'image/new-pizza10-2-300x300.jpg', count:2},
    {id:2,name:'پیتزا مارگاریتا', pic:'image/new-pizza1-2-300x300.jpg', count:2},
    {id:3, name:'پیتزا گوشت سافاری', pic:'image/new-pizza4-2-300x300.jpg', count:2},
    {id:4, name:'پیتزا پپرونی' ,pic:'image/new-pizza2-2-300x300.jpg', count:1},
  
  ]
  return (
    <div className='sec3-container'>
    <div className="sec3-title">
        <h3>ایتالیایی خوشمزه</h3>
        <span>با استایل معطر ، پیتزاهای عالی ما
جایی هستند که خلاقیت سرآشپزهای پیتزای ما می درخشد.</span>
    </div>
    <div className="pizza-box-container">
    {
  pizzaArray.map(pizza =>(
    <PizzaBox key={pizza.id} {...pizza} />
  ))
}

    
    </div>
</div>
  )
}
