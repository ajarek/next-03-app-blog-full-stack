import Link from 'next/link'

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className='p-5 cursor-pointer bg-emerald-600 text-white rounded-md'>{text}</button>
    </Link>
  )
}

export default Button
