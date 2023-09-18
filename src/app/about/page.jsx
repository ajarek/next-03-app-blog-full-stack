import Image from 'next/image'
import Button from '@/components/Button/Button'
import Photo from 'public/about-photo.webp'

const About = () => {
  return (
    <div className='min-h-screen p-10'>
      <div className='h-80 w-full'>
        <Image
          src={Photo}
          alt=''
          className='img'
        />
      </div>
      <div className='grid grid-cols-2 gap-10 my-6'>
        <div>
          <h2 className='text-3xl mb-2'>Kim Jesteśmy?</h2>
          <p className='text-lg text-justify'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima,
            maxime voluptatum. Facilis minima sit provident, commodi qui modi
            pariatur, voluptatibus eius vero aspernatur dolores ipsam.
            Perferendis perspiciatis ullam repellat delectus.
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?.
          </p>
        </div>
        <div>
          <h2 className='text-3xl mb-2'>Co Robimy?</h2>
          <p className='text-lg text-justify'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima,
            maxime voluptatum. Facilis minima sit provident, commodi qui modi
            pariatur, voluptatibus eius vero aspernatur dolores ipsam.
            Perferendis perspiciatis ullam repellat delectus.
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?.
          </p>
        </div>
      </div>
      <Button url="/contact" text="Kontakt" />
    </div>
  )
}

export default About
