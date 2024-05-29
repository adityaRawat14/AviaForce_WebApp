import React, { useCallback,memo, useState, useEffect, useRef } from "react";
import EditorNavButton from "./EditorNavButton";
import {
  FaBold,
  FaItalic,
  FaRedo,
  FaStrikethrough,
  FaUnderline,
  FaUndo,
  FaImages,
  FaLink,
  FaCode,
  FaYoutube,
} from "react-icons/fa";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { AiOutlineFontSize } from "react-icons/ai"; 
import { RiFontFamily } from "react-icons/ri";


import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";

const MenuBar = ({ editor,className }: { editor: any,className?:string }) => {
  const [openImagePopover, setOpenImagePopover] = useState(false);
  const [openUrlPopover,setOpenUrlPopover]=useState(false)
  const [openHeadingDropdown,setOpenHeadingDropdown]=useState(false)
  const [openFontFamilyDropdown,setOpenFontFamilyDropdown]=useState(false)
  const [openYoutubePopover,setOpenYoutubePopover]=useState(false)


  const onSave =async (editor: any) => {
    const editorData = editor.getHTML();
    console.log(editorData);
  };

  const onDiscard=()=>{
    console.log("discard!!")
  }

  const onPublish=()=>{
    console.log("publish!!")
  }






    return (
      <div className={`${className} shadow-md border-blue-300 mb-5  py-2 px-5 border-b flex  justify-between `}>
        <div className="flex  flex-row gap-3">
          <EditorNavButton
            onClick={() => editor.chain().focus().toggleBold().run()}
            isActive={editor.isActive("bold")}

          >
            <FaBold />
          </EditorNavButton>
          <EditorNavButton
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "bg-black" : ""} 
            isActive={editor.isActive("italic")}
            >
              
            <FaItalic />
          </EditorNavButton>
          <FontFamilyDropdown editor={editor} openFontFamilyDropdown={openFontFamilyDropdown} setOpenFontFamilyDropdown={setOpenFontFamilyDropdown}>
      <EditorNavButton 
       isActive={false}
      className="hover:text-white h-full hover:bg-slate-800 transition-all duration-100 px-2  py-1 border-[1px] border-blue-400 rounded-md"
      onClick={()=>{setOpenFontFamilyDropdown(true)}}
      >
        <RiFontFamily />
      </EditorNavButton>
          </FontFamilyDropdown>

          <HeadingDropdown 
          editor={editor}
          openHeadingDropdown={openHeadingDropdown}
          setOpenHeadingDropdown={setOpenHeadingDropdown}
          >

          <EditorNavButton
            className="hover:text-white hover:bg-slate-800 font-semibold transition-all duration-100 px-2  py-4 border-[1px] border-blue-400 rounded-md"
            onClick={()=>{setOpenHeadingDropdown(true)}}
            isActive={false} 
            >
            
          <AiOutlineFontSize />
          </EditorNavButton>
          
          </HeadingDropdown>
          
          <EditorNavButton
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={editor.isActive("underline") ? "bg-blue-300" : ""}
            isActive={editor.isActive("underline")}
          >
            <FaUnderline />
          </EditorNavButton>
          
          <EditorNavButton
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive("strike") ? "bg-blue-300" : ""}
            isActive={editor.isActive("strike")}
          >
            <FaStrikethrough />
          </EditorNavButton>
          
         
         
          <EditorNavButton
            className=" "
            onClick={() => editor.chain().focus().undo().run()}
            isActive={false}
          >
            <FaUndo />
          </EditorNavButton>
          <EditorNavButton
           isActive={false}
            className=" "
            onClick={() => editor.chain().focus().redo().run()}
          >
            <FaRedo />
          </EditorNavButton>

          <ImagePopover
            editor={editor}
            openImagePopover={openImagePopover}
            setOpenImagePopover={setOpenImagePopover} >
          <button
            className={
              "hover:text-white shadow-sm shadow-black  hover:bg-slate-800 transition-all duration-100 px-2  py-1 border-[1px]  rounded-md"
            }
            onClick={() => {
              setOpenImagePopover(true);
            }}
          >
              <FaImages />
            </button>
          </ImagePopover>
          <UrlPopover
           editor={editor} 
          openUrlPopover={openUrlPopover}
          setOpenUrlPopover={setOpenUrlPopover}
          >

          <button
            className="hover:text-white shadow-sm shadow-black hover:bg-slate-800 transition-all duration-100 px-2  py-1 border-[1px]  rounded-md"
            onClick={()=>{setOpenUrlPopover(true)}}
          >
            <FaLink />
          </button>
          </UrlPopover>
          
          <EditorNavButton
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
           isActive={false}
          >
          <MdOutlineHorizontalRule />

          </EditorNavButton>
          <EditorNavButton
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
           isActive={false}
          >
          <FaCode />

          </EditorNavButton>
            <YoutubePopover 
             editor={editor} 
             openYoutubePopover={openYoutubePopover}
             setOpenYoutubePopover={setOpenYoutubePopover} 
            > 
            <button                                      
            onClick={()=>{setOpenYoutubePopover(true)}}
            className="hover:text-white hover:bg-slate-800 transition-all duration-100 px-2  py-1 border-[1px] shadow-sm shadow-black rounded-md"
   >
         <FaYoutube/>
         </button >
            </YoutubePopover>
         
        </div>
        <div className="flex gap-3 ">
          <Button
            onClick={() => onSave(editor)}
            className="px-2 py-1 border  shadow-sm shadow-black bg-transparent  font-semibold rounded-lg hover:bg-slate-800 hover:text-white transition-all duration-100 text-slate-800"
            variant={"outline"}
          >
            Save
          </Button>
          <DisardDialogBox onDiscard={onDiscard}>
          <Button className="px-2 py-1 border shadow-sm shadow-black bg-transparent  font-semibold rounded-lg hover:bg-slate-800 hover:text-white transition-all duration-100 text-slate-800"
          variant={"outline"}
          >
            Discard
          </Button>

          </DisardDialogBox>
          <PublishDialogBox onPublish={onPublish}>
          <Button variant={"outline"} className="px-2 py-1 border bg-transparent  shadow-sm shadow-black  font-semibold rounded-lg hover:bg-slate-800 hover:text-white transition-all duration-100 ">
            Publish
          </Button>
          </PublishDialogBox>
        </div>
      </div>
    );
  
};

