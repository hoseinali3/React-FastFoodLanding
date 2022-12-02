
import './GoTo-Top.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function GoToTop() {
    window.onscroll = event => {
        
        if (Math.round(event.path[1].pageYOffset) > 1400){

        }
    }
  return (
    <div className='gototop'>
        <img className='img-fluid' src="icons/down-arrow.png" alt="" />
    </div>
  )
}
