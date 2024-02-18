"use client"
import React, { useState } from 'react'
import Logo from './Logo'
import { Gamepad, Gamepad2Icon, MonitorCheck, Pencil } from 'lucide-react'
import Link from 'next/link'
import { Themetoggle } from './ui/Themetoggle'


type Props = {
}  

const NavHeader = ({}: Props) => {
  return (
    <>
      <header className='sticky top-0 z-50 backdrop-blur-sm mx-auto'>
        <nav className='flex max-w-6xl gap-2 flex-col sm:flex-row items-center p-5 pl-2 bg-none mx-auto'>
          <Logo/>
          <div className='flex-1 flex items-center justify-end space-x-4'>
            <div className='flex gap-0 bg-secondary p-4 mr-0 rounded-lg'>
              <Themetoggle/>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default NavHeader