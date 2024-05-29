import BlogCard from '@/components/blog/BlogCard'
import { Input } from '@/components/ui/input'
import { IoMdSearch } from "react-icons/io";
import React from 'react'
import { Button } from '@/components/ui/button';
import { FaWizardsOfTheCoast } from 'react-icons/fa';
import { IoCreateOutline } from 'react-icons/io5';
import Link from 'next/link';

function page() {
  return (
    <div className='h-screen bg-blue-100 px-5 w-screen  '>
     <nav className='flex justify-between items-center w-full px-5 py-3  mb-8'>
     <div className='flex justify-between flex-grow'>
     <div className='border-b border-blue-200 '>
        <Button className='bg-transparent  rounded-none   text-blue-800 transition-all duration-100 hover:border-b border-blue-900 hover:bg-transparent  '>For You</Button>
        <Button className='bg-transparent  rounded-none   text-blue-800 transition-all duration-100 hover:border-b border-blue-900 hover:bg-transparent  '>Latest </Button>
        <Button className='bg-transparent  rounded-none   text-blue-800 transition-all duration-100 hover:border-b border-blue-900 hover:bg-transparent  '>Following</Button>
      </div>
     <Link href={'/blogs/write'}> <Button className='bg-transparent  rounded-none   text-blue-800 transition-all duration-100 hover:border-b border-blue-900 hover:bg-transparent  flex  gap-3 items-center'><span>Write</span>  <IoCreateOutline size={24} className="text-blue-900 hover:text-blue-800 cursor-pointer" /> </Button></Link>
     </div>
      <div className='flex  items-center bg-blue-200 rounded-md mx-1 lg:mx-6 pl-3'>
      <IoMdSearch className='text-blue-800' size={33} />
      <Input placeholder='Search...' className=' text-blue-800 bg-transparent focus:w-[30rem] border-none transition-all duration-150 placeholder:text-blue-700'/>
      <Button className='bg-blue-800 hover:bg-blue-900'>Search</Button>
      </div>
     </nav>
        <BlogCard />
    </div>
  )
}

export default page



