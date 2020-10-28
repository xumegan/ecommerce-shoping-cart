import React from "react";
import data from "./data.json"
import Products from "./components/Products.js"
import Filter from "./components/Filter.js"
//push error
class App extends React.Component {
  constructor(){
    super();
    this.state={products:data.products,size:"",sort:""}
  }
  sortProducts=(e)=>{
    const sort =e.target.value
    this.setState((state)=>({
      sort:sort,
      products:this.state.products.slice().sort((a,b)=>(
        sort ==="lowest"?((a.price<b.price)?1:-1):
        sort ==="highest"?((a.price>b.price)?1:-1):
        (a._id>b._id)?1:-1)
      ),
    }));
  }
  
    filterProducts=(e)=>{
    if(e.target.value===""){
      this.setState({size:e.target.value,product:data.products})
    }else{
      this.setState({
       size:e.target.value,
    products:data.products.filter(product=>product.availableSizes.indexOf(e.target.value)>=0)})
    }
    
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
          <Filter count={this.state.products.length}></Filter>
          <Products products={this.state.products}></Products>
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
