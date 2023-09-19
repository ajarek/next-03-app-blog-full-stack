import Link from "next/link"


const Portfolio = () => {
  return (
    <div className={''}>
    <h1 className={'text-xl'}>Choose a gallery</h1>
    <div className={'grid grid-cols-3 gap-10 mt-5 place-items-center '}>
      <Link href="/portfolio/illustrations" className={'item'}>
        <span className={'title'}>Illustrations</span>
      </Link>
      <Link href="/portfolio/websites" className={'item'}>
        <span className={'title'}>Websites</span>
      </Link>
      <Link href="/portfolio/applications" className={'item'}>
        <span className={'title'}>Application</span>
      </Link>
    </div>
  </div>
  )
}

export default Portfolio