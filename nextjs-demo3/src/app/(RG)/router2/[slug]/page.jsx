"use client"
const { useEffect } = require("react");

function CounterControl(props) {
  const { params } = props;
  useEffect(() => {
    console.log('params', params);
  }, [])

  return (
    <div>
      测试动态路由 - {params.slug}
    </div>
  );
}

export default CounterControl