import "./Header-Box.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import usericon from './../../../icons/icons8-user-96.png'
import hearticon from './../../../icons/heart-3510.svg'
import bagicon from './../../../icons/bag.png'
import searchicon from './../../../icons/icons8-search-90.png'

export default function HeaderBox() {
    return (
        <div className="side-box-contain">
            <div className="left-side-box">
                <a href="#"><img src={usericon} alt="" /></a>
               <a href="#"><img src={hearticon} alt="" /> <span className="count">0</span></a>
               <a href="#"><img src={bagicon} alt="" /> <span className="count">0</span></a>
                <a href="#"><img src={searchicon} alt="" /></a>
            </div>
            <div className="right-side-box">
                <span className="call-title">تماس برای سفارش آنلاین:</span>
                <span className="call-number"><a href="tel:09354807474">09354807474</a></span>
            </div>
        </div>
    )
}
