import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
    


  render() {
//    if (this.state.isLoggedIn){
//        return (
//            <div>welcome Vishwas</div>
//        )
//    }else{
//        return(
//            <div>welcome Guest</div>
//        )
//    }


//let message
//if(this.state.isLoggedIn){
//    message = <div>Melcome Vishwas</div>
//}else{
//    message=<div>Welcome Guest</div>
//}

return(
    this.state.isLoggedIn ?
    <div>Welcome Vishwas</div> :
    <div>Welcome Guest</div>

)
}
}

export default UserGreeting
