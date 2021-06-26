import React from "react";
import Post from "../components/post"

const AllPosts = (props) => {
  return props.posts.map((post) => {
    return <Post post={post} key={post.id}/>
  });
};

export default AllPosts;