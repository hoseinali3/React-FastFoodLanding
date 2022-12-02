import './Section7.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import burgericon2 from './../../../icons/burger (1).png'
import fastfood10 from './../../../icons/fast-food.png'
import pizzaslice from './../../../icons/pizza-slice.png'
import icecream from './../../../icons/ice-cream.png'

export default function Section7() {
  return (
  
    <div className="sec7-container">

    <div className="box secbox1">
        <img className='img-fluid' src={burgericon2} alt="" />
        <p className='sec7-title'>حمل و نقل رایگان</p>
        <p className='sec7-content'>با خرید محصولات بالای 300 هزار تومان ، ارسال رایگان بگیرید.</p>
       
    </div>
    <div className="box secbox2">
        <img className='img-fluid' src={fastfood10} alt="" />
        <p className='sec7-title'>شعب لافکا</p>
        <p className='sec7-content'>لافکا در تمامی نقاط کشور شعب جامعی دارد و به مشتریان خدمات میدهد.</p>
       
    </div>
    <div className="box secbox3">
        <img className='img-fluid' src={pizzaslice} alt="" />
        <p className='sec7-title'>دستور پخت اصلی</p>
        <p className='sec7-content'>تمامی غذا ها و پیش غذاهای رستوران لافکا عالی و اصلی هستند.</p>
       
    </div>
    <div className="box secbox4">
        <img className='img-fluid' src={icecream} alt="" />
        <p className='sec7-title'>خدمات لافکا</p>
        <p className='sec7-content'>رستوران زنجیره ای لافکا با تمامی خدمه ، آماده ارائه خدمات است.</p>
       
    </div>
    
    </div>

  )
}
