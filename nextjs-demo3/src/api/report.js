

// 模拟接口
export let apiLoad = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name:'apiEven',
        age: 5,
        gender: '男',
        count: 5
      })
    }, 1000)
  })
}
