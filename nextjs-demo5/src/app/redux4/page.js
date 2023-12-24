"use client";
import { useDispatch, useSelector, connect } from "react-redux";

function CounterControl(props) {
  const dispatch = useDispatch();
  const {count, loadDatta, updateCount} = props;
  // console.log('props',props);
  const handleChangeCounter = (type) => {
    loadDatta().then(res => {
      // console.log('count', count);
      debugger;
    })
  };

  return (
    <div>
      <h1>场景一： redux -  </h1>
      <h2>1. effects中调用接口后执行reducers</h2>
      <h2>2.reducers更新视图</h2>
      <div variant="h1">{count}</div>
      <div>
        <button variant="outlined" onClick={() => handleChangeCounter("ADD")}>
          ADD
        </button>
        <button
          variant="outlined"
          onClick={() => handleChangeCounter("MINUS")}
          sx={{ ml: 2 }}
        >
          MINUS
        </button>
      </div>
    </div>
  );
}

// 官网写法
// const mapStateToProps = (state) => ({
//   count: state.report.count
// })

// 升级写法
const mapStateToProps = ({report}) => ({
  ...report
})

// 官网写法
// const mapDispatchToProps = (dispatch) => ({
//   countUpBy: dispatch.report.upBy,
//   apicountUpBy: dispatch.report.loadDatta,
// })
// 升级写法
const mapDispatchToProps = ({report}) => {
  console.log('report',report)
  return {
    ...report
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CounterControl)