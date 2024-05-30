import React from 'react'

function layout({children}:{children:React.ReactNode}) {
  return (
    <div className=' w-screen  min-h-[200vh] bg-blue-100  '>{children}</div>
  )
}

export default layout