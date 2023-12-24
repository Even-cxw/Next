"use client";
import { useDispatch, useSelector, connect } from "react-redux";

function CounterControl(props) {
  const dispatch = useDispatch();
  const { count, name, age } = props;

  return (
    <div>
      <h1>场景一： report1  </h1>
      <h2>1. reducers更新sate</h2>
      <br></br>
      <div variant="h1">姓名:{name}</div>
      <div variant="h1">年龄:{age}</div>
      <div variant="h1">数量:{count}</div>
      <div>
        <button variant="outlined" onClick={() =>{dispatch.report1.updateAge(1)}}>
          加年龄
        </button>
        ----
        <button variant="outlined" onClick={() => {dispatch.report1.updateCount(1)}}>
          加数量
        </button>
      </div>
    </div>
  );
}

// 缺陷：modules状态多的时候写起来比较麻烦
const mapStateToProps = (state) => ({
  count: state.report1.count,
  name: state.report1.name,
  age: state.report1.age,
})

const mapDispatchToProps = (dispatch) => ({
  updateCount: dispatch.report1.updateCount,
  updateAge:dispatch.report1.updateAge
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterControl)