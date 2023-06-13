"use client";

import { useDispatch, useSelector } from "react-redux";
import { fetchAllPosts } from "../store/slices/postSlices";
import { useEffect, useState } from "react";

interface Post {
  title: string;
}

const Post: React.FC = () => {
  const dispatch = useDispatch();

  const { list } = useSelector((state: any) => state.posts);

  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    dispatch(fetchAllPosts());
    setPosts(list);
  }, [dispatch, list]);

  const globalArray = useSelector((state: any) => state?.global);

  useEffect(() => {
    console.log("globalArrayyyyyyyyyyy", globalArray);
  }, [globalArray]);

  return (
    <div className="container">
      <div className="row">
        {posts.map((post: any, index: any) => (
          <div key={index} className="col-md-3">
            <div className="card">
              <div className="card-body">
                <p className="card-text">{post.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
