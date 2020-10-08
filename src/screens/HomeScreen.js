import React from 'react';
import Filter from "../components/Filter";
import Products from "../components/Products";
import Cart from "../components/Cart";

export default class HomeScreen extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="main">
                    <Filter />
                    <Products />
                </div>
                <div className="sidebar">
                    <Cart />
                </div>
            </div>
        );
    }
}