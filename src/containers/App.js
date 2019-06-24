import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {  //fetch is the window method that fatches the response from the api
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return (<div className='tc ' style={{overflow: "hidden",}}>
          <h1 className='f1 animated tada slow'>RoboFriends</h1>
          <SearchBox className="animated bounceInDown" searchChange={this.onSearchChange}/>
          {
            !robots.length ?
               <h1 className="tc f1" >Loading. . . . . . .</h1> 
          :(
            <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
          )
          } 
        </div>
      );
  }
}
