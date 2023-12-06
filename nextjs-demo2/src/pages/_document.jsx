import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  console.log('Document')
  return (
    <Html lang="zh">
      <Head/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

/**
 * @desc自定义的 HTML 文档结构
 * Html：表示 <html> 标签，用于包裹整个 HTML 文档。
 * Head：表示 <head> 标签，用于包含文档的头部信息，例如页面的标题、样式表、脚本等。
 * Main：表示 <main> 标签，用于包裹页面的主要内容。
 * NextScript：Next.js 提供的组件，用于自动引入所需的脚本，包括用于服务端渲染的脚本等。
 */