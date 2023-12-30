"use client"
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    let token = localStorage.getItem('nextToken')
    if (!token) {
      router.push('/login', { scroll: false })
    } else {
      router.push('/dashboard', { scroll: false })
    }
  }, [])

  return ''
}
