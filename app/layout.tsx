import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gamer Tag',
  description: 'Discover more with games!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headers = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png']
  const randHeader = Math.floor(Math.random() * 7)
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className=''>
          <img src={headers[randHeader]} alt="Page Header" className='object-cover h-52 w-full'/>
        </header>
        {children}
      </body>
    </html>
  )
}
