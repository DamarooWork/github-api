import './globals.css'
import Navigation from '@/src/components/navigation'
import StoreProvider from './StoreProvider'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <head>
          <title>Github api</title>
          <link rel="icon" href="/icon.png" type="image/png" />
        </head>

        <body>
          <Navigation />
          <main>{children}</main>
        </body>
      </html>
    </StoreProvider>
  )
}
