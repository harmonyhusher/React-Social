import React from "react";
import { useDispatch } from "react-redux";
import { removePost, togglePostLiked } from "../../../Redux/postsSlice.ts";
import { ListGroup } from "react-bootstrap";

const PostItem = ({ id, text, liked }) => {
  
  const dispatch = useDispatch();

  return (
    <ListGroup.Item>
      <input
        type="checkbox"
        checked={liked}
        onChange={() => dispatch(togglePostLiked({ id }))}
      />
      <span>{text}</span>;
      <span onClick={() => dispatch(removePost({ id }))}>&times;</span>
    </ListGroup.Item>
  );
};

export default PostItem;
