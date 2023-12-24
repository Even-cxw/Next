"use client";
import { useDispatch, useSelector, connect } from "react-redux";
import { useRouter } from 'next/navigation'
function CounterControl(props) {
  const dispatch = useDispatch();
  const { count, name, age, updataState, gender} = props;
  const router = useRouter()
  const addAge = () => {
    let newAge =age + 1;
    updataState({age:newAge})
  }

  const addCount = () => {
    let newCount =count + 1;
    updataState({count:newCount})
  }

  const routerGo = () => {
    router.push('/redux4', { scroll: false })
  }

  return (
    <div>
      <h1>场景一： report6  优化代码</h1>
      <br></br>
      <div variant="h1">姓名:{name}</div>
      <div variant="h1">年龄:{age}</div>
      <div variant="h1">数量:{count}</div>
      <div>性别: {gender}</div>
      <div>
        <button variant="outlined" onClick={addAge}>
          加年龄
        </button>
        ----
        <button variant="outlined" onClick={addCount}>
          加数量
        </button>
        ----
        <button variant="outlined" onClick={routerGo}>
          uerRouter路由跳转
        </button>
      </div>
    </div>
  );
}

// 优化
export default connect(
  ({report6}) =>({...report6}), 
  ({report6}) =>({...report6})
)(CounterControl)