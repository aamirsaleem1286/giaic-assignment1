import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
       <nav className="bg-blue-500 text-white p-4">
      <ul className="flex space-x-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/job">Job</Link></li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar
