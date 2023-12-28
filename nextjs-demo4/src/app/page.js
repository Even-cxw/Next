"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from 'antd';
import { useEffect } from 'react';
export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.push('/dashboard', { scroll: false })
  }, [])
  return ''
}
