import './globals.css'
import Navigation from '@/src/components/navigation'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
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
  )
}
