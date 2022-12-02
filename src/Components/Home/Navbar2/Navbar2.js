import './Navbar2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import arrowdown from './../../../icons/down-arrow.png'
import pizzaslice from './../../../icons/pizza-slice.png'
import pizzarost from './../../../image/menu-banner-deep.jpg'
import pizzayounani from './../../../image/menu-banner-thin.jpg'
import pizzachano from './../../../image/menu-banner-slice.jpg'
import burgericon from './../../../icons/burger.png'
import burgerangus from './../../../image/menu-banner-angus.jpg'
import burgerpaleo from './../../../image/menu-banner-paleo.jpg'
import burgeregster from './../../../image/menu-banner-egster.jpg'
import sandwichicon from './../../../icons/sandwich.png'
import fastfoodicon1 from './../../../icons/fast-food (1).png'
import breakfasticon from './../../../icons/english-breakfast.png'
import cheeseicon from './../../../icons/cheese (1).png'
import fastfoodicon2 from './../../../icons/fast-food.png'
import cravingbanner from './../../../image/menu-banner-craving1.jpg'
import fastfoodicon3 from './../../../icons/fast-food (2).png'
import chickenbucket from './../../../icons/chicken-bucket.png'
import fastfoodicon4 from './../../../icons/fast-food (3).png'
import friedpotatoes from './../../../icons/fried-potatoes.png'
import bubbletea from './../../../icons/bubble-tea.png'
import icecream from './../../../icons/ice-cream.png'





export default function Navbar2() {
   
    return (
        <nav className='navbar2'>
            <ul>

                <li className='li-pizza'><div className="opacity-menu"><img src={pizzaslice} alt="" /><a href="#">پیتزا</a> <img src={arrowdown} className='down-arrow' alt="" /></div><span className='tree-style'>سبک متفاوت</span>
                <ul className='Undermenu'>
                    <li ><a href="#"><img src={pizzarost} alt="" /><h5>پیتزا رست بیف</h5></a></li>
                    <li ><a href="#"><img src={pizzayounani} alt="" /><h5>پیتزا یونانی</h5></a></li>
                    <li ><a href="#"><img src={pizzachano} alt="" /><h5>پیتزا چانو</h5></a></li>
                    <li ><a href="#"><h4>درباره پیتزا</h4></a><p className='sub-content'>با سبکی مدرن تر ، پیتزا های لذیذ ما جایی هستند که خلاقیت سرآشپزهای پیتزا ما می درخشد. <br />
هر پیتزا موجود در لافکا را می توان با پوسته پوسته پوسته پوسته یا 100٪ پوسته غلات و حتی خمیر بدون گلوتن دوستانه وگان تهیه کرد.</p><button className='pizza-Btn'>پیتزای خود را سفارش دهید</button></li>
                </ul>
                </li>
                <li><div className="opacity-menu"><img src={burgericon} alt="" /><a href="#">همبرگر</a> <img src={arrowdown} className='down-arrow' alt="" /></div>
                <ul className='Undermenu'>
                    <li ><a href="#"><img src={burgerangus} alt="" /><h5>برگرهای ویژه</h5></a></li>
                    <li ><a href="#"><img src={burgerpaleo} alt="" /><h5>برگرهای مام</h5></a></li>
                    <li ><a href="#"><img src={burgeregster} alt="" /><h5>برگر های پپرونی</h5></a></li>
                    <li ><a href="#"><h4>درباره برگر</h4></a><p className='sub-content'>ساخت برگرهای ما به روش کاملا دستی آماده شده و با بهترین کیفیت به شما مشتریان عزیز ارائه میگردد. <br />
هر برگر موجود در لافکا را می توان با پوسته پوسته پوسته پوسته یا 100٪ پوسته غلات و حتی خمیر بدون گلوتن دوستانه وگان تهیه کرد.</p><button className='burger-Btn'>برگر خود را سفارش دهید</button></li>
                </ul>
                </li>
                <li className='li-sandwich'><div className="opacity-menu"><img src={sandwichicon} alt="" /><a href="#">ساندویچ</a> <img src={arrowdown} className='down-arrow' alt="" /></div><span className='packing'>و بسته‌بندی</span>
                <ul className='Undermenu2'>
                    <li ><a href="#"><img src={fastfoodicon1} alt="" /><span>ساندویچ های کلاسیک</span></a></li>
                    <li ><a href="#"><img src={breakfasticon} alt="" /><span>ساندویچ های پرسی</span></a></li>
                    <li ><a href="#"><img src={cheeseicon} alt="" /><span>قارچ و پنیر</span></a></li>
                    <li ><a href="#"><img src={sandwichicon} alt="" /><span>بسته بندی مرغ</span></a></li>
                </ul>
                </li>
                <li className='li-mixed'><div className="opacity-menu"><img src={fastfoodicon2} alt="" /><a href="#">ترکیبی‌ها</a> <img src={arrowdown} className='down-arrow' alt="" /></div><span className='special'>ویژه</span>
                <ul className='Undermenu3'>
                    <li><a href="#"><img className='opacity-img' src={cravingbanner} alt="" /></a></li>
                   <li>
                    <a href="#" >ترکیبی های محبوب</a>
                    <ul>
                        <li><a href="#"><img src={fastfoodicon2} alt="" /><span>برگر + سیب زمینی</span></a></li>
                        <li><a href="#"><img src={fastfoodicon3} alt="" /><span>برگر + شیک</span></a></li>
                        <li><a href="#"><img src={chickenbucket} alt="" /><span>برگر + چیپس</span></a></li>
                        <li><a href="#"><img src={fastfoodicon4} alt="" /><span>پیتزا + سیب زمینی</span></a></li>
                        
                    </ul>
                   </li>
                </ul>
                </li>
                
                <li><div className="opacity-menu"><img src={friedpotatoes} alt="" /><a href="#">سالاد و پیش غذا</a></div></li>
                <li><div className="opacity-menu"><img src={bubbletea} alt="" /><a href="#">نوشیدنی‌ها</a></div></li>
                <li><div className="opacity-menu"><img src={icecream} alt="" /><a href="#">دسرها</a></div></li>

            </ul>

        </nav>
    )
}
