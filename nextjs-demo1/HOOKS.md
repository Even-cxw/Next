
# hooks
[hooks](https://zh-hans.react.dev/reference/react/useState)

## useEffect

```js
"use client"
import React, { useEffect, useState } from 'react';

function Home() {
  const [count, setCount] = useState(1)

  //不传递数组
  useEffect(() => {
    console.log('不传递数组');
    return () => {console.log('不传递数组 - clearSetup')}
  })

  // 传递空数组
  useEffect(() => {
    console.log('空数组');
    return () => {console.log('空数组 - clearSetup')}
  }, [])

  // 传递依赖项数组
  useEffect(() => {
    // 相关逻辑代码
    console.log('传递依赖项数组', count);
    return () => {console.log('传递依赖项数组 - clearSetup')}
  }, [count])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{count}</div>
      <button onClick={() => {setCount(prevCount => prevCount + 1)}}>+</button>
    </main>
  )
}
export default Home;

```

## hooks性能测试

```js
"use client"
import React, { useEffect, useState } from 'react';

function Home() {
  const [count, setCount] = useState(1)

  //不传递数组
  useEffect(() => {
    console.log('不传递数组');
    return () => {console.log('不传递数组 - clearSetup')}
  })

  // 传递空数组
  useEffect(() => {
    console.log('空数组');
    return () => {console.log('空数组 - clearSetup')}
  }, [])

  // 传递依赖项数组
  useEffect(() => {
    // 相关逻辑代码
    console.log('传递依赖项数组', count);
    return () => {console.log('传递依赖项数组 - clearSetup')}
  }, [count])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{count}</div>
      <button onClick={() => {setCount(prevCount => prevCount + 1)}}>+</button>
      <Children />
    </main>
  )
}

export default Home;


function Children() {
  const [age, setAge] = useState(1)

   //不传递数组
   useEffect(() => {
    console.log('Children--不传递数组');
    return () => {console.log('Children--不传递数组 - clearSetup')}
  })

  // 传递空数组
  useEffect(() => {
    console.log('Children--空数组');
    return () => {console.log('Children--空数组 - clearSetup')}
  }, [])

  // 传递依赖项数组
  useEffect(() => {
    // 相关逻辑代码
    console.log('Children--传递依赖项数组', age);
    return () => {console.log('Children--传递依赖项数组 - clearSetup')}
  }, [age])

  return(
    <div>
      {age}
      <button onClick={() => {setAge(prevAge => prevAge + 1)}}>Add</button>
    </div>
  )
}
```