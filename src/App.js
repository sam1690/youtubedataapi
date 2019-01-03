import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      apidata : "data from youtube........."
    }
  }
  onsearch=()=>{
    console.log(this.refs.searchtext.value)
  }
  render() {
    return (
      <div className="App">
      <div>
       <input ref="searchtext" type="text" placeholder="enter keyword"/>
       <button onClick={()=>this.onsearch()}>SEARCH</button>
       </div>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/CIIW0qm6H80" 
       frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
      
      </div>
    );
  }
}

export default App;
