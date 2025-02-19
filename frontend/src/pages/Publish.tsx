import { Appbar } from "../components/AppBar";
import axios from "axios";
import { Backend_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import { useAuthRedirect } from "../hooks";
import { BlogSkeleton } from "../components/BlogSkeleton";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const isLoggedIn = useAuthRedirect();

  if (!isLoggedIn) {
    return (
      <div>
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

  return (
    <div>
      <Appbar />
      <div className="flex justify-center w-full pt-8 ">
        <div className="max-w-screen-lg w-full ">
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Title"
          />

          <TextEditor
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <button
            onClick={async () => {
              const response = await axios.post(
                `${Backend_URL}/api/v1/blog`,
                {
                  title,
                  content: description,
                },
                {
                  headers: {
                    Authorization: localStorage.getItem("token"),
                  },
                }
              );
              navigate(`/blog/${response.data.id}`);
            }}
            type="submit"
            className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-black bg-zinc-300 rounded-lg focus:ring-4 focus:ring-black-200 dark:focus:ring-black hover:bg-black hover:text-white"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

function TextEditor({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div className="mt-3">
      <div className="w-full mb-4 ">
        <div className="flex items-center justify-between border">
          <div className="bg-white rounded-b-lg w-full">
            <textarea
              onChange={onChange}
              id="editor"
              rows={8}
              className="focus:outline-black block w-full px-0 text-sm text-gray-800 bg-white border-0 pl-2 pt-1"
              placeholder="Write an article..."
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
}
