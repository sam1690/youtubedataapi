import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      apidata : []
    }
  }
  onsearch=()=>{
    fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAvaEX0RtArjGSkbJ7opxRTWeagwC9dEHQ&maxResults=5&type=video&q="+this.refs.searchtext.value)
    .then((res)=>res.json())
    .then((res)=>{
      this.setState({apidata:res.items.map((key)=>"https://www.youtube.com/embed/"+key.id.videoId)})
      console.log(this.state)
    })
    //console.log(this.refs.searchtext.value)
  }
  render() {
    return (
      <div className="App">
      <div>
       <input ref="searchtext" type="text" placeholder="enter keyword"/>
       <button onClick={()=>this.onsearch()}>SEARCH</button>
       </div>       
      {this.state.apidata.map((key, id)=><iframe width="400" height="315" key={id} src={key} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)}
      </div>
    );
  }
}

export default App;
