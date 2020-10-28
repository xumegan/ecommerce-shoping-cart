import React from "react";
import data from "./data.json"
import Products from "./components/Products.js"
//push error
class App extends React.Component {
  constructor(){
    super();
    this.state={products:data.products,size:"",sort:""}
  }
  render(){
    return (
    <div className="grid-container">
      <header className="App-header">
        <a href="/">React Shoppin Cart</a>
        
      </header>
      <main>Product List
      <div className='content'>
        <div className='main'>
          <Products products={this.state.products}>this</Products>
        </div>
        <div className='sidebar'>

        </div>
      </div>
      </main>
       <footer>All right is reserved</footer>
    </div>
  );
}
}

export default App;