export default (MenuBar);

export function ImagePopover({
  children,
  openImagePopover,
  setOpenImagePopover,
  editor,
}: {
  children: React.ReactNode;
  openImagePopover: any;
  setOpenImagePopover: any;
  editor: any;
}) {
  const [imageAttributes, setImageAttributes] = useState({
    src: "",
    width:100,
    height:0,
    alt: "",
  });

  const setImage = () => {
    addImage(editor,imageAttributes)
    toggleImagePopover()
    setImageAttributes({
      src: "",
      width:0,
      height:0,
      alt: "",
    })
  };

  const toggleImagePopover = () => {
    setOpenImagePopover(false);
  };


 
  return (
    <div className="h-full flex justify-center ">
      <Popover open={openImagePopover} >
        <PopoverTrigger asChild>{children}</PopoverTrigger>

        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2 ">
              <div className="flex gap-2 justify-between items-center">
                <h5 className="text-sm">Image Dimensions </h5>
                <div className="flex gap-1">
                  <Button
                    size={"sm"}
                    variant={"outline"}
                    onClick={() => {
                      setOpenImagePopover(false);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button size={"sm"} onClick={setImage}>
                    Done
                  </Button>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
              <span className="w-full   italic text-gray-600 text-[10px]  flex justify-end">consider page size to be 100 so keep width of image accordingly , (100 recommended) </span>
              </p>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="url">Image Url </Label>
                <Input
                  id="url"
                  className="col-span-2 h-8"
                  onChange={(e) => {
                    setImageAttributes({
                      ...imageAttributes,
                      src: e.target.value,
                    });
                  }}
                />
                
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="width">Width</Label>
                <Input
                  id="width"
                  defaultValue={imageAttributes.width}
                  className="col-span-2 h-8"
                  onChange={(e) => {
                    setImageAttributes({
                      ...imageAttributes,
                      width: parseInt(e.target.value),
                    });
                  }}
                />
                
              </div>
             

            
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="height">Alt</Label>
                <Input
                  id="alt"
                  defaultValue={imageAttributes.alt}
                  placeholder="text description of image (one or 2 words)"
                  className="col-span-2 h-8"
                  onChange={(e) => {
                    setImageAttributes({
                      ...imageAttributes,
                      alt: e.target.value,
                    });
                  }}
                />
              </div>
            
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}








const UrlPopover=({children,editor,openUrlPopover,setOpenUrlPopover}:any)=>{
  const [url,setUrl] =useState('')


  const setLink=()=>{
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    setOpenUrlPopover(false)
  }


  return (
    <div>
    <div className="h-full flex justify-center ">
      <Popover open={openUrlPopover} >
        <PopoverTrigger asChild>{children}</PopoverTrigger>

        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2 ">
              <div className="flex gap-2 justify-between items-center">
                <h5 className="text-sm"> HTTP URL </h5>
                <div className="flex gap-1">
                  <Button
                    size={"sm"}
                    variant={"outline"}
                  onClick={()=>{
                    setOpenUrlPopover(false)
                  }}
                  >
                    Cancel
                  </Button>
                  <Button size={"sm"} onClick={setLink} >
                    Done
                  </Button>
                </div>
              </div>
              
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="url">URL  </Label>
                <Input
                  id="url"
                  className="col-span-2 h-8"
                  onChange={(e)=>{setUrl(e.target.value)}}
                />
              </div>


            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
    </div>
  )
}
const YoutubePopover=({children,editor,openYoutubePopover,setOpenYoutubePopover}:any)=>{
  const [vidData,setVidData] =useState({
    url:"",
    height: 300, 
    width: 500
  })



  const setYoutubeLink=()=>{
    editor.commands.setYoutubeVideo({
      src: vidData.url,
      width: (vidData.width) ,
      height:(vidData.height) ,

    }) 
    setOpenYoutubePopover(false)
  }

 

  return (
    <div>
    <div className="h-full flex justify-center ">
      <Popover open={openYoutubePopover} >
        <PopoverTrigger asChild>{children}</PopoverTrigger>

        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2 ">
              <div className="flex gap-2 justify-between items-center">
                <h5 className="text-sm"> Youtube URL </h5>
                <div className="flex gap-1">
                  <Button
                    size={"sm"}
                    variant={"outline"}
                  onClick={()=>{
                    setOpenYoutubePopover(false)
                  }}
                  >
                    Cancel
                  </Button>
                  <Button size={"sm"} onClick={setYoutubeLink} >
                    Done
                  </Button>
                </div>
              </div>
              
            </div>
            <div className=" flex flex-col gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="url">URL  </Label>
                <Input
                  id="url"
                  className="col-span-2 h-8"
                  onChange={(e)=>{setVidData({...vidData,url:e.target.value})}}
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="width">width  </Label>
                <Input
                  id="width"
                  className="col-span-2 h-8"
                  type="number"
                  value={vidData.width}
                  onChange={(e)=>{setVidData({...vidData,width:parseInt(e.target.value)})}}
                />
              
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="height">height  </Label>
                <Input
                  id="height"
                  type="number"
                  className="col-span-2 h-8"
                  value={vidData.height}
                  onChange={(e)=>{setVidData({...vidData,height:parseInt(e.target.value)})}}
                />
              </div>


            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
    </div>
  )
}

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LuHeading1, LuHeading2, LuHeading3, LuHeading4, LuHeading5, LuHeading6 } from "react-icons/lu";

const HeadingDropdown=({children,editor,openHeadingDropdown,setOpenHeadingDropdown}:any)=>{


  return(
    <DropdownMenu open={openHeadingDropdown}>
  <DropdownMenuTrigger>
    {children}
  </DropdownMenuTrigger>
  <DropdownMenuContent>
  <div className="flex w-full justify-between py-2">
    <DropdownMenuLabel >Headings</DropdownMenuLabel>
      <Button variant={'outline'} size={"sm"} onClick={()=>{setOpenHeadingDropdown(false)}}>Cancel</Button>
    </div>
    <DropdownMenuSeparator />
    <DropdownMenuItem onClick={()=>{  editor.chain().focus().toggleHeading({ level: 1 }).run();setOpenHeadingDropdown(false)}}><LuHeading1/></DropdownMenuItem>
    <DropdownMenuItem onClick={()=>{  editor.chain().focus().toggleHeading({ level: 2 }).run();setOpenHeadingDropdown(false)}}><LuHeading2/></DropdownMenuItem>
    <DropdownMenuItem onClick={()=>{  editor.chain().focus().toggleHeading({ level: 3 }).run();setOpenHeadingDropdown(false)}}><LuHeading3/></DropdownMenuItem>
    <DropdownMenuItem onClick={()=>{  editor.chain().focus().toggleHeading({ level: 4 }).run();setOpenHeadingDropdown(false)}}><LuHeading4/></DropdownMenuItem>
    <DropdownMenuItem onClick={()=>{  editor.chain().focus().toggleHeading({ level: 5 }).run();setOpenHeadingDropdown(false)}}><LuHeading5/></DropdownMenuItem>
    <DropdownMenuItem onClick={()=>{  editor.chain().focus().toggleHeading({ level: 6 }).run();setOpenHeadingDropdown(false)}}><LuHeading6/></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
  )
}


const FontFamilyDropdown=({children,editor,openFontFamilyDropdown,setOpenFontFamilyDropdown}:any)=>{
  return(
    <DropdownMenu open={openFontFamilyDropdown}>
    <DropdownMenuTrigger>
      {children}
    </DropdownMenuTrigger>
    <DropdownMenuContent>
    <div className="flex w-full justify-between">
    <DropdownMenuLabel>Font Family</DropdownMenuLabel>
      <Button variant={'outline'} onClick={()=>{setOpenFontFamilyDropdown(false)}}>Cancel</Button>
    </div>
      <DropdownMenuSeparator />
   
      <DropdownMenuItem  onClick={() =>{ editor.chain().focus().unsetFontFamily().run() ;setOpenFontFamilyDropdown(false)}} > None </DropdownMenuItem>
      <DropdownMenuItem  onClick={() => {editor.chain().focus().setFontFamily('Inter').run();setOpenFontFamilyDropdown(false)}} > Inter </DropdownMenuItem>
      <DropdownMenuItem  onClick={() => {editor.chain().focus().setFontFamily('Comic Sans MS, Comic Sans').run();setOpenFontFamilyDropdown(false)}} > Comic Sans </DropdownMenuItem>
      <DropdownMenuItem  onClick={() =>{ editor.chain().focus().setFontFamily('serif').run();setOpenFontFamilyDropdown(false)}} > Serif </DropdownMenuItem>
      <DropdownMenuItem  onClick={() => {editor.chain().focus().setFontFamily('monospace').run();setOpenFontFamilyDropdown(false)}} > Monospace </DropdownMenuItem>
      <DropdownMenuItem  onClick={() => {editor.chain().focus().setFontFamily('cursive').run();setOpenFontFamilyDropdown(false)}} > Cursive </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}


import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Textarea } from "../ui/textarea";
import { addImage } from "./EditorConfigs/ImageConfig";


const DisardDialogBox=({children,onDiscard}:any)=>
<AlertDialog>
      <AlertDialogTrigger asChild>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Do you really want to discard the changes?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this data and remove data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onDiscard}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>


const PublishDialogBox=({children,onPublish}:any)=>
<AlertDialog>
      <AlertDialogTrigger asChild>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Do you really want to Publish this Article ?</AlertDialogTitle>
          
        </AlertDialogHeader>
        <Input placeholder="Enter a catchy title for your blog post" />
    <Input placeholder="Optional: Add a subtitle to provide more context" />
    <Textarea placeholder="Write your blog Description" />
    <div className="estimated-read   items-center " >
      <Label htmlFor="estimatedRead" className="label text-slate-500  text-[10px]">Estimated Read Time (min) :</Label>
      <Input id="estimatedRead" placeholder="in minutes" type="number" />
    </div>
      <AddTags />
        
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onPublish}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>





