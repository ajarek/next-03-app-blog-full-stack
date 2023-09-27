import Button from '@/components/Button/Button';
import Image from 'next/image'
import Hero from "public/hero.png";
export default function Home() {
  return (
    <main className="full-screen grid  grid-cols-2 gap-2 px-10 py-5    ">
     <div className=' flex flex-col justify-between'>
      <h1 className='text-6xl tracking-wide title-color'>Lepszy projekt <br />twoich produktów cyfrowych.</h1>
      <p className='text-2xl'>Zamień swój pomysł w rzeczywistość. <br /> Zrzeszamy zespoły z globalnej branży <br />technologicznej.</p>
      <Button text={'Zobacz Nasze Prace'} url={'/portfolio'}/>
     </div>
     <div className=' img-motion  flex justify-center items-center'>
      <Image src={Hero} alt="hero" style={{
        width: 'auto',
        height: '100%',
      }} priority={true}
       /></div>
    </main>
  )
}
