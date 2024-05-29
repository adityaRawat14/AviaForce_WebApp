import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { CardContent, CardFooter, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BsEye } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa6";
import Image from "next/image";
import CoverImage from "@/public/assets/customCover.jpg";
import Link from 'next/link'
export default function BlogCard({ blogData }: any) {
  return (
     <Card className=" bg-blue-100 flex flex-col border-blue-300 border-[1px] ">
       <CardContent className="p-3 flex flex-col md:p-5 ">
         <div className="flex flex-col md:flex-col gap-3 md:gap-5">
           <div className="flex flex-row gap-3  items-center space-x-4 md:space-x-0 md:space-y-0 space-y-4">
             <Avatar className="h-10 w-10">
               <AvatarImage
                 alt="Publisher Avatar"
                 src="/placeholder-avatar.jpg"
               />
               <AvatarFallback className="text-[10px] bg-black text-white">
                 JD
               </AvatarFallback>
             </Avatar>
             <div className="flex flex-col">
               <span className="text-[15px] font-medium">John Doe</span>
               <span className=" text-[10px] text-gray-500 dark:text-gray-400">
                 Senior Frontend Engineer
               </span>
             </div>
             <div className="flex items-center gap-3   text-gray-500 dark:text-gray-400">
               <div className="flex gap-1 items-center">
                 <BsEye className="h-3 w-3" />
                 <span className="text-[10px]">10.2K views</span>
               </div>
               <div className="flex gap-1 items-center">
                 <FaRegClock className="h-3 w-3" />
                 <span className="text-[10px]">8 min read</span>
               </div>
               <div className="flex gap-1 items-center">
                 <CalendarDaysIcon className="h-3 w-3" />
                 <span className="text-[10px]">May 6, 2024</span>
               </div>
             </div>
             <div className="flex justify-end">
               <Button
                 variant="link"
                 className="text-[12px] text-green-600"
               >
                 Read More
               </Button>
             </div>
           </div>
           <div className="flex flex-col md:flex-row gap-3 md:gap-5">
             <div className="flex flex-col gap-2">
               <h1 className="font-bold text-[19px] tracking-tight">
                 Mastering the Art of State Management in React
               </h1>
               <p className="text-gray-700 text-[16px] dark:text-gray-300">
                 Unlock the power of state management to build scalable and
                 maintainable React applications.
               </p>
               <div className="flex flex-col gap-2">
                 <p className="text-[12px] italic">
                  In the ever-evolving world of web development, managing the
                  state of your React applications has become a crucial skill.
                  State management, the process of controlling...
                 </p>
                 <CardFooter className="h-4 w-full flex items-start gap-2 text-[10px] pt-2 pb-12 lg:pb-6">
                  <span className="inline-flex items-center text-[10px] gap-1 px-2 py-1 font-semibold rounded-full bg-black text-white dark:bg-gray-700 dark:text-gray-200">
                     {" "}
                     react
                  </span>
                  {/* Add more tags as needed */}
                 </CardFooter>
               </div>
             </div>
             <Image
               alt="Blog Post Cover Image"
               className="object-cover rounded-lg hidden md:inline"
               height={60}
               src={CoverImage}
               width={120}
             />
           </div>
         </div>
       </CardContent>
     </Card>
  );
 }

function CalendarDaysIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

function TagIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  );
}
