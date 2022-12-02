import React, { Component } from 'react'

export default class User extends Component {
  render() {
    return (
      <div>
        <h1>this name is: {this.props.name} || this age is: {this.props.age}</h1>
      </div>
    )
  }
}
