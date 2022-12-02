import './PizzaBox.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PizzaBox({name,pic= "icons/pizza-slice.png",count , children}) {
    
    
    return (
        
        count &&
        <div className="pizzaBox">
           

            <a href="#">
                <img className='img-fluid' src={pic} alt="" />
            </a>
           
            <div className="pizzaSummary">

                <a href='#' className='pizza-title'>{name}</a>
                <span className='pizza-subtitle'>گوشت سینه دودی، دنده، سوسیس دودی،<br /> گوشت سفید و پنیر چدار با کاهو، گوجه فرنگی.</span>
            </div>
            {children}
            <div className="links">
                <form>
                    <span className='pizza-size'>کوچک</span>
                    <span className='pizza-weight'>300 گرم</span>
                    <span className='pizza-price'>28 تومان</span>
                    <span className='ordery'><a href="#"> سفارش</a></span>
                </form>
                <form>
                    <span className='pizza-size'>متوسط</span>
                    <span className='pizza-weight'>490 گرم</span>
                    <span className='pizza-price'>43 تومان</span>
                    <span className='ordery'><a href="#"> سفارش</a></span>
                </form>
                <a href='#' className='pizza-more'>گزینه های بیشتر</a>

            </div>
        </div>



    )
}

// PizzaBox.defaultProps = {
//     pic:"icons/pizza-slice.png"
// }