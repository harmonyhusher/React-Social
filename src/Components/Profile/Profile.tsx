import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../../Redux/ProfileReducer";
import { addPost } from "../../Redux/postsSlice";
import Profileinfo from "./Profileinfo";
import { useAppDispatch, useAppSelector } from "../../Redux/HooksTypes";

const Profile: React.FC = () => {
  
  let [text, setText] = useState("");

  let {userId} = useParams();

  const dispatch = useAppDispatch();

  const profile = useAppSelector((state) => state.profile.profile);

  const status = useAppSelector((state) => state.profile.status);

  let ownUserId: any = useAppSelector((state) => state.auth.id);

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
