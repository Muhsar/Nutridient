import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href='/'>
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img alt='' src='/logo.png' className=' h-20' />
    </a>
        </Link>
  </div>
</header>

  )
}
