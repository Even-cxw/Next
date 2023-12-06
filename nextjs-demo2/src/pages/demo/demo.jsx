import Image from 'next/image'
import { useSelector } from "react-redux";

export default function Home3() {
  const { num } = useSelector((state) => state.count);

  return (
      <div>
        demo - {num}
      </div>
  )
}
