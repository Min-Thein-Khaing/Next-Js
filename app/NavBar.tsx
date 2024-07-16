'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  const {status,data:session} =useSession()
  return (
    <div className='flex gap-5 p-5 bg-amber-100 text-emerald-500'>
        <Link href="/">Next.js</Link>
        <Link href="/users">Users</Link>
        {status === "loading" && <div>loading...</div> }
        {status === "authenticated" && <div>
          {session.user?.name}
          <Link href="api/auth/signout" className=''>sign out</Link>
        </div> }
        {status === "unauthenticated" && <Link href="api/auth/signin">sign in</Link>}
        
    </div>
  )
}

export default NavBar