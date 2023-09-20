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
      <div className={'grid grid-cols-3 gap-10 mt-5 place-items-center'}>
        {data.map((item) => (
          <div
            key={item.id}
            className=''
          >
            <div className={''}>
              <p className={'mb-2'}>{item.desc}</p>
              <Button
                text='Zobacz więcej'
                url='#'
              />
            </div>
            <div className='imgContainer mt-4 '>
              <h1 className='position-absolute'>{item.title}</h1>
              <Image
                className={'img-no-filter'}
                fill
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
