import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  const images=['/websites.jpg','/illustration.png','/about-photo.webp','/apps.jpg']
  return (
    <div className={'flex flex-col p-10 gap-6'}>
      {data.map((item) => (
        <Link href={`/blog/${item.id}`} className={'flex items-center shadow-sm shadow-slate-300 p-4'} key={item.id}>
          <div className={'img-blog '}>
            <Image
              src={images[ Math.floor(Math. random() * images. length)]}
              alt=""
              fill
              className={'img-color '}
            />
          </div>
          <div className={'ml-8 p-4'}>
            <h1 className={'text-xl uppercase'}>{item.title}</h1>
            <p className={''}>{item.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
