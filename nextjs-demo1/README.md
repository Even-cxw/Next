

# demo1

## 客户端渲染的好处
- `交互性`：客户端组件可以使用状态、效果和事件侦听器，这意味着它们可以向用户提供即时反馈并更新 UI。
- `浏览器` API：客户端组件可以访问`浏览器 API`，例如`地理位置`或`本地存储`，允许您为特定用例构建 UI。


1. 编写类函数组件1
```jsx
// page.js
export default class Mypage extends Component {
  constructor() {
    super()
  }
  render() {
    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      demo1
    </main>
    )
  }
}
```

2. 编写生命周期类组件

- 生命周期介绍
```jsx
 // constructor构造函数被创建时调用
  constructor(props) {super(props)}
  // 组件被挂载到 DOM 后调用
  componentDidMount() {}
  // 静态方法 合并state数据
  static getDerivedStateFromProps(nextProps, prevState) {}
  // 组件接收到新的 props 或 state 时调用
  // 返回 true 表示需要重新渲染组件，返回 false 表示不需要重新渲染
  shouldComponentUpdate(nextProps, nextState) {}
  // 在组件完成更新后调用
  componentDidUpdate(prevProps, prevState, snapshot) {}
  // 组件即将被卸载时调用。用于清理定时器、取消网络请求等清理工作。
  componentWillUnmount() {}
  // 渲染函数： 通过渲染函数导出
  render() {return(<div>Parent2</div>)}
  
```

- 场景一
```jsx
// 定义父组件
class Parent extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log('Parent')
    return (<div>
      父节点
      <Children />
      </div>)
  }
}
// 定义字组件
class Children extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log('Children')
    return (<div>子阶段</div>)
  }
}
```

- 场景二
```jsx
"use client"
import React, { Component } from 'react';

class Parent extends Component {
  constructor(props) {
    super(props);
    console.log('Parent--constructor');
    this.state = {
      count: 0
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('Parent--getDerivedStateFromProps');
    if (nextProps.count !== prevState.count) {
      return { count: nextProps.count };
    }
    return null;
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

  render() {
    console.log('Parent--render');
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        demo1
        <Children></Children>
      </main>
    );
  }
}

class Children extends Component {
  constructor(props) {
    super(props);
    console.log('Children--constructor');
  }

  componentDidMount() {
    console.log('Children--componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Children--shouldComponentUpdate');
    return this.state.count !== nextState.count;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Children--componentDidUpdate');
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
 

```
> Parent--constructor
> installHook.js:1 Parent--constructor
> page.js:14 Parent--getDerivedStateFromProps
> installHook.js:1 Parent--getDerivedStateFromProps
> page.js:40 Parent--render
> installHook.js:1 Parent--render
> page.js:53 Children--constructor
> installHook.js:1 Children--constructor
> page.js:74 Children--render
> installHook.js:1 Children--render
> page.js:57 Children--componentDidMount
> page.js:70 Children--componentWillUnmount
> page.js:36 Parent--componentWillUnmount
> page.js:57 Children--componentDidMount
- 这种情况下，并不是真正的组件销毁，而是热更新导致的组件替换。在生产环境中，这样的现象不会发生，因为热更新通常只在开发环境中启用。

- 场景三
 计数+++
```jsx

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


```