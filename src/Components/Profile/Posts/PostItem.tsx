import { useAppDispatch } from '../../../Redux/HooksTypes';
import React from "react";
import { useDispatch } from "react-redux";
import { removePost, togglePostLiked } from "../../../Redux/postsSlice";
import { ListGroup } from "react-bootstrap";

interface PostItemProps {
  id: string,
  text: string,
  liked: boolean,
}

const PostItem: React.FC<PostItemProps> = ({ id, text, liked }) => {
  
  const dispatch = useAppDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={liked}
        onChange={() => dispatch(togglePostLiked(id))}
      />
      <span>{text}</span>;
      <span onClick={() => dispatch(removePost(id))}>&times;</span>
    </li>
  );
};

export default PostItem;
