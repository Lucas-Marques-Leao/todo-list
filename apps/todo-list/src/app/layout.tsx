import { LoadingProvider } from '../contexts/LoadingContext'
import SessionContextProvider from '../contexts/SessionContext'
import '../styles/index.css'

import React from 'react'

interface RootLayoutProps {
  children: React.ReactNode
}
const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col">
          <LoadingProvider>
            <SessionContextProvider>
              <div className="flex flex-col items-center justify-center">{children}</div>
            </SessionContextProvider>
          </LoadingProvider>
        </main>
      </body>
    </html>
  )
}

export default RootLayout
