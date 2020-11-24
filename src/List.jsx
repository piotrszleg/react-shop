import React from "react";
import Item from "./Item.jsx";

class ItemData {
    constructor(name, price, image){
        this.name=name;
        this.price=price;
        this.image=image;
        this.inCart=0;
    }
}

class Todo extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [
          new ItemData("taczka", 10, "taczka.jpg"),
          new ItemData("łopata", 5, "lopata.jpg"),
          new ItemData("szpadel", 7, "szpadel.jpg")
      ] };
    }

    increaseInCart(item){
        let copy={...item};
        copy.inCart++;
        return copy;
    }

    changeToCart(index, change){
        this.setState(state=>({items:state.items.map((v, i)=>
            (i===index)
                ? {...v, "inCart": v.inCart+change}
                : v
        )}))
    }

    dataToItem(data, index){
        return (<Item 
            name={data.name} 
            price={data.price} image={data.image} 
            inCart={data.inCart}
            addToCart={()=>this.changeToCart(index, 1)}
            removeFromCart={()=>this.changeToCart(index, -1)}
            />);
    }

    suma(){
      return this.state.items.reduce((a, b)=>a+b.price*b.inCart, 0)
    }
  
    render() {
      return (
        <div class="container">
          <br/>
          <br/>
          <h1 class="text-center">Sklep</h1>
          <br/>
          <div class="row">{this.state.items.map(this.dataToItem.bind(this))}</div>
          <br/>
          <hr/>
          <p>Suma: {this.suma()}zl</p>
          <button class="btn btn-success">Przejdź do płatności</button>
        </div>
      );
    }
  }
  
  export default Todo;  