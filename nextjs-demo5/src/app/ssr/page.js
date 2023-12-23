"use client"
import Image from 'next/image';

export default function Home() {
  // 在客户端渲染时输出
  if (typeof window !== 'undefined') {
    console.log('window', window);
  }

  return (
    <main>
      ssr
    </main>
  );
}
