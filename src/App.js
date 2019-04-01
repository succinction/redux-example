import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { apiRequest, updateUser } from './actions/userActions'
import { createSelector } from 'reselect';


class App extends Component {
  constructor(props) {
    super(props)
    this.onUpdateUser = this.onUpdateUser.bind(this)
  }

  componentDidMount() {
    setTimeout(
      this.props.onApiRequest,
      1300
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

const productSelector = createSelector(
  state => state.products,
  products => products
)

const userSelector = createSelector(
  state => state.user,
  user => user
)

const mapStateToProps = createSelector(
  productSelector,
  userSelector,
  (products, user) => ({
    products, 
    user
  })
)

const mapActionsToProps = {
  onUpdateUser: updateUser,
  onApiRequest: apiRequest,
}

export default connect(mapStateToProps, mapActionsToProps)(App);



/////////////////////////////////////////////////////////////////////////////////////////////

// const mapStateToProps = (state, props) => {
//   return {
//     products: state.products,
//     user: state.user,
//     usePlusProps: `${state.user} ${props.aRandomProp}`
//   }
// }


// const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
//   console.log(propsFromState, propsFromDispatch, ownProps)
//   return {}
// }
