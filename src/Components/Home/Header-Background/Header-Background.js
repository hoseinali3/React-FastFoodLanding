import './Header-Background.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import pizzaback from './../../../image/pizzetta-2.png'

export default function HeaderBackground() {
  return (
    <div className='header-background'>
<img src={pizzaback} alt="" />
    </div>
  )
}
