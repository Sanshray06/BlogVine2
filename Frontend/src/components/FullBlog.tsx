import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCards"

export const FullBlog = ({ blog }: {blog: Blog}) => {
    return <div className="bg-[url('./assets/background2.jpg')] fixed inset-0 bg-cover bg-center bg-no-repeat ">
        <Appbar />
        <div className="flex justify-center ">
            <div className="sm:grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12 mt-5">
                <div className="col-span-8">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-teal-200 pt-2">
                        Post on 2nd December 2023
                    </div>
                    <div className="pt-4 text-white">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="text-teal-200 text-lg">
                        Author
                    </div>
                    <div className="flex w-full">
                        <div className="pr-4 flex flex-col justify-center">
                            <Avatar size="big" name={blog.author.name || "Anonymous"} />
                        </div>
                        <div>
                            <div className="text-xl text-teal-200 font-bold">
                                {blog.author.name || "Anonymous"}
                            </div>
                            <div className="pt-2 text-teal-200">
                                Random catch phrase about the author's ability to grab the user's attention
                            </div>
                        </div>
                    </div>  
                </div>
                
            </div>
        </div>
    </div>
}