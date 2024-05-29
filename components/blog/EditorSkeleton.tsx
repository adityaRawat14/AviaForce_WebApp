import React from 'react'

function EditorSkeleton() {
  return (
    <div>
    <div className="w-full h-14 flex gap-3 px-4 border-b border-blue-200 items-center animate-pulse" >
      <div className="bg-blue-300  h-[2rem] w-[2rem] rounded-md "></div>
      <div className="bg-blue-400  h-[2rem] w-[2rem] rounded-md "></div>
      <div className="bg-blue-300  h-[2rem] w-[2rem] rounded-md "></div>
      <div className="bg-blue-300  h-[2rem] w-[2rem] rounded-md "></div>
      <div className="bg-blue-300  h-[2rem] w-[2rem] rounded-md "></div>
      <div className="bg-blue-400  h-[2rem] w-[2rem] rounded-md "></div>
      <div className="bg-blue-300  h-[2rem] w-[2rem] rounded-md "></div>
      <div className="bg-blue-300  h-[2rem] w-[2rem] rounded-md "></div>
      <div className="bg-blue-300  h-[2rem] w-[2rem] rounded-md "></div>
      <div className="bg-blue-300  h-[2rem] w-[2rem] rounded-md "></div>
      <div className="bg-blue-300  h-[2rem] w-[2rem] rounded-md "></div>
      <div className="bg-blue-300  h-[2rem] w-[2rem] rounded-md "></div>
      <div className="bg-blue-400  h-[2rem] w-[2rem] rounded-md "></div>
      <div className="bg-blue-300  h-[2rem] w-[2rem] rounded-md "></div>
      <div className="bg-blue-200  h-[2rem] w-[2rem] rounded-md "></div>
    </div>
    <div className=' animate-pulse flex justify-center py-3 px-3 '>
        <div className='flex flex-col w-[60vw] gap-4'>
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

export default EditorSkeleton