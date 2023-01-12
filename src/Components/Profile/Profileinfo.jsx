import React from "react";
import userPhoto from "../../assests/images/1233.jpg";
import Main from "./Main";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { savePhoto } from "../../Redux/ProfileReducer.ts";

const Profileinfo = (props) => {
  const [isFormVisible, setFormVisible] = useState(false)
  let dispatch = useDispatch()

  const formHiderHandler = (e) => {
      setFormVisible(true)
  }
  
  const formHiderFalseHandler = (e) => {
      setFormVisible(false)
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      dispatch(savePhoto(e.target.files[0]))
    }
  }

  const space = "Неизвестно";


  return (
    <>
      <div class="container py-8">
        <div class="row">
          <div class="col-lg-4">
            <div class="card mb-4">
              <div class="card-body text-center">
                <img
                  // src = {userPhoto}
                  src={props.profile ? props.profile.photos.large : userPhoto}
                  alt="avatar"
                  class="rounded-circle img-fluid img-thumbnail"
                />
                <h5 class="my-3">
                  {props.profile ? `@${props.profile.fullName}` : space}
                </h5>
                {props.isOwner && <input class="form-control m-2" type="file" id="formFile" onChange={onMainPhotoSelected}/> }
                <div class="d-flex justify-content-center mb-2">
                  <button type="button" class="btn btn-primary">
                    Follow
                  </button>
                </div>
              </div>
            </div>

            <div class="card mb-4 mb-lg-0">
              <div class="card-body p-0">
                <ul class="list-group list-group-flush rounded-3">
                  <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                    <p class="mb-0">Какая-то инофрмация</p>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                    <div class="col-sm-3">
                      <p class="text-muted mb-0">
                        Status:
                        <div>{props.profile ? props.status : space}</div>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {isFormVisible && (
            <Main
              profile={props.profile}
              value={props.value}
              handleAction={props.handleAction}
              updateText={props.updateText}
              onCancel={formHiderFalseHandler}
            />
          )}
          {!isFormVisible && (
              <div className="col-lg-2 position-relative">
                <button
                  onClick={formHiderHandler}
                  className="btn btn-primary"
                >
                  Показать информацию
                </button>
              </div>
          )}

          {/* <Main
          value={props.value}
          handleAction={props.handleAction}
          updateText={props.updateText}
        /> */}
        </div>
      </div>
    </>
  );
};

export default Profileinfo;
