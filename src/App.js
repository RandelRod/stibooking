import React, {Component} from 'react';
import Navigation from './Components/Navigation/Navigation';
import CardList from './Components/Cards/CardList';
import SearchBox from './Components/Cards/SearchBox';
import Scroll from './Components/Cards/Scroll';
import Register from './Components/Register/Register';
import Signin from './Components/Signin/Signin';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: '',
      route: 'signin',
      isSignedIn: false
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()
    )
    .then(users => this.setState({robots: users})
    )
    
}

onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
}

onRouteChange = (route) => {
  if (route === 'signout'){
    this.setState({isSignedIn: false})
  } else if (route === 'home') {
    this.setState({isSignedIn: true})
  }
  this.setState({route: route});
}

  render () {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
  })


    return (
      <div>
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
        { this.state.route === 'home' 
        ? <div>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <CardList robot={filteredRobots}/>
        </Scroll>
        </div>
        : (
          this.state.route === 'signin'
          ? <Signin onRouteChange={this.onRouteChange}/>
          : <Register onRouteChange={this.onRouteChange}/>
        )
        
        
        }
        
      </div>
    );
  }
    
  
  
}

export default App;
