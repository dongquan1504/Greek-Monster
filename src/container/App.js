import React, { Component } from "react";

import CardList from "../component/cardList";
import SearchBox from "../component/SearchBox";
import monsters from "../data/monsters";

import Scroll from "../component/Scroll";
// import ErrorBoundry from "../component/errorBoundry";
import Footer from "../component/footer";
// import logo from '../logo.svg';
import "../assets/css/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: monsters,
      searchField: "",
    };
  }
  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response=>response.json())
  //   .then(users =>{this.setState({monsters: users})})
  // }
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monsters) => {
      return monsters.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !monsters.length ? (
      <h1>Loading..</h1>
    ) : (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <h1 className="f1">Greek Monsters</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          {/* <ErrorBoundry> */}
            <div className="flex">
              <CardList monsters={filteredMonsters} />
            </div>
          {/* </ErrorBoundry> */}
        </Scroll>
        <Footer />
      </div>
    );
  }
}

export default App;
