import React, { Component } from "react";
import formatCurrency from "../util";
import Fade from "react-reveal/Fade";
//import { connect } from "react-redux";
//import Modal from "react-modal";
//import Zoom from "react-reveal/Zoom";
//import { removeFromCart } from "../actions/cartActions";
//import { createOrder, clearOrder } from "../actions/orderActions";



export default class Cart extends Component{
    constructor(props){
        super(props);
        this.state={
            showCheckout:false,
            name:"",
            email:"",
            adress:""
    }
    }

    handleInput=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    createOrder=(e)=>{
        e.preventDefault();
        const order={
            name:this.state.name,
            email:this.state.email,
            adress:this.state.adress,
            cartItems:this.props.cartItems,
        }
        this.propes.createOrder(order)
    }
    render(){
        const {cartItems} = this.props;
        return(
            <div>
{cartItems.length === 0?(
<div className="cart cart-header">Cart is empty </div>
    ):(
    <div className="cart cart-header">
        You have {cartItems.length} in the cart{""}
        </div>
        )}
        <div>
                <div className="cart">
                    <Fade left cascade>
                    <ul className="cart-items">
                        {cartItems.map(item=>(
                            <li key={item._id}>
                                <div><img src={item.image} alt={item.title}/></div>
                                <div>
                        <div>{item.title}</div>
                        <div className="right">
                           {/* {formatCurrency(item.price)} *{item.count}{" "} */}
                           <button className="button primary" onClick={this.props.removeFromCart(item)}>Remove</button>
                        </div>
                        
                                </div>
                            </li>
                        ))}
                    </ul>
                    </Fade>
                </div>
                {cartItems.length!==0 &&( 
                <div>
                <div className="cart">
                    <div className="total">
                        <div>Total:{""} {cartItems.reduce((a,c)=>a+c.price*c.count,0)}</div>
                        <button onClick={()=>{this.setState({showCheckout:true})}} className="button primary">Proceed</button>
                    </div>
                </div>
                {this.state.showCheckout && (
                    <Fade right cascade>
                    <div className="cart">
                <form onSubmit={this.createOrder}>
                    <ul className="form-container">
                        <li>
                            <label>Email</label>
                            <input name="email" type="email" require onChange={this.handleInput}/>
                        </li>
                        <li>
                            <label>Name</label>
                            <input name="name" type="text" require onChange={this.handleInput}/>
                        </li>
                        <li>
                            <label>Adress</label>
                            <input name="adress" type="text" require onChange={this.handleInput}/>
                        </li>
                        <li>
                            <button className="button primary" type="submit">Check out</button>
                        </li>
                    </ul>
                </form>
            </div>
            </Fade>
            )}
            </div>
                )}
               
            </div>
            </div>
            
        )
    }
}