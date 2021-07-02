import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super()

    this.state = {
      foodArr: ['Candy', 'Cookies', 'Pizza', 'Ice Cream', 'Cake']
    }
  }


  render(){
    
    let foodsDisplay = this.state.foodArr.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    })
    
    return(
      <div className='App'>
        {foodsDisplay}
      </div>
    
    )
  }
}
export default App;
