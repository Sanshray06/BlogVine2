import { Appbar } from "../components/Appbar"
import BlogCards from "../components/BlogCards"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"

const Blog = () => {
  const {loading , blogs} = useBlogs();

  if(loading){
    return <div>
    <Appbar /> 
    <div  className="flex justify-center bg-[url('./assets/background2.jpg')] fixed inset-0 bg-cover bg-center bg-no-repeat">
        <div>
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
        </div>
    </div>
</div>
  }
  return (
    <div className="h-screen overflow-hidden">
      <div className="bg-[url('./assets/background2.jpg')] fixed inset-0 bg-cover bg-center bg-no-repeat"></div>
      <div className="relative h-full overflow-y-auto">
        <Appbar />
        <div className="flex justify-center items-center flex-col pt-20">
          {blogs.map(blog => <BlogCards
                      id={blog.id}
                      authorName={blog.author.name || "Anonymous"}
                      title={blog.title}
                      content={blog.content}
                      publishedDate={"2nd Feb 2024"}
                  />)}
        </div>
      </div>
    </div>
  )
}

export default Blog
