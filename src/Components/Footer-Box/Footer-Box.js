import './Footer-Box.css'




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
    <p><img src="icons/clock copy.png" alt="" /> شنبه - پنجشنبه : 10:00 - 23:00</p>
    <p><img src="icons/location-dot copy.png" alt="" /> تهران - خ ولیعصر - مجتمع اداری ولیعصر</p>
    <p><img src="icons/phone-flip copy.png" alt="" /> 09213318307</p>
    <p><img src="icons/phone-office copy.png" alt="" /> 02188789010</p>
    <p><a href="#"><img src="icons/icons8-mail-96.png" alt="" /> orders@pizza.com</a></p>
    </div>
    <div className="onlinepay-col">
      <h3>پرداخت آنلاین</h3>
      <div>
      <img src="icons/Behpardakht-Mellat-Logo-PNG-Way2pay-99-05-26 white.png" alt="" />
      </div>
      <div>
      <img src="icons/e17731.png" alt="" />
      </div>
      <div>
      <img src="icons/sadad-logo white.png" alt="" />
      </div>
      <div>
      <img src="icons/pasargad-logo white.png" alt="" />
      </div>
      </div>    
    </footer>

  )
}
