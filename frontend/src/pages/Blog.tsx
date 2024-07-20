import { IndividualBlog } from "../components/IndividualBlog";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import { Appbar } from "../components/AppBar";
import { IndividualBlogSkeleton } from "../components/IndividualBlogSkeleton";
import { useAuthRedirect } from "../hooks";
import { BlogSkeleton } from "../components/BlogSkeleton";

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });
  const isLoggedIn = useAuthRedirect();

  if (!isLoggedIn) {
    return (
      <div>
        <Appbar />
        <div className="flex justify-center">
          <div>
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }
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
