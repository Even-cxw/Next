"use client"
import { connect } from 'react-redux'
import {RootState, AppDispatch} from '@/store'
type IProps = RootState["report"] & AppDispatch["report"]

function Component(props:IProps) {
  let {name, age, increment} = props;
  return (
    <div>
      姓名{name} <br/>
      年龄{age} <br/>
      <button onClick={() =>{increment(1)}}>+</button>
    </div>
  )
}

// 优化
export default connect(
  ({report}:RootState) =>({...report}), 
  ({report}:AppDispatch) =>({...report})
)(Component)