import React from "react";
import { useDispatch } from "react-redux";
<<<<<<< HEAD
import { removePost, togglePostLiked } from "../../../Redux/postsSlice.ts";
=======
import { removePost, togglePostLiked } from "../../../Redux/postsSlice";
>>>>>>> 79392af7a2382da7abf7a4c2fdb0777072e0bfc8
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
