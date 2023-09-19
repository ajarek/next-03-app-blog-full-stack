import Link from 'next/link'

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className='px-5 py-3 cursor-pointer bg-emerald-600 text-white rounded-md'>{text}</button>
    </Link>
  )
}

export default Button
