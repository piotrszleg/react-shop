import React from "react";

class Item extends React.Component {
  render(){
    return (<div class="card col">
      <div class="card-img-top"><img alt={this.props.name+" image"} src={this.props.image}></img></div>
      <p  class="card-title">{this.props.name} - {this.props.price}zł, in cart {this.props.inCart}</p>
      <div class="row">
      <button class="col btn btn-primary" onClick={this.props.addToCart}>add to cart</button>
      { this.props.inCart>0 ?
        <button class="col btn btn-danger" onClick={this.props.removeFromCart}>remove from cart</button>
        : <div class="col"></div>
      }
      </div>
    </div>)
  }
}

export default Item;