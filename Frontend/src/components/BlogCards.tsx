import { Navigate, useNavigate } from "react-router-dom";



interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: number;
}


const BlogCards = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) =>{

    const navigate = useNavigate();
  return (
    
    <div>
            <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md border-white/20 backdrop-blur-md shadow-lg rounded-lg mb-5">
                <div className="flex">
                    <Avatar name={authorName} />
                    <div className="font-extralight pl-2 text-sm flex justify-center flex-col text-teal-200">{authorName}</div>
                    <div className="flex justify-center flex-col pl-2 text-teal-200">
                        <Circle />
                    </div>
                    <div className="pl-2 font-thin text-teal-200 text-sm flex justify-center flex-col">
                        {publishedDate}
                    </div>
                </div>
                <div className="text-xl font-semibold pt-2 text-teal-200">
                    {title}
                </div>
                <div className="text-md font-thin text-teal-200">
                    {content.slice(0, 100) + "..."}
                </div>
                <div className="text-teal-200 text-sm font-thin pt-4">
                    {`${Math.ceil(content.length / 100)} minute(s) read`}
                </div>
                <button className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-teal-500 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-teal-900 hover:bg-teal-800" onClick={() => navigate(`/blogs/${id}`)}>view full blog</button>
            </div>
    </div>
    
    
  )
}
export function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-500">

    </div>
}

export function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-slate-500 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
    <span className={`${size === "small" ? "text-xs" : "text-md"} font-extralight text-teal-200 dark:text-teal-200`}>
        {name[0]}
    </span>
</div>
}
export default BlogCards
