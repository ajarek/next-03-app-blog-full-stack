'use client'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation";
const Dashboard = () => {
  const [data, setData] = useState([])
  const [err, setErr] = useState(false)
  const [isLoading, setIsLoading] = useState(false)


  const session = useSession()
  const router = useRouter();
  console.log(session)

  useEffect(() => {
    async function getData() {
      setIsLoading(true)
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        cache: 'no-store',
      })

      if (!res.ok) {
        setErr(true)
      }
      const data = await res.json()
      setData(data)
      setIsLoading(false)
    }
    getData()
  }, [])
 
  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }
  if (session.status === "authenticated") {
  return (
  <div className= 'bg-slate-300 p-10'>
    <Image
    src={session.data.user.image}
    alt='foto'
    width={60}
    height={60}
    />
    <div className='text-black'>{session.data.user.email}</div>
  </div>
  )
  }
}

export default Dashboard
