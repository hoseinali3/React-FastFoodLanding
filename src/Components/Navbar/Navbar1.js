import './Navbar1.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import lafkalogo from './../../image/logo-lafka-shop.png'

export default function Navbar1() {
    return (
        <nav className='navbar1'>
            <div className='right-side-nav'>

            <ul>

                <li><a href="#">خانه</a></li>
                <li><a href="#">منوها</a></li>
                <li><a href="#">وبلاگ</a></li>
                <li><a href="#">سفارش آنلاین</a></li>
    
            </ul>
            </div>
            <div className="logo">
            <a href="#">
                <img src={lafkalogo} className='img-fluid' alt="" />
            </a>
            </div>
            <div className="left-side-nav">
                <ul>
                <li><a href="#">شعبه‌ها</a></li>
                <li><a href="#">درباره ما</a></li>
                <li><a href="#">تماس با ما</a></li>
                </ul>
            </div>

        </nav>
        
    )
}
