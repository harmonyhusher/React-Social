import React from "react";
import PostItem from "./PostItem";
import {ListGroup} from "react-bootstrap"
import { useAppSelector } from "../../../Redux/HooksTypes";

const PostList: React.FC = () => {

  const posts = useAppSelector((state) => state.posts.list);

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
