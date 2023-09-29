'use client'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation";
const Dashboard = () => {
  const [data, setData] = useState([])
  const [err, setErr] = useState(false)
  const [isLoading, setIsLoading] = useState(false)


  const session = useSession()
  const router = useRouter();
  

  useEffect(() => {
    async function getData() {
      setIsLoading(true)
      const res = await fetch(`/api/posts?username=${session?.data?.user.name}`, {
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
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
       
      });
     
      e.target.reset()
      router?.push("/blog")
    } catch (err) {
      console.log(err);
    }
  }

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }
  if (session.status === "authenticated") {
  return (
  <div className= 'full-screen flex flex-col  items-center'>
    <div className='text-white'>Witaj: {session.data.user.name}</div>
    <div className='text-white'>Email: {session.data.user.email}</div>
    
    <form className={'w-80 flex flex-col '} onSubmit={handleSubmit}>
          <h1>Dodaj Nowy Post</h1>
          <input type="text" placeholder="Title" className={'input'} />
          <input type="text" placeholder="Desc" className={'input'} />
          <input type="text" placeholder="Image" className={'input'} />
          <textarea
            placeholder="Content"
            className={'mb-4 textarea '}
            cols="30"
            rows="5"
          ></textarea>
          <button className={'w-80 h-12 bg-green-500'}>Send</button>
        </form>
  </div>
  )
  }
}

export default Dashboard
