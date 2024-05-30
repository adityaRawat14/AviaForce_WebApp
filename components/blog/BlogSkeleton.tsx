import React from 'react'

function BlogSkeleton() {
  return (
    <div>
         <div className=' animate-pulse flex justify-center  py-3 px-3 '>
        <div className='flex flex-col w-[40rem]  gap-4'>
          <div className='w-[60%] bg-blue-300 h-12 rounded-md'></div>
          <div className='w-[50%] bg-blue-200 h-12 rounded-md'></div>
          <div className='w-full flex gap-4'>
            <div className='h-8 w-8 rounded-full bg-blue-300'>

            </div>
          <div className='w-[20%] bg-blue-200 h-6 rounded-md'></div>
          </div>
          <div className='w-[30%] bg-blue-400 h-6 rounded-md'></div>
          <div className='w-[80%] bg-blue-200 h-6 rounded-md'></div>
          <div className='w-[60%] bg-blue-300 h-6 rounded-md'></div>
          <div className='w-[10%] bg-blue-200 h-6 rounded-md'></div>
          <div className='w-[30%] bg-blue-300 h-6 rounded-md'></div>
          <div className='w-[50%] bg-blue-200 h-6 rounded-md'></div>
          <div className='w-[20%] bg-blue-200 h-6 rounded-md'></div>
          <div className='w-[30%] bg-blue-400 h-6 rounded-md'></div>
          <div className='w-[80%] bg-blue-200 h-6 rounded-md'></div>
          <div className='w-[60%] bg-blue-300 h-6 rounded-md'></div>
          <div className='w-[10%] bg-blue-200 h-6 rounded-md'></div>
        </div>
      </div>
    </div>
  )
}

export default BlogSkeleton