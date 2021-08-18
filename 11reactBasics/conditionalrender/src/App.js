// import React from "react"
// import Conditional from "./Conditional" 


// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = {
//       isLoading: true
//     }
//   }

//   componentDidMount(){
//     setTimeout(()=> {
//       this.setState({
//         isLoading: false
//       })
//     }, 1500)
//   }

//   render(){
//     return (
//       <div> 
//         {this.state.isLoading ?
//           <h1>Loading...</h1> :
//           <Conditional/>}
//       </div>
//     )
//   }
// }

// export default App;


// import React, {Component} from "react"

// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             unreadMessages: ["a", "b"]
//         }
//     }
//     // &&
//     // false && false
//     render() {
//         return (
//             <div>
//                 {   
//                   //this.state.unreadMessages.length > 0 ? 
//                   //<h2>You have {this.state.unreadMessages.length} unread messages!</h2> :
//                   //null
//                   this.state.unreadMessages.length > 0 && 
//                   <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
//                 }
//             </div>
//         )
//     }
// }

// export default App

import React from "react"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      isLoggedIn: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => {
        return {
            isLoggedIn: !prevState.isLoggedIn
        }
    })
}

  componentDidMount(){

  }



  render(){
    let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
    let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out"
    return (
        <div>
            <button onClick={this.handleClick}>{buttonText}</button>
            <h1>{displayText}</h1>
        </div>
    )
  }
}

export default App