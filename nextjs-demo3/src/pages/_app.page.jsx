// import '@/styles/print-reset.scss';
// import store from "@/store";
// import { Provider } from "react-redux";

function App({ Component, pageProps }) {
  return (
    // 将 Redux 的 store 注入整个应用程序
    // <Provider >
      <Component {...pageProps} />
    // </Provider>
  );
}

export default App;


/**
 * @desc这段代码是一个 Next.js 应用程序中的主要入口文件，
 * @desc它的主要作用是将整个应用程序包裹在 Redux 的 <Provider> 组件中，以便整个应用程序都可以访问 Redux 的状态。
 * 
 */