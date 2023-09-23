import Button from '@/components/Button/Button'
import Image from 'next/image'
import { items } from './data.js'
import { notFound } from 'next/navigation'

const getData = (cat) => {
  const data = items[cat]

  if (data) {
    return data
  }

  return notFound()
}

const Category = ({ params }) => {
  const data = getData(params.category)
  return (
    <div className=''>
      <h1 className={''}>{params.category}</h1>
      <div className={'flex flex-col gap-8'}>
        {data.map((item) => (
          <div
            key={item.id}
            className='container'
          >
            <div className={'flex-1 flex flex-col justify-evenly px-4'}>
            <h1 className='title'>{item.title}</h1>
              <p className={'text-xl'}>{item.desc}</p>
              <Button
                text='Zobacz więcej'
                url='#'
              />
            </div>
            <div className='imgContainer'>
              
              <Image
                className={'.img-no-filter'}
                fill
                sizes='100%'
                src={item.image}
                alt=''
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category
