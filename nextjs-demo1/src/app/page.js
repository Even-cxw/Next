"use client"
import React, { Component } from 'react';

class Parent extends Component {
  constructor(props) {
    super(props);
    console.log('Parent--constructor');
    this.state = {
      count: 1,
      rmb: 0
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Parent--shouldComponentUpdate');
    return this.state.count !== nextState.count;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Parent--getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Parent--componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('Parent--componentWillUnmount');
  }

  add() {
    let num = this.state.count+1
    this.setState({count: num})
  }

  render() {
    console.log('Parent--render');
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        count {this.state.count} - {this.state.rmb}
        <button onClick={this.add.bind(this)}>+</button>
        <Children></Children>
      </main>
    );
  }
}

class Children extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Even'
    }
    console.log('Children--constructor');
  }

  componentDidMount() {
    console.log('Children--componentDidMount');
  }


  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Children--componentDidUpdate');
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.name !== nextState.name;
  }
  componentWillUnmount() {
    console.log('Children--componentWillUnmount');
  }

  render() {
    console.log('Children--render');
    return <div>I am Children!</div>;
  }
}

export default Parent;
