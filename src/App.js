import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Card from './components/Card';

class App extends Component {
  constructor(){
    super();
    this.state ={
      users: [],
      isLoading: true,
      selectedCard: ''
    }
  }

  async getUser(){
    const response = await fetch('https://randomuser.me/api/?results=2')
    const users = await response.json();
    this.setState({ 
      users: users['results'], 
      isLoading: false 
    });
  }
 
  handleKeyPress = (e) => {    
    if(e.keyCode === 49){
      this.setState({ selectedCard: 'Sol' })
      this.getUser();
    }
    
    if(e.which === 50){
      this.setState({ selectedCard: 'Sag' })
      this.getUser();
    }
  }

  componentDidMount(){
    this.getUser()
    document.addEventListener('keypress', this.handleKeyPress)
  }

  render() {
    const { isLoading } = this.state;
      if(!isLoading){
      return (
        <div className="App">
          <div className="App-header">
            <Header />
          </div>
          <div className="choose-area">
            <Card image={this.state.users[0].picture.large} />
            <div className="seperator">veya</div>
            <Card image={this.state.users[1].picture.large} />
          </div>
          <div className="selected">
            Sectiginiz Yon: {this.state.selectedCard}
          </div>
        </div>
      );
    }else{
      return(<div>Yukleniyor</div>)
    }
  }
}

export default App;
