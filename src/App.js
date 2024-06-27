import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";
// import  Nav from './components/Navbar/Nav.js'
import Signin from "./components/Signin/Signin";
import "./App.css";
import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { createContext } from "react";
const myContext = createContext();
class App extends Component {
    state = { isdarkMode: false, contactsIssuesItems: [], cartItemArray: [] };
    changeMode = () => {
        this.setState((pre) => ({ isdarkMode: !pre.isdarkMode }));
    };
    addContactItem = (obj) => {
        this.setState((pre) => ({
            contactsIssuesItems: [...pre.contactsIssuesItems, obj],
        }));
    };
    addCartItem = (obj) => {
        this.setState((pre) => ({
            cartItemArray: [...pre.cartItemArray, obj],
        }));
    };
    onRemoveItem = (id) => {
        let cartItemArray = this.state.cartItemArray;
        cartItemArray = cartItemArray.filter((obj) => {
            return obj.id != id;
        });
        this.setState({ cartItemArray });
    };
    render() {
        console.log("main", this.state);
        return (
            <myContext.Provider
                value={{
                    isdarkMode: this.state.isdarkMode,
                    changeMode: this.changeMode,
                    contactsIssuesItems: this.state.contactsIssuesItems,
                    addContactItem: this.addContactItem,
                    addCartItem: this.addCartItem,
                    cartItemArray: this.state.cartItemArray,
                    onRemoveItem: this.onRemoveItem,
                }}
            >
                <Switch>
                    <Route exact path="/signin" component={Signin} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/cart" component={Cart} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/products" component={Products} />
                </Switch>
            </myContext.Provider>
        );
    }
}
export default App;
export { myContext };

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }
