import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFollowed, getUserProfile } from "../../Redux/ProfileReducer";
import { addPost } from "../../Redux/postsSlice";
import Profileinfo from "./Profileinfo";
import { useAppDispatch, useAppSelector } from "../../Redux/HooksTypes";
import { ProfileType } from "src/Redux/ProfileReducer";
import { getStatusProfile } from "../../Redux/ProfileReducer";

export type ProfileProps = {
  profile: ProfileType | null;
  value: string;
  updateText: (str: string) => void;
  handleAction: () => void;
  ownUserId: any;
  isOwner: boolean;
  status: string;
  handleFollow: () => void;
  isFollowed: boolean | null
};

const Profile: React.FC<ProfileProps> = (props: ProfileProps) => {
  let [text, setText] = useState("");

  let { userId } = useParams();

  const dispatch = useAppDispatch();

  const profile = useAppSelector((state) => state.profile.profile);

  const isFollowed = useAppSelector((state) => state.profile.isFollowed);

  const status = useAppSelector((state) => state.profile.status);

  let ownUserId: any = useAppSelector((state) => state.auth.id);

  useEffect(() => {
    if (!userId) {
      userId = ownUserId;
      dispatch(getUserProfile(userId));
      dispatch(getStatusProfile(userId));
    }
    dispatch(getUserProfile(userId));
    dispatch(getStatusProfile(userId));
  }, [userId]); 


  console.log(status + " это статус");

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addPost(text));
      setText("");
    }
  };

  const handleFollow = () => {
    dispatch(getFollowed(userId))
  }

  return (
    <div className="mt-4">
      <Profileinfo
        profile={profile}
        status={status}
        value={text}
        updateText={setText}
        handleAction={handleAction}
        isOwner={!userId}
        ownUserId={ownUserId}
        handleFollow={handleFollow}
        isFollowed={isFollowed}
      />
    </div>
  );
};

export default Profile;
