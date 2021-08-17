import React from "react"

// https://reactjs.org/docs/events.html#supported-events

function handleClick() {
    console.log("I was clicked")
}

function App() {
    return (
        <div>
            <img onMouseOver={() => console.log("Hovered!")} src="https://www.fillmurray.com/200/100" />
            <br />
            <br />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default App




// import React from "react"

// // Given a stateless functional component, add state to it
// // state should have a property called `isLoggedIn` which is a boolean
// // (true if logged in, false if not)
// // Then, give your best shot at rendering the word "in" if the user is logged in
// // or "out" if the user is logged out.

// class App extends React.Component {
//     constructor(){
//         super()
//         this.state = {
//             isLoggedIn: false
//         }
//     }
//     render() {
//         let wordDisplay
//         if (this.state.isLoggedIn === true) {
//             wordDisplay = "in"
//         } else {
//             wordDisplay = "out"
//         }
//         return (
//             <div>
//                 <h1>You are currently logged {wordDisplay}</h1>
//             </div>
//         )
//     }
// }

// export default App




// import React from "react"
// //import React, {Component} from "react"


// // https://scrimba.com/p/p4Mrt9/cQnMDHD

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             answer: "Yes",
//             name: "Mary",
//             age: "33"
//         }
//     }
    
//     render() {
//         return (
//             <div>
//                 <h1>Is state important to know? {this.state.answer}</h1>
//                 <h2>{this.state.name}</h2>
//                 <h3>{this.state.age} years old</h3>
//             </div>
//         )
//     }
// }

// export default App



// import React, {Component} from "react"
// import ReactDOM from "react-dom"


// /*/ #1
// function App() {
//   return (
//       <div>
//           <Header />
//           <Greeting />
//       </div>
//   )
// }*/

// // #1
// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Header />
//                 <Greeting />
//             </div>
//         )    
//     }
// }

// /*/ #2
// function Header(props) {
//   return (
//       <header>
//           <p>Welcome, {props.username}!</p>
//       </header>
//   )
// }*/

// // #2
// class Header extends React.Component {
//     render() {
//         return (
//             <header>
//                 <p>Welcome, {this.props.username}!</p>
//             </header>
//         )    
//     }
// }

// /*/ #3
// function Greeting() {
//   const date = new Date()
//   const hours = date.getHours()
//   let timeOfDay
  
//   if (hours < 12) {
//       timeOfDay = "morning"
//   } else if (hours >= 12 && hours < 17) {
//       timeOfDay = "afternoon"
//   } else {
//       timeOfDay = "night"
//   }
//   return (
//       <h1>Good {timeOfDay} to you, sir or madam!</h1>
//   )
// }*/

// // #3
// class Greeting extends Component {
//     render() {
//         const date = new Date()
//         const hours = date.getHours()
//         let timeOfDay
        
//         if (hours < 12) {
//             timeOfDay = "morning"
//         } else if (hours >= 12 && hours < 17) {
//             timeOfDay = "afternoon"
//         } else {
//             timeOfDay = "night"
//         }
//         return (
//             <h1>Good {timeOfDay} to you, sir or madam!</h1>
//         )
//     }
// }

// ReactDOM.render(<App />, document.getElementById("root"))

// export default App