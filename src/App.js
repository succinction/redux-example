import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { updateUser } from './actions/userActions'

class App extends Component {

  constructor(props) {
    super(props)
    this.onUpdateUser = this.onUpdateUser.bind(this)
  }


  onUpdateUser(event) {
    this.props.onUpdateUser(event.target.value)
  }

  render() {
    console.log(this.props)

    return (
      <div className="App">
        <header className="App-header">
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
        </header>
        <div onClick={this.onUpdateUser}>
          Update User: <br/>
          <input onChange={this.onUpdateUser}></input>
        </div>
        {this.props.user}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  user: state.user
})

const mapActionsToProps = {
  onUpdateUser: updateUser
}

export default connect(mapStateToProps, mapActionsToProps)(App);
