import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'
export const metadata: Metadata = {
  title: "Zoom 2.0",
  description: "App created by Vishwas Kanchan Vaidya",
  icons:{
    icon: '/icons/logo.svg'
  }
};
const RootLayout = ({children}:{children:ReactNode}) => {
  return (
    <main>
      <StreamVideoProvider>
      {children}
      </StreamVideoProvider>
    </main>
  )
}

export default RootLayout