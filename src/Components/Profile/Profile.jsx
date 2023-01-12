import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
<<<<<<< HEAD
import { useParams } from "react-router-dom";
import { getUserProfile, getStatusProfile } from "../../Redux/ProfileReducer.ts";
import { addPost } from "../../Redux/postsSlice.ts";
import Profileinfo from "./Profileinfo";

function Profile() {
  
  let [text, setText] = useState("");

  let {userId} = useParams();
=======
import { useParams, useNavigate } from "react-router-dom";
import { getUserProfile, savePhoto } from "../../Redux/ProfileReducer";
import { addPost } from "../../Redux/postsSlice";
import Profileinfo from "./Profileinfo";


function Profile(props) {

  let { userId } = useParams();
>>>>>>> 79392af7a2382da7abf7a4c2fdb0777072e0bfc8

  const dispatch = useDispatch();

  const profile = useSelector((state) => state.profile.profile);

  const status = useSelector((state) => state.profile.status);

<<<<<<< HEAD
  let ownUserId = useSelector((state) => state.auth.id);

  // useEffect(() => {
  //     if (!userId) 
  //       userId = ownUserId;
  //     } 
  //   [dispatch, ownUserId, userId]
  // );

  useEffect(() => {
    if (!userId) {
      userId = ownUserId
      dispatch(getUserProfile(userId));
    }
     dispatch(getUserProfile(userId))
    //  dispatch(getStatusProfile(userId))
  }, [dispatch, ownUserId, userId])

  console.log(status)
=======
  const ownUserId = useSelector((state) => state.auth.id);

  const [text, setText] = useState("");

  console.log(ownUserId, "ИЗ ПРФОИЛЯ");

  useEffect(
    (userId) => {
      if (!userId) {
        userId = ownUserId;
      }
      dispatch(getUserProfile(userId));
    },
    [dispatch, userId, ownUserId]
  );

  // useEffect(() => {
  //   dispatch(getStatusProfile(userId))
  // }, [dispatch, profileGet, userId]);
>>>>>>> 79392af7a2382da7abf7a4c2fdb0777072e0bfc8

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addPost({ text }));
      setText("");
    }
  };

  return (
    <div className="mt-4">
      <Profileinfo
        profile={profile}
        status={status}
        value={text}
        updateText={setText}
        handleAction={handleAction}
        isOwner={!userId}
      />
      {/* {profile ? (
        <Profileinfo
          profile={profile}
          // status={status}
          value={text}
          updateText={setText}
          handleAction={handleAction}
        />
      ) : (
        "Profile Page"
      )} */}
    </div>
  );
};

export default Profile;
