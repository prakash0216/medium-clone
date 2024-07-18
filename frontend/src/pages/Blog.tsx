import { IndividualBlog } from "../components/IndividualBlog";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import { Appbar } from "../components/AppBar";
import { IndividualBlogSkeleton } from "../components/IndividualBlogSkeleton";

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });
  if (loading || !blog) {
    return (
      <div>
        <Appbar />
        <div className="h-screen flex flex-col  pt-12">
          <div className="flex justify-center ">
            <IndividualBlogSkeleton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <IndividualBlog blog={blog} />
    </div>
  );
};
