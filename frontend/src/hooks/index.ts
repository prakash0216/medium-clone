import { useEffect, useState } from "react";
import axios from "axios";
import { Backend_URL } from "../config";
import { useNavigate } from "react-router-dom";

export interface Blog {
  content: string;
  title: string;
  id: number;
  author: {
    name: string;
  };
}
const defaultBlog: Blog = {
  content: "",
  title: "",
  id: 0,
  author: {
    name: "",
  },
};

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>(defaultBlog);

  useEffect(() => {
    axios
      .get(`${Backend_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setBlog(response.data.blog);
        setLoading(false);
      });
  }, [id]);

  return {
    loading,
    blog,
  };
};
export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    axios
      .get(`${Backend_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setBlogs(response.data.blogs);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    blogs,
  };
};

export const useAuthRedirect = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      const timer = setTimeout(() => {
        alert("You are not logged in, please SignIn");
        navigate("/signin");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [navigate]);

  return isLoggedIn;
};
