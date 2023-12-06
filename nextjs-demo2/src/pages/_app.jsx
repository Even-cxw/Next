// import '@/styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="nihao">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

/**
 * @desc 用于包装整个应用程序的文件
 * 1. 所有的组件都会被包裹📦
 */