import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { apiRequest, updateUser } from './actions/userActions'

class App extends Component {
  constructor(props) {
    super(props)
    this.onUpdateUser = this.onUpdateUser.bind(this)
  }

  componentDidMount() {
    setTimeout(
      this.props.onApiRequest,
      2300
    )
  }

  onUpdateUser(event) {
    this.props.onUpdateUser(event.target.value)
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </header>
        <div>
          Update User: <br />
          <input onChange={this.onUpdateUser}></input>
        </div>
        {this.props.user}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    products: state.products,
    user: state.user,
    usePlusProps: `${state.user} ${props.aRandomProp}`
  }
}

const mapActionsToProps = {
  onUpdateUser: updateUser,
  onApiRequest: apiRequest,
}

// const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
//   console.log(propsFromState, propsFromDispatch, ownProps)
//   return {}
// }

export default connect(mapStateToProps, mapActionsToProps)(App);
