"use client";
import { useDispatch, useSelector, connect } from "react-redux";

function CounterControl(props) {
  const dispatch = useDispatch();
  const { count, name, age, updateAge, updateCount, gender} = props;

  return (
    <div>
      <h1>场景一： report2  优化代码</h1>
      <br></br>
      <div variant="h1">姓名:{name}</div>
      <div variant="h1">年龄:{age}</div>
      <div variant="h1">数量:{count}</div>
      <div>性别: {gender}</div>
      <div>
        <button variant="outlined" onClick={() =>{updateAge(1)}}>
          加年龄
        </button>
        ----
        <button variant="outlined" onClick={() => {updateCount(1)}}>
          加数量
        </button>
      </div>
    </div>
  );
}

// 缺陷：modules状态多的时候写起来比较麻烦
// const mapStateToProps = (state) => ({
//   count: state.report2.count,
//   name: state.report2.name,
//   age: state.report2.age,
// })

// 优化report
const mapStateToProps = ({report2}) => ({
  ...report2
})

// 官网写法
// const mapDispatchToProps = (dispatch) => ({
//   updateCount: dispatch.report2.updateCount,
//   updateAge:dispatch.report2.updateAge
// })
// 优化
const mapDispatchToProps = ({report2}) => ({
  ...report2
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterControl)