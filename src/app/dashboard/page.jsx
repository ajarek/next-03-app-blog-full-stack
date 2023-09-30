'use client'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import useSWR from "swr";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
const Dashboard = () => {
  const session = useSession()
  const router = useRouter();


//STARY SPOSÓB POBIERANIA DANYCH:

  // const [data, setData] = useState([])
  // const [err, setErr] = useState(false)
  // const [isLoading, setIsLoading] = useState(false)
  // useEffect(() => {
  //   async function getData() {
  //     setIsLoading(true)
  //     const res = await fetch(`/api/posts?username=${session?.data?.user.name}`, {
  //       cache: 'no-store',
  //     })

  //     if (!res.ok) {
  //       setErr(true)
  //     }
  //     const data = await res.json()
  //     setData(data)
  //     console.log(data);
  //     setIsLoading(false)
  //   }
  //   getData()
  // }, [])

  //NOWY SPOSÓB POBIERANIA DANYCH:

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );


 
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
       mutate()
      e.target.reset()
    } catch (err) {
      console.log(err);
    }
  }

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate()
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  if (session.status === "authenticated") {
  return (
  <div className= 'min-h-screen flex flex-col  items-center px-10'>
    <div className='text-white'>Witaj: {session.data.user.name}</div>
    <div className='text-white'>Email: {session.data.user.email}</div>
    <div className=' w-full grid grid-cols-2 gap-4 place-items-start mt-8'>
    <div className={'  w-full  flex flex-col gap-4'}>
      <h1>Twoje posty:</h1>

          {isLoading
            ? "loading..."
            : data?.map((post) => (
              <Link href={`/blog/${post._id}`}>
                <div className={' flex items-center justify-between border-2 border-green-600 p-4'} key={post._id}>
                  <div className={'img-list '}>
                    <Image src={post.img} alt="" fill
              sizes="100%"
              className={'img-no-filter '}  />
                  </div>
                  <h2 className={''}>{post.title}</h2>
                  <span
                    className={'cursor-pointer'}
                    onClick={() => handleDelete(post._id)}
                  >
                    ❌
                  </span>
                </div>
                </Link>
              ))}
        </div>
        <div className='w-full  flex justify-center'>
    <form className={'w-80 flex flex-col '} onSubmit={handleSubmit}>
          <h1 className='mb-4'>Dodaj Nowy Post</h1>
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
        </div>
  </div>
  )
  }
}

export default Dashboard
