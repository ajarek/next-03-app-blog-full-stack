'use client'

import Image from 'next/image'
import { notFound,useRouter } from 'next/navigation'



async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    return notFound()
  }

  return res.json()
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc,
  }
}

const BlogPost = async ({ params }) => {
  const router = useRouter();
  const data = await getData(params.id)

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      router?.push("/blog");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={'full-screen grid  grid-cols-2 gap-2 px-10 py-5 place-items-center'}>
      <div className={''}>
        <Image
          src={data.img}
          alt='img'
          width={600}
          height={600}
        />
      </div>
      <div className={'px-4'}>
        <h1 className={'text-xl uppercase'}>{data.title}</h1>
        <p className={'mt-4'}>{data.desc}</p>
        <p className={'mt-4'}>{data.content}</p>
        <p className={'mt-4'}>Autor: {data.username}</p>
        <button  onClick={() => handleDelete(data._id)}>Usuń ❌</button>
      </div>
      
    </div>
  )
}

export default BlogPost
