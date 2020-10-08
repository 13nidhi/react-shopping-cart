import React from 'react';
//import ReactDOM from 'react-dom';
import "../index.css"; 
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import AdminScreen from "../screens/AdminScreen";


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                  <div className="grid-container">
                <header>
                    <Link to="/">React Shopping cart</Link>
                    <Link to="/admin">Admin</Link>
                </header>
                <main>
                  <Route path="/admin" component={AdminScreen} />
                  <Route path="/" component={HomeScreen} />
                </main>
                <footer>
                    All right is reserved.
                </footer>
            </div>
            </BrowserRouter>
        );
    }
}
export default App;