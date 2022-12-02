import './Section4.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import pizzatray from './../../../image/pizza-tray-2.png'
export default function Section4() {
  return (
    <div className='sec4-container'>
    <div className="sec4-title">
        <h3>پیتزا رومانی</h3>
        <span>با استایل معطر ، پیتزاهای عالی ما
جایی هستند که خلاقیت سرآشپزهایپیتزای ما می درخشد.</span>
            <a href="#" className='sec4-ordery'>سفارش دهید</a>
    </div>
    <div className="sec4-img">
<img src={pizzatray} alt="" />
   
    </div>
</div>
  )
}