function AddTags() {
  const [tags,setTags]=useState<string[]|[]>([]);
  const [tagInput,setTagInput]=useState<string>('');
  const handleEnterKey=(inputString:string)=>{
    setTags((prev:any)=>{
      return [...prev,inputString]
    })
    setTagInput('');
  }

  const deleteTag=(delIndex:any)=>{
    
   const newTags=tags.filter((tag,index)=>{
    
      return index!=delIndex;
   })
   setTags(newTags)
  }

  return (
    <div className="flex flex-col gap-5  px-4 py-2 rounded-md  dark:bg-gray-800">
      <div className="flex gap-2 flex-wrap">
       {tags.length==0 ?
        <Label htmlFor="tagsInput" className="text-slate-500  text-[10px] italic">Enter tags for Article</Label>
       : tags.map((tag,index)=>{
          return (
            //@ts-ignore
            <span key={tag} className="inline-flex items-center gap-1 px-2 py-1 text-sm font-medium rounded-full bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200">
            {tag}
            <button
              className="p-1 -mr-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600"
            onClick={(e)=>{deleteTag(index)}}
            >
              <XIcon className="w-4 h-4" onClick={()=>{deleteTag(index)}} />
            </button>
          </span>
          )
        })
       }
        
        
      </div>
        <Input
          onKeyDown={(e:any)=>{setTagInput(e.target.value);if(e.key==='Enter'){handleEnterKey(e.target.value)}}}
        id="tagsInput"
          placeholder="Add a tags"
          type="text"
          value={tagInput}
       onChange={(e)=>{setTagInput(e.target.value)}}
        />
    </div>
  )
}

function XIcon(props:any) {
  return (
    <svg
      {...props}
    
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}