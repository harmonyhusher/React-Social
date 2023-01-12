import React from "react";
import PostList from "./Posts/PostList";
import TextField from "./Posts/TextField";

const Main = (props) => {
  const space = "Неизвестно";
  return (
    <div class="col-lg-8">
      <div class="card mb-4">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Full Name</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">
                {props.profile ? props.profile.fullName : space}
              </p>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">VK</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">
                {props.profile ? (
                  <a href={props.profile.contacts.vk}>
                    {" "}
                    {props.profile.contacts.vk}{" "}
                  </a>
                ) : (
                  space
                )}
              </p>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Job</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">
                {props.profile === false ? "Нет" : "Да"}
              </p>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-1">Posts:</p>
            </div>
            <div class="mb-2">
              <TextField
                value={props.value}
                updateText={props.updateText}
                handleAction={props.handleAction}
              />
              <div class="mb-2">
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
