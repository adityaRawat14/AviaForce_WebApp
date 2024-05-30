"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { editProfileFormSchema } from "@/app/zod/profileSchema";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaXTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "../ui/textarea";

export default function EditProfile({children}:any) {
  const form = useForm<z.infer<typeof editProfileFormSchema>>({
    resolver: zodResolver(editProfileFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      bio: "",
    },
  });

  const onSubmit = (data: z.infer<typeof editProfileFormSchema>) => {
    console.log(data);
  };

  return (
    <Sheet>
      <SheetTrigger  asChild>
      
          {children}
      </SheetTrigger>
      <SheetContent side={"right"} className=" overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8  py-5  " >
            <div className="flex gap-8 flex-col">
              <div className="bg-gray-900 flex items-center  justify-between px-3 py-1 rounded-lg">
                <div className="flex items-center gap-2">
                  <Avatar className=" h-10 w-10">
                    <AvatarImage
                      src="https://avatars.githubusercontent.com/u/125037123?v=4"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-white text-md font-semibold">
                      aditya_rwt12
                    </h2>
                    <p className="text-gray-400">Aditya Rawat</p>
                  </div>
                </div>
                <button className="bg-blue-500 rounded-lg hover:bg-blue-700 text-[13px] text-white px-2 py-1 font-bold">
                  Change photo
                </button>
              </div>
              <div className="flex flex-col gap-4">
              
                  <div className="flex gap-5">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First name</FormLabel>
                          <FormControl>
                            <Input
                              className="bg-blue-100/80 "
                              placeholder="John"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last name</FormLabel>
                          <FormControl>
                            <Input
                              className="bg-blue-100/80 "
                              placeholder="Doe"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
              

                  <FormField
                  control={form.control}                  
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="johnDoe@gmail.com"
                          className="  bg-blue-100/80 "
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bio</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us a little bit about yourself"
                          className="resize-none  bg-blue-100/80 "
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        You can <span>@mention</span> other users and
                        organizations.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}                  
                  name="x"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <FaXTwitter />
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://www.x.com/"
                          className="resize-none  bg-blue-100/80 "
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              
                <FormField
                  control={form.control}
                  name="linkedin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <FaLinkedin />
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://www.linkedin.com/"
                          className="resize-none  bg-blue-100/80 "
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="github"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <FaGithub />
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://www.github.com/"
                          className="resize-none  bg-blue-100/80 "
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="instagram"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <FaInstagram />
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://www.instagram.com/"
                          className="resize-none  bg-blue-100/80 "
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <SheetFooter>
            <div className="flex gap-3">
            <Button variant={"outline"}>Discard Changes</Button>

            <Button type="submit">Save changes</Button>
            </div>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
