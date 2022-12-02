import './Section8.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Section8() {
  return (
  
    <div className="sec8-container">

    <div className="sec8-rightside">
        
        <p className='sec8-content'>عاشق پیتزا هستید؟ مثل معاملات؟ اولین نفری باشید که درباره جدیدترین موارد منو و آخرین پیشنهادات ما اطلاعاتی کسب می کند. غذای بیشتر. پول کمتر.</p>
       
    </div>
    <div className="sec8-leftside">
      <div className="emailbox-wrapper">

       <input type="text" placeholder='ایمیل شما...' />
       <button className='submitBtn'>عضویت</button>
      </div>
       
    </div>
  
    
    </div>

  )
}
