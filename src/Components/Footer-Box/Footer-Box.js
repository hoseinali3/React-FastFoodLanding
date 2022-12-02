import './Footer-Box.css'

import clockicon from './../../icons/clock copy.png'
import locationdoticon from './../../icons/location-dot copy.png'
import phoneflipicon from './../../icons/phone-flip copy.png'
import phoneofficeicon from './../../icons/phone-office copy.png'
import mailicon from './../../icons/icons8-mail-96.png'
import behpardakhticon from './../../icons/Behpardakht-Mellat-Logo-PNG-Way2pay-99-05-26 white.png'
import bankicon from './../../icons/e17731.png'
import sadadicon from './../../icons/sadad-logo white.png'
import pasargadicon from './../../icons/pasargad-logo white.png'



export default function FooterBox() {
  return (
    <footer className="footer-container">

  <div className="info-col">
<h3>اطلاعات</h3>
      <ul>
     
        <li><a href="#">خانه</a></li>
        <li><a href="#">درباره ما</a></li>
        <li><a href="#">منوی ما</a></li>
        <li><a href="#">وبلاگ</a></li>
        <li><a href="#">اطلاعات تماس</a></li>
      </ul>
  </div>
  <div className="qaccess-col">
<h3>دسترسی سریع</h3>
    <ul>
      <li><a href="#">سفارش من</a></li>
      <li><a href="#">پرداخت</a></li>
      <li><a href="#">پذیرایی</a></li>
      <li><a href="#">مکان های ما</a></li>
      <li><a href="#">حریم خصوصی</a></li>
    </ul>    
  </div>
  <div className="callinfo-col">
    <h3>اطلاعات تماس</h3>
    <p><img src={clockicon} alt="" /> شنبه - پنجشنبه : 10:00 - 23:00</p>
    <p><img src={locationdoticon} alt="" /> تهران - خ ولیعصر - مجتمع اداری ولیعصر</p>
    <p><img src={phoneflipicon} alt="" /> 09213318307</p>
    <p><img src={phoneofficeicon} alt="" /> 02188789010</p>
    <p><a href="#"><img src={mailicon} alt="" /> orders@pizza.com</a></p>
    </div>
    <div className="onlinepay-col">
      <h3>پرداخت آنلاین</h3>
      <div>
      <img src={behpardakhticon} alt="" />
      </div>
      <div>
      <img src={bankicon} alt="" />
      </div>
      <div>
      <img src={sadadicon} alt="" />
      </div>
      <div>
      <img src={pasargadicon} alt="" />
      </div>
      </div>    
    </footer>

  )
}
