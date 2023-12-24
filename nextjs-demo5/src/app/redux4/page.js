"use client";
import { useDispatch, useSelector, connect } from "react-redux";
import { useRouter } from 'next/router';

function CounterControl(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { count, name, report3Age, updataState, gender, report3UpdataState} = props;

  const addAge = () => {
    let newAge = report3Age + 1;
    report3UpdataState({age:newAge})
  }

  const addCount = () => {
    let newCount =count + 1;
    updataState({count:newCount})
  }

  return (
    <div>
      <h1>场景一： report4  优化代码</h1>
      <br></br>
      <div variant="h1">姓名:{name}</div>
      <div variant="h1">年龄:{report3Age}</div>
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
        <button variant="outlined" onClick={() => {router.push('/report3');}}>
          跳转到report3
        </button>
      </div>
    </div>
  );
}

// 优化
export default connect(
  ({report4, report3}) =>({...report4, report3Age: report3.age}), 
  ({report4, report3}) =>({...report4, report3UpdataState:report3.updataState})
)(CounterControl)