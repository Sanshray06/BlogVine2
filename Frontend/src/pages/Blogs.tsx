import { Appbar } from "../components/Appbar";
import { FullBlog } from "../components/FullBlog";
import { Spinner } from "../components/Spinner";
import { useBlog } from "../hooks";
import {useParams} from "react-router-dom";

// atomFamilies/selectorFamilies
const Blogs = () => {
    const { id } = useParams();
    const {loading, blog} = useBlog({
        id: id || ""
    });

    if (loading || !blog) {
        return <div className="">
            <Appbar />
        
            <div className="h-screen flex flex-col justify-center bg-[url('./assets/background2.jpg')] fixed inset-0 bg-cover bg-center bg-no-repeat">
                
                <div className="flex justify-center">
                    <Spinner />
                </div>
            </div>
        </div>
    }
    return <div>
        <FullBlog blog={blog}  />
    </div>
}

export default Blogs