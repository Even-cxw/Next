// import '@/styles/index.css'
import { Provider } from "react-redux";
import store from "@/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp

/**
 * @desc 用于包装整个应用程序的文件
 * 1. 所有的组件都会被包裹📦
 */