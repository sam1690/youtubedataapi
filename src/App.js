import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      videodisplay:{videoid:"", title:""},
      thumbnailtitle:[]
    }
  }
  onsearch=()=>{
    fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAvaEX0RtArjGSkbJ7opxRTWeagwC9dEHQ&maxResults=5&type=video&q="+this.refs.searchtext.value)
    .then((res)=>res.json())
    .then((res)=>{
      
      this.setState({thumbnailtitle:res.items.map(function(elem) {
        return {
          url: elem.snippet.thumbnails.default.url,
          title: elem.snippet.title,
          videoid:"https://www.youtube.com/embed/"+elem.id.videoId
        } 
      })})
      console.log(this.state.thumbnailtitle)
      //console.log(res)
    })
    //console.log(this.refs.searchtext.value)
  }

  videodis=(videoid, title)=>{
    //console.log(videoid)
    this.setState({videodisplay:{videoid:videoid,title:title}})
    console.log(this.state.videodisplay)

    
  }
  render() {
    
    return (
      <div className="App">
      <div>
        <h3 style={{marginRight:"50px"}}>YOUTUBEE</h3>
       <input ref="searchtext" type="text" placeholder="enter keyword" style={{margin:"10px"}}/>
       <button onClick={()=>this.onsearch()}>SEARCH</button>
      </div> 
      <hr></hr>
      <div style={{float:"right"}}>
        {this.state.thumbnailtitle.map((item, index)=><div key={index} onClick={()=>this.videodis(item.videoid,item.title)}><img src={item.url}/><p>{item.title}</p><p>{item.videoid}</p><hr></hr></div>)}      
       </div> 
       <h2>{this.state.videodisplay.title}</h2>
        <iframe width="560" height="315" src={this.state.videodisplay.videoid} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    );
    
  }
}

export default App;
