import Link from 'next/link'
import swagPhotos from '../photos'
import Image from 'next/image'

export default function Home() {
  const photos = swagPhotos

  return (
    <main className="container mx-auto">
      <h1 className="text-center text-4xl font-bold m-10">NextGram</h1>
      <Link href={`/login`}>denglu</Link>
    </main>
  )
}
