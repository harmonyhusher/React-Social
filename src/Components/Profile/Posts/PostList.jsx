import React from "react";
import { useSelector } from "react-redux";
import PostItem from "./PostItem";
import {ListGroup} from "react-bootstrap"

const PostList = () => {

  const posts = useSelector((state) => state.posts.posts);

  console.log(posts)

  return (
    <ListGroup>
    {posts.map(post => (
      <PostItem
        key={post.id}
        {...post}
      />
    ))}
    </ListGroup>
  );
};

export default PostList;
