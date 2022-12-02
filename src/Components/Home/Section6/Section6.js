import './Section6.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import pizzac from './../../../image/pizza-2.png'

export default function Section6() {
  return (
  
    <div className="sec6-container">

    <div className="box2">
        <img src={pizzac} alt="" />
        <p className='P1'>نمی توانید آنچه را دوست دارید پیدا کنید؟</p>
        <p className='P2'>خودت غذاتو بساز!</p>
        <p className='P3'>مواد تشکیل دهنده خود را انتخاب کنید و آنها را روی مواد خود قرار دهید
مواد اضافی اضافه کنید و آن را واقعاً متعلق به خودتان کنید.</p>
        <a href='#' className='btn-ordery'>ساخت پیتزا سفارشی</a>
    </div>
    
    </div>

  )
}
