import React from 'react';
import { connect } from 'react-redux';
import "../index.css"
import { filterProducts, sortProducts } from "../actions/productActions";

 class Filter extends React.Component {
    render() {
        return (
            !this.props.filteredProducts ? ( <div>Loading...</div> ) : 
            (
            <div className="filter">
                <div className="filter-result">{this.props.filteredProducts.length} Products</div>
                <div className="filter-sort">
                        Order {" "}
                    <select value={this.props.sort} onChange={(e) => 
                        this.props.sortProducts(this.props.filteredProducts, e.target.value)}>
                        <option value="latest">Latest</option>
                        <option value="Lowest">Lowest</option>
                        <option value="Highest">Highest</option>
                    </select>
                </div>
                <div className="filter-size"> 
                Filter{" "}
                <select value={this.props.size} onChange={(e) => 
                    this.props.filterProducts(this.props.products, e.target.value)}>
                    <option value="">ALL</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>
            </div>
            )  
        )
    }
}

const mapStateToProps = (state) => {
    return {
        size: state.products.size,
        sort: state.products.sort,
        products: state.products.items,
        filteredProducts: state.products.filteredItems
    }
}

export default connect( mapStateToProps, { filterProducts, sortProducts })(Filter);