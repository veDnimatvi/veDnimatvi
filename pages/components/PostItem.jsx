import React from "react";
import { useRouter } from "next/router";

const PostItem = ({ listItems }) => {
  const router = useRouter();

  const renderStyle = (category) => {
    switch (category) {
      case "HTML":
        return "text-orange-600 bg-orange-200";
      case "CSS":
        return "text-[#284bda] bg-[#2863f0]";
      case "Javascript":
        return "text-yellow-600 bg-yellow-200";
      default:
        return "text-green-600 bg-green-200";
    }
  };
  return (
    <div>
      {!listItems?.length ? (
        <div className="mt-10 text-lg font-normal text-center">
          Not posts found
        </div>
      ) : (
        listItems?.map((blog, i) => (
          <div
            className="justify-between p-4 mb-3 bg-white rounded-lg shadow cursor-pointer md:flex ring-1 ring-gray-200"
            key={i}
            onClick={() => router.push(`/vitamins/${blog?.slug}`)}
          >
            <div className="md:ml-10">
              <div className="blogTitle">{blog?.title}</div>
              <div className="mb-3 font-semibold text-gray-900">
                {blog?.description}
              </div>
              <div className="hidden px-3 py-1 text-white duration-300 ease-in-out rounded md:block bg-slate-600 w-max hover:scale-105">
                Xem bài viết &rarr;
              </div>
            </div>
            <div
              style={{
                height: "max-content",
                width: "max-content",
                padding: "5px 10px",
                borderRadius: 3,
              }}
              className={renderStyle(blog?.category)}
            >
              {blog?.category}
            </div>

            <div className="block px-3 py-1 mt-3 text-white duration-300 ease-in-out rounded md:hidden bg-slate-600 w-max hover:scale-105">
              Xem bài viết &rarr;
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PostItem;
