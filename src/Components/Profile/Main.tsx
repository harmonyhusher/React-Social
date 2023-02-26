import React from "react";
import PostList from "./Posts/PostList";
import TextField from "./Posts/TextField";
import { ProfileProps } from "./Profile";

const Main: React.FC<ProfileProps> = (props: ProfileProps) => {

  const space = "Неизвестно";
  
  return (
    <div className="col-lg-8">
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Никнейм</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">
                {props.profile ? props.profile.fullName : space}
              </p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">VK</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">
                {props.profile ? (
                  <a href="props.profile.contacts.vk">
                    {props.profile.contacts.vk ? "Да" : "Нет"}
                  </a>
                ) : (
                  space
                )}
              </p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Job</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">
                {props.profile?.lookingForAJob ? "Да" : "Нет"}
              </p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-1">Posts:</p>
            </div>
            <div className="mb-2">
              <TextField
                value={props.value}
                updateText={props.updateText}
                handleAction={props.handleAction}
              />
              <div className="mb-2">
                <PostList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
