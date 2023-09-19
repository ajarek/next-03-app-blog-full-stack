import Button from '@/components/Button/Button'
import Image from 'next/image'
import Photo from 'public/contact.png'
const Contact = () => {
  return (
    <div className='full-screen p-10'>
      <h1 className={'text-3xl text-center'}>Bądźmy w kontakcie</h1>
      <div className=' grid grid-cols-2 gap-10 mt-10'>
        <div className='h-96  img-motion  flex justify-center items-center '>
          
          <Image
            src={Photo}
            alt=''
            
            className='img-color'
          />
        </div>
        <div className=''>
          <form className={'w-full flex flex-col'}>
          <input type="text" placeholder="Imie  Nazwisko" className={'input'} />
          <input type="text" placeholder="email" className={'input'} />
          <textarea
            className={'textarea'}
            placeholder="wiadomość"
            cols="30"
            rows="8"
          ></textarea>
          <Button url="#" text="Wyślij"/>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
