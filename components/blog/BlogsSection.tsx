"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import BlogCard from "./BlogCard";
import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


function BlogsSection() {


  return(
<Tabs defaultValue="carousel" >
  <TabsList className="bg-blue-200 border border-blue-400 mb-5">
    <TabsTrigger value="carousel">Carousel view</TabsTrigger>
    <TabsTrigger value="grid">Grid View</TabsTrigger>
  
  </TabsList>
  <TabsContent value="carousel">
    <BlogCaruselView/>
  </TabsContent>
  <TabsContent value="grid">
    <BlogGridView/>
  </TabsContent>
</Tabs>
  ) 
}

export default BlogsSection




export const BlogCaruselView=()=>{
  return(
    <div className=" h-36 ">
    <Carousel
  opts={{
    align: "start",
  }}
  className="w-full px-5 lg:px-0 "
>
  <CarouselContent>
    {Array.from({length:5}).map((_, index) => (
      <CarouselItem key={index} className="shadow-lg" >
        <BlogCard  />
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
</div>
  )
}



import { BentoGrid, BentoGridItem } from "@/components/blog/GridBlogSection";

export function BlogGridView() {
  return (
    <BentoGrid className="max-w-4xl   mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2",
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
  },
];


