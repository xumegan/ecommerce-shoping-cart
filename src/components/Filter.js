import React, {Component} from 'react';
//import { connect } from "react-redux";
//import { filterProducts, sortProducts } from "../actions/productActions";


export default class Filter extends Component{
    render(){
        return(
<div className="filter">
    <div className="filter-result">{this.props.count}Products</div>
    <div className="filter-sort">
        Order{" "}
    <select value={this.props.sort} onChange={(e) =>
              this.props.sortProducts(
                this.props.filteredProducts,
                e.target.value
              )
            }>
        
        <option value="lowrest">Latest</option>
        <option value="lowrest">Lowrest</option>
        <option value="highest">Highest</option>
        </select>
        </div>
    <div className="filter-size">
        Filter{" "}
        <select value={this.props.size} onChange={(e) =>
              this.props.filterProducts(this.props.products, e.target.value)
              
            }>
        <option value="">All</option>
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option>
        </select></div>
</div>
        )
    }
}