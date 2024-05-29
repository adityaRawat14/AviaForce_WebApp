"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import TiptapConfig from "@/components/Editor/EditorConfigs/tiptap.config";
import BlogSkeleton from "@/components/blog/BlogSkeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BiLike,BiBookmark ,BiComment } from "react-icons/bi";
import BlogsSection from "@/components/blog/BlogsSection";

function page() {
  const string = `<h3 class="text-2xl"><strong><u>Next Js 14</u></strong></h3><hr class="mt-[5px]"><hr class="mt-[5px]"><p></p><p><img width="100%" src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*0VO8KEVlfJdxwvQGIlHn6w.png" alt=""></p><p><span style="font-family: source-serif-pro, Georgia, Cambria, Times\ New\ Roman, Times, serif">The most recent version of the popular React Framework for building and developing web applications, Next.js 14, was released on October 26th, 2023. It promises to simplify and improve development speed, making it an excellent choice for any developer who wants to begin building fast and scalable web applications.</span></p><p></p><h6 class="text-[10px]"><img width="600" src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*W3uVpfobdGz0U71IyJApgg.png" alt="">      <u> </u><strong><u>Before moving forward with the next 14 one should know about react</u></strong></h6><p></p><h6 class="text-[10px]"><u><img width="600" src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*6URRWll8yGs9uDLOnvmtlQ.png" alt=""> </u>                                                <u> <span style="font-family: sohne, Helvetica\ Neue, Helvetica, Arial, sans-serif">What do nextjs do</span></u></h6><p></p><p><span style="font-family: source-serif-pro, Georgia, Cambria, Times\ New\ Roman, Times, serif">Next.js 14 includes several updates and improvements that will make the development of web applications a lot faster, let’s look at some of the important updates and improvements:</span></p><p><img width="600" src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*0Ydm7i4-CADHKvOXcvRu4w.png" alt=""></p><p><img width="600" src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*tYY7Zw0mm5cCNkpteIBtYw.png" alt=""></p><h4 class="text-xl"><strong>Turbopack</strong></h4><p></p><p><span style="font-family: source-serif-pro, Georgia, Cambria, Times\ New\ Roman, Times, serif">Turbopack, an exciting feature introduced in Next.js 14, represents a significant leap forward in enhancing local development speed. Building on a continuous improvement journey that began with Next.js 13, it has been fine-tuned for optimizing local development in both Pages and the App Router.</span></p><p></p><p><span style="font-family: source-serif-pro, Georgia, Cambria, Times\ New\ Roman, Times, serif">The Rust-based compiler is on the brink of stability, with a renewed focus on ensuring compatibility with all Next.js features.</span></p><p></p><p><span style="font-family: source-serif-pro, Georgia, Cambria, Times\ New\ Roman, Times, serif">Turbopack has powered 5,000 integration tests for the Next.js devs, which span seven years of bug fixes and reproductions. While on </span><a target="_blank" rel="noopener noreferrer nofollow" href="http://vercel.com"><em><u>vercel.com</u></em></a><span style="font-family: source-serif-pro, Georgia, Cambria, Times\ New\ Roman, Times, serif">, the results have been remarkable:</span></p><p></p><ul class="list-disc list-inside"><li><p><span style="font-family: Inter">Local server startup speeds have surged by up to 53.3%.</span></p></li><li><p><span style="font-family: Inter">Fast Refresh now delivers code updates up to 94.7% faster.</span></p></li></ul><p></p><p><span style="font-family: source-serif-pro, Georgia, Cambria, Times\ New\ Roman, Times, serif">These gains aren’t just theoretical; they reflect tangible improvements, especially in larger applications with extensive module graphs. With 90% of the Next.js dev tests now successfully passing, you can anticipate consistently faster and more reliable performance when using next dev — turbo.</span></p><p></p><p><span style="font-family: source-serif-pro, Georgia, Cambria, Times\ New\ Roman, Times, serif">As we approach the milestone of 100% test passage, Turbopack will transition to a stable state in an upcoming minor release. Rest assured, we remain committed to supporting the use of Webpack for custom configurations and ecosystem plugins.</span></p><p></p><h4 class="text-xl"><strong>Server Actions</strong></h4><hr class="mt-[5px]"><p></p><p><span style="font-family: Inter">In Next.js 14, Server Actions represent a substantial evolution in granting developers greater authority over server-side rendering. This empowering enhancement equips developers with the capability to fetch essential data from the server before page generation, ensuring that vital information is readily available when the page loads. This not only accelerates the initial load times but also minimizes superfluous client-side requests.</span></p><p><span style="font-family: Inter">These Server Actions are seamlessly woven into the fabric of the entire App Router model, offering a versatile toolkit that enables developers to:</span></p><p></p><h4 class="text-xl"><strong>Enhanced Metadata Options</strong></h4><hr class="mt-[5px]"><p>I<span style="font-family: Inter">mportantly, the incorporation of meta tags into the initial page content ensures a seamless user experience. This practice prevents issues like page flickering due to theme color changes or layout shifts resulting from viewport adjustments.</span></p><p><span style="font-family: Inter">Moreover, Next.js 14 distinguishes between blocking and non-blocking metadata, enabling a smoother experience. Only a select few metadata options are marked as blocking, ensuring that non-blocking metadata won’t hinder partially prerendered pages from serving the static shell.</span></p><p></p><h4 class="text-xl"><strong>Partial Prerendering</strong></h4><hr class="mt-[5px]"><p><span style="font-family: source-serif-pro, Georgia, Cambria, Times\ New\ Roman, Times, serif">The newest star in the release of Next.js 14 is Partial Prerendering. In a world where there is a constant battle between SSR and SSG, Next.js 14 gives you the best of both worlds. It provides you with a fast initial static response whilst streaming dynamic content based on your React Suspense boundaries, all this whilst eliminating the need to learn any new APIs. Thus giving you the speed of static sites and the dynamism of server-rendered applications.</span></p><p></p><h4 class="text-xl"><strong>Conclusion</strong></h4><hr class="mt-[5px]"><p></p><p><span style="font-family: cursive">Next.js 14 represents a significant step forward for the framework. Focusing on improving existing features rather than adding new ones, this version offers developers a sleeker, more efficient, and powerful experience. With Turbopack, Server Actions, Partial Prerendering, and integration with Strapi and artificial intelligence, Next.js 14 stands out as an ideal solution for developing modern and high-performance web applications. Developers now have an even more robust and versatile tool for creating innovative and effective web experiences.</span></p><p></p><p></p><p><strong><em><span style="font-family: serif">To begin development with Next.js 14, you can make use of the </span></em></strong><a target="_blank" rel="noopener ugc nofollow" class="af om" href="https://nextjs.org/docs"><strong><em><u><span style="font-family: Inter">official documentation</span></u></em></strong></a><strong><em><span style="font-family: Inter"> </span><span style="font-family: serif">or reference the </span></em></strong><a target="_blank" rel="noopener ugc nofollow" class="af om" href="https://nextjs.org/learn"><strong><em><u><span style="font-family: serif">Next.js 14 learn</span></u></em></strong></a><strong><em><span style="font-family: serif"> available on the website.</span></em></strong></p><p></p><p></p><p></p><p></p><p></p><p><br></p>`;
  const editor = useEditor({
    editable: false,
    content: string,
    ...TiptapConfig,
  });

  if (!editor) {
    return (
      <div className="flex h-screen w-screen pt-[3rem] justify-center ">
        <BlogSkeleton />
      </div>
    );
  }

  return (
    <div className="  flex justify-center  pt-[3rem]   ">
      <div className="lg:w-[770px] w-[90vw] md:w-[70vw] pb-[10rem] ">
        <h1 className="flex text-4xl  font-bold mb-8">
          What are signals in Tailwind how do they work and used cases
        </h1>
        <div className="flex gap-2 my-3">
          <div>
            <Avatar className="h-10 w-10">
              <AvatarImage
                alt="Publisher Avatar"
                src="/placeholder-avatar.jpg"
              />
              <AvatarFallback className="text-[10px] bg-black text-white">
                N
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col gap-1 px-3">
            <div className="flex gap-1">
              <span className="font-semibold text-lg">name</span>
              <span className="mx-5 ">|</span>
              <span className=" text-green-700 font-semibold cursor-pointer hover:text-green-600 text-lg">Follow</span>
            </div>
            <div className="flex gap-1">
              <span className="text-sm  text-gray-600">5 mins</span>
              <span className="mx-5">|</span>
              <span className="text-sm  text-gray-600">25 july</span>
            </div>
          </div>
        </div>

        <div className="flex w-full my-6 py-5 border-blue-200 border-y-[1px] justify-between">
          <div className="flex gap-10">
            <span className="flex gap-2 justify-center items-center"><BiLike size={25} className="hover:text-blue-800 transition-all duration-100 cursor-pointer text-black"/><span className="text-[14px]">12</span></span>
            <span className="flex gap-2 justify-center items-center"><BiComment size={25} className="hover:text-blue-800 transition-all duration-100 cursor-pointer text-black"/><span className="text-[14px]">12</span></span>
          </div>
          <div>
            <BiBookmark size={25} className="hover:text-blue-800 transition-all duration-100 cursor-pointer text-black"/>
          </div>
        </div>

        <EditorContent className="  px-4 py-6  w-full" editor={editor} />

        <div className="flex flex-col items-center gap-4">
        <Avatar className="h-10 w-10">
              <AvatarImage
                alt="Publisher Avatar"
                src="/placeholder-avatar.jpg"
              />
              <AvatarFallback className="text-[10px] bg-black text-white">
                N
              </AvatarFallback>
            </Avatar>
      <div className="text-xl font-bold">Written by Jhon Doe</div>
      <div className="flex justify-between gap-2">
      <div className="text-gray-600">39 Followers</div> 
      <div className="mx-3">|</div>
      <div className="text-gray-500">24 Articles</div>

      </div>
      <div className="text-gray-600">Hi, I'm Hamza Khan, a full-stack developer experienced in the MERN, NEXT js stack. I turn ideas into practical web applications</div>
      <div className="flex gap-4">
        <button className="bg-green-700 hover:bg-green-600  text-semibold text-white px-3 py-2 rounded-lg ">Follow</button> 
        <button className=" bg-black  text-semibold text-white px-3 py-2 rounded-lg " >See Profile</button> 
      </div>
      <div className="w-full my-8"> 
      <h1 className="text-2xl font-semibold py-4">More from Hamza Khan</h1>
     <div className=" rounded-lg shadow-[5px_10px_21px_10px_#00000024]"> <BlogsSection/></div>
      </div>
    </div>
      </div>
    </div>
  );
}

export default page;
