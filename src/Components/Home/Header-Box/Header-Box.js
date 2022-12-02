import "./Header-Box.css";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function HeaderBox() {
    return (
        <div className="side-box-contain">
            <div className="left-side-box">
                <a href="#"><img src="icons/icons8-user-96.png" alt="" /></a>
               <a href="#"><img src="icons/heart-3510.svg" alt="" /> <span className="count">0</span></a>
               <a href="#"><img src="icons/bag.png" alt="" /> <span className="count">0</span></a>
                <a href="#"><img src="icons/icons8-search-90.png" alt="" /></a>
            </div>
            <div className="right-side-box">
                <span className="call-title">تماس برای سفارش آنلاین:</span>
                <span className="call-number"><a href="tel:09354807474">09354807474</a></span>
            </div>
        </div>
    )
}
