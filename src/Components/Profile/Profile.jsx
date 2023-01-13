import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../../Redux/ProfileReducer.ts";
import { addPost } from "../../Redux/postsSlice.ts";
import Profileinfo from "./Profileinfo";

function Profile() {
  
  let [text, setText] = useState("");

  let {userId} = useParams();

  const dispatch = useDispatch();

  const profile = useSelector((state) => state.profile.profile);

  const status = useSelector((state) => state.profile.status);

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

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addPost( text ));
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
