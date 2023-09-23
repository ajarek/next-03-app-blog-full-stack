import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  
  return (
    <div className={'flex flex-col p-10 gap-6'}>
      {data.map((item) => (
        <Link href={`/blog/${item._id}`} className={'flex items-center shadow-sm shadow-slate-300 p-4'} key={item._id}>
          <div className={'img-blog '}>
            <Image
              src={item.img}
              alt=""
              fill
              sizes="100%"
              className={'img-color '}
            />
          </div>
          <div className={'ml-8 p-4'}>
            <h1 className={'text-xl uppercase'}>{item.title}</h1>
            <p className={''}>{item.desc}</p>
            <p className={''}>{item.content}</p>
            <p className={''}>{item.username}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
