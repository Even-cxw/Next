import Image from 'next/image'
import { Button } from 'antd';
import st from './style.module.scss'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={st.name}>
          测试样式
      </div>
    </main>
  )
}
