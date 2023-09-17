import './globals.css'
import { Inter,Roboto} from 'next/font/google'

const roboto = Roboto({ weight: ['400','700'], subsets: ['latin'] })

export const metadata = {
  title: 'Blogomania',
  description: 'Aplikacja do umieszczania blogów ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={`${roboto.className} dark`}>{children}</body>
    </html>
  )
}
