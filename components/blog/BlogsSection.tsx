
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import BlogCard from "./BlogCard";


function BlogsSection() {
  return (
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

export default BlogsSection


