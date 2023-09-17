import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter,Roboto} from 'next/font/google'
import Footer from '@/components/footer/Footer'

const roboto = Roboto({ weight: ['400','700'], subsets: ['latin'] })

export const metadata = {
  title: 'Blogomania',
  description: 'Aplikacja do umieszczania blogów ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={`${roboto.className} dark`}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
