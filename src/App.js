import React,{Component} from 'react';
import Header from './Header';
import './App.css';
import Searchbox from './Searchbox';
import CardList from './CardList';
import Scroll from './scroll';
//import {robots} from './robots';
class App extends Component
{

  constructor()
  {
     super();
     this.state = {
        robots:[],
        searchfield:''
     }
  }
  onsearchChange = (event) =>
  {

    
    this.setState({searchfield:event.target.value});
    
      
    
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response =>
    response.json() )
    .then(users =>
            this.setState({robots:users}))
  }
  render(){
    if(this.state.robots.length === 0)
    {
      return(<div><h1>LOADING...</h1></div>)
    }
    else
    {
          const filterRobots = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return(<div className="bg-yellow tc">
            <Header />
            <Searchbox searchChange={this.onsearchChange} />
            <Scroll>
                <CardList robots={filterRobots} />
            </Scroll>
            
        </div>)

    }
    
  }
  
}

export default App;
