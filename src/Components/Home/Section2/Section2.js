import './Section2.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import sec2img1 from './../../../image/pizza-home-ban-new3-2.png'
import sec2img2 from './../../../image/pizza-home-ban-new1-2.png'
import sec2img3 from './../../../image/pizza-home-ban-new2-2.png'
export default function Section2() {
  return (
    <div className='sec2-container'>
    <div className="sec2-title">
        <h3>پرطرفدارترین ها</h3>
        <span>با استایل معطر ، پیتزاهای عالی ما
جایی هستند که خلاقیت سرآشپزهای پیتزای ما می درخشد.</span>
    </div>
    <div className="food-box-container">

    <div className="foodBox food-box1"><a href="#"><img className='img-fluid' src={sec2img1} alt="" /><span className='food-title'>خوشمزه</span><span className='food-subtitle'>ایتالیایی</span><span className='food-btn'>سفارش دهید</span></a></div>
    <div className="foodBox food-box2"><a href="#"><img className='img-fluid' src={sec2img2} alt="" /><span className='food-title'>سوخاری</span><span className='food-subtitle'>پیتزا مکزیکی</span><span className='food-btn'>سفارش دهید</span></a></div>
    <div className="foodBox food-box3"><a href="#"><img className='img-fluid' src={sec2img3} alt="" /><span className='food-title'>جوشیده</span><span className='food-subtitle'>پاستا سبزیجات</span><span className='food-btn'>سفارش دهید</span></a></div>
    </div>
</div>
  )
}
