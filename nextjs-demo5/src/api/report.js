

// 模拟接口
export let apiLoad = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(12)
    }, 1000)
  })
}
