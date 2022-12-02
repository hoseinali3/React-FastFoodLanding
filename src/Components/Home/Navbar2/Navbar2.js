import './Navbar2.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar2() {
   
    return (
        <nav className='navbar2'>
            <ul>

                <li className='li-pizza'><div className="opacity-menu"><img src="icons/pizza-slice.png" alt="" /><a href="#">پیتزا</a> <img src="icons/down-arrow.png" className='down-arrow' alt="" /></div><span className='tree-style'>سبک متفاوت</span>
                <ul className='Undermenu'>
                    <li ><a href="#"><img src="image/menu-banner-deep.jpg" alt="" /><h5>پیتزا رست بیف</h5></a></li>
                    <li ><a href="#"><img src="image/menu-banner-thin.jpg" alt="" /><h5>پیتزا یونانی</h5></a></li>
                    <li ><a href="#"><img src="image/menu-banner-slice.jpg" alt="" /><h5>پیتزا چانو</h5></a></li>
                    <li ><a href="#"><h4>درباره پیتزا</h4></a><p className='sub-content'>با سبکی مدرن تر ، پیتزا های لذیذ ما جایی هستند که خلاقیت سرآشپزهای پیتزا ما می درخشد. <br />
هر پیتزا موجود در لافکا را می توان با پوسته پوسته پوسته پوسته یا 100٪ پوسته غلات و حتی خمیر بدون گلوتن دوستانه وگان تهیه کرد.</p><button className='pizza-Btn'>پیتزای خود را سفارش دهید</button></li>
                </ul>
                </li>
                <li><div className="opacity-menu"><img src="icons/burger.png" alt="" /><a href="#">همبرگر</a> <img src="icons/down-arrow.png" className='down-arrow' alt="" /></div>
                <ul className='Undermenu'>
                    <li ><a href="#"><img src="image/menu-banner-angus.jpg" alt="" /><h5>برگرهای ویژه</h5></a></li>
                    <li ><a href="#"><img src="image/menu-banner-paleo.jpg" alt="" /><h5>برگرهای مام</h5></a></li>
                    <li ><a href="#"><img src="image/menu-banner-egster.jpg" alt="" /><h5>برگر های پپرونی</h5></a></li>
                    <li ><a href="#"><h4>درباره برگر</h4></a><p className='sub-content'>ساخت برگرهای ما به روش کاملا دستی آماده شده و با بهترین کیفیت به شما مشتریان عزیز ارائه میگردد. <br />
هر برگر موجود در لافکا را می توان با پوسته پوسته پوسته پوسته یا 100٪ پوسته غلات و حتی خمیر بدون گلوتن دوستانه وگان تهیه کرد.</p><button className='burger-Btn'>برگر خود را سفارش دهید</button></li>
                </ul>
                </li>
                <li className='li-sandwich'><div className="opacity-menu"><img src="icons/sandwich.png" alt="" /><a href="#">ساندویچ</a> <img src="icons/down-arrow.png" className='down-arrow' alt="" /></div><span className='packing'>و بسته‌بندی</span>
                <ul className='Undermenu2'>
                    <li ><a href="#"><img src="icons/fast-food (1).png" alt="" /><span>ساندویچ های کلاسیک</span></a></li>
                    <li ><a href="#"><img src="icons/english-breakfast.png" alt="" /><span>ساندویچ های پرسی</span></a></li>
                    <li ><a href="#"><img src="icons/cheese (1).png" alt="" /><span>قارچ و پنیر</span></a></li>
                    <li ><a href="#"><img src="icons/sandwich.png" alt="" /><span>بسته بندی مرغ</span></a></li>
                </ul>
                </li>
                <li className='li-mixed'><div className="opacity-menu"><img src="icons/fast-food.png" alt="" /><a href="#">ترکیبی‌ها</a> <img src="icons/down-arrow.png" className='down-arrow' alt="" /></div><span className='special'>ویژه</span>
                <ul className='Undermenu3'>
                    <li><a href="#"><img className='opacity-img' src="image/menu-banner-craving1.jpg" alt="" /></a></li>
                   <li>
                    <a href="#" >ترکیبی های محبوب</a>
                    <ul>
                        <li><a href="#"><img src="icons/fast-food.png" alt="" /><span>برگر + سیب زمینی</span></a></li>
                        <li><a href="#"><img src="icons/fast-food (2).png" alt="" /><span>برگر + شیک</span></a></li>
                        <li><a href="#"><img src="icons/chicken-bucket.png" alt="" /><span>برگر + چیپس</span></a></li>
                        <li><a href="#"><img src="icons/fast-food (3).png" alt="" /><span>پیتزا + سیب زمینی</span></a></li>
                        
                    </ul>
                   </li>
                </ul>
                </li>
                
                <li><div className="opacity-menu"><img src="icons/fried-potatoes.png" alt="" /><a href="#">سالاد و پیش غذا</a></div></li>
                <li><div className="opacity-menu"><img src="icons/bubble-tea.png" alt="" /><a href="#">نوشیدنی‌ها</a></div></li>
                <li><div className="opacity-menu"><img src="icons/ice-cream.png" alt="" /><a href="#">دسرها</a></div></li>

            </ul>

        </nav>
    )
}
