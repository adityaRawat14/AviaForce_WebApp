"use client"

import { EditorContent, useEditor } from '@tiptap/react';
import MenuBar from '@/components/Editor/MenuBar';
import EditorSkeleton from '@/components/blog/EditorSkeleton';
import TiptapConfig from '@/components/Editor/EditorConfigs/tiptap.config';
function page() {
  const editor = useEditor({
    editable:true,
   content:`<h1>Write your story ..</h1>`,
  ...TiptapConfig
  });
if(!editor){
  return(
    <div className='h-[70vh] px-[3rem] bg-blue-100'>
      <EditorSkeleton />    
    </div>
 
  )

}
  return (
      <div className='   bg-blue-100     '>
     <MenuBar className="sticky top-0 z-10 bg-blue-100  w-full " editor={editor} />
    <div className=' flex justify-center'>
   
  <div className="flex mb-[20vh] shadow-lg rounded-lg overflow-hidden ">      
    <EditorContent  className=" focus:outline-none px-[4rem] pt-4 pb-[3rem] h-[75vh] lg:w-[880px] md:w-[600px] w-[80vw] bg-blue-50 overflow-y-auto blog-scrollbar" editor={editor}    />    
    </div>
   </div>
      </div>
  )
}

export default page