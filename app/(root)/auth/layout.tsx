import React from 'react'
import { BackgroundGradientAnimationDemo } from '@/components/auth-components/BackgroundGradietAnimation';

function layout({children}:{children:React.ReactNode}) {
  return (
    <div className='bg-gray-300 h-screen w-screen  px-10 py-10 flex  shadow-[5px_5px_15px_2px_#1a202c]   justify-center   '>
         <main className=" hidden  md:block w-full  border-gray-500"  >
        <BackgroundGradientAnimationDemo/>
      </main>
        {children}
        </div>
  )
}

export default layout