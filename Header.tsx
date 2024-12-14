import React from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { ShoppingCart, Sofa } from 'lucide-react'

const Header = () => {
  return (
    <div className='w-full flex border-b-2 p-4'>
        
        <div className='max-w-7xl ml-20 mx-auto flex items-center justify-between px-4 '>
    
          <div className='bg-teal-500 text-white p-2 rounded-md'>
            <Sofa />
          </div>
          <h1 className='font-medium text-[26px] leading-[31.2px]'>
            Comforty
          </h1>
        </div>
        
    
        <div className='mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 mt-4 lg:mt-0'>
          <p className='flex items-center gap-2'>
            <ShoppingCart />
            <Input placeholder='Cart' className='bg-[#FFFFFF] rounded justify-end w-full sm:w-auto' />
          </p>
        </div>
    </div>
  )
}

export default Header
