import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { PiUsersBold } from "react-icons/pi";
import { IoCreateOutline } from "react-icons/io5";
import BlogsSection from "@/components/blog/BlogsSection";
import EditProfile from "@/components/edit-profile/EditProfile";
import { Button } from "@/components/ui/button";
export default function Page() {
  return (
    <div className="  mx-auto py-8  md:px-20 px-10 ">
      <div>
        <div className="flex  h-full   items-center  justify-center  gap-6">
          <Avatar className=" h-32 w-32">
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/125037123?v=4"
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold ">Jhon Doe</h1>
              <div className="flex  lg:flex-grow flex-col md:flex-row lg:justify-between gap-5 md:justify-start justify-center">
                <button className="bg-blue-200   flex items-center border-blue-300 border  dark:bg-gray-800 px-2 py-1 cursor-pointer rounded-md text-sm ">
                  @jhonDoe
                </button>
                <EditProfile>
                  <Button
                    variant="outline"
                    className="bg-blue-200  border-blue-500 hover:bg-blue-100"
                  >
                    Edit
                  </Button>
                </EditProfile>
              </div>
            </div>
            <p className="text-blue-800 text-sm dark:text-gray-400">
              Frontend Developer | Open-source Enthusiast
            </p>
            <div className="flex text-blue-900 items-center gap-4">
              <div className="flex items-center gap-1">
                <PiUsersBold className="w-5 h-5  dark:text-gray-400" />
                <span className=" dark:text-gray-400">1,234 Followers</span>
              </div>
              <div className="flex items-center text-blue-900 gap-1">
                <PiUsersBold className="w-5 h-5  dark:text-gray-400" />
                <span className=" dark:text-gray-400">456 Following</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex  items-center my-6 ">
            <span className="text-3xl font-bold">Blogs</span>
            <Link href={"/blogs/write"}>
              {" "}
              <IoCreateOutline className="text-blue-900 hover:text-blue-800 cursor-pointer" />
            </Link>
          </div>

          <BlogsSection />
        </div>
      </div>
    </div>
  );
}
