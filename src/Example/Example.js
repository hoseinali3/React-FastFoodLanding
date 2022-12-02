import React, { Component } from 'react'

import "./Example.css";
import User from './User';
export default class Example extends Component {
   constructor(props){
super(props)
     this.state = {
       userName:"",
       isLogin:false
      }
      this.inputChangeHandler = this.inputChangeHandler.bind(this)
    }
        // this.clickAddHandler = this.clickAddHandler(event)
        // this.clickMinusHandler = this.clickMinusHandler(event)
      



//       clickAddHandler(event){
// if(this.state.count > 29){
//   return false
// }

//      this.setState(prevState =>{

//       return {count: prevState.count+1}
//      })

//      if (this.state.count >= 14){
//       this.setState({classTemp:'hot'})
//      }
//    console.log(event);
//     }

//     clickMinusHandler(){
//       if(this.state.count < 1){
//         return false
//       }
//       this.setState(prevState =>{
      

//           return {count: prevState.count-1}
        
//        })

//        if (this.state.count < 16){
//         this.setState({classTemp:'cold'})
//        }
//     }

inputChangeHandler(event){
          this.setState({
            isLogin: event.nativeEvent.target.checked
          })
}


  render() {
    return(
      <div>
        <label htmlFor="login">login</label>
       <input type="checkbox" id='login' checked={this.state.isLogin} onChange={this.inputChangeHandler} />
      </div>
    )
  }

    // return (
    //   <div className='pizza-box-contain'>
    //     <h3 className={`${this.state.classTemp}`} >{this.state.count}</h3>
    //     <button className='add-btn' onClick={this.clickAddHandler}>add</button>
    //     <button className='minus-btn' onClick={this.clickMinusHandler}>minus</button>
    //     <User {...this.state.users[0]}></User>
    //     <User {...this.state.users[1]}></User>
    //     <User {...this.state.users[2]}></User>
    //   </div>
    // )
  
  

    // return(
    //   <div>
    //     {this.state.age < 18 ? <h3>مجاز به ورود نیستید</h3> : <h3>مجاز به ورود هستید</h3>}
    //   </div>
    // )

}
