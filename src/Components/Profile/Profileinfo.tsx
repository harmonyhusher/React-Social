import userPhoto from "../../assests/images/1233.jpg";
import Main from "./Main";
import { useState } from "react";
import { savePhoto } from "../../Redux/ProfileReducer";
import { useAppDispatch } from "src/Redux/HooksTypes";
import { ProfileProps } from "./Profile";

const Profileinfo: React.FC<ProfileProps> = (props: ProfileProps) => {
  const [isFormVisible, setFormVisible] = useState(false);

  let dispatch = useAppDispatch();

  console.log(props.status);

  const formHiderHandler = (e: any) => {
    setFormVisible(true);
  };

  const formHiderFalseHandler = (e: any) => {
    setFormVisible(false);
  };

  const onMainPhotoSelected = (e: any) => {
    if (e.target.files.length) {
      dispatch(savePhoto(e.target.files[0]));
    }
  };

  const space = "Неизвестно";

  return (
    <>
      <div className="container py-8">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  // src = {userPhoto}
                  src={props.profile ? props.profile.photos.large : userPhoto}
                  alt="avatar"
                  className="rounded-circle img-fluid img-thumbnail"
                />
                <h5 className="my-3">
                  {props.profile ? `@${props.profile.fullName}` : space}
                </h5>
                {props.isOwner && (
                  <input
                    className="form-control m-2"
                    type="file"
                    id="formFile"
                    onChange={onMainPhotoSelected}
                  />
                )}
                <div className="d-flex justify-content-center mb-2">
                  {props.isFollowed ? (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={props.handleFollow}
                    >
                      Удалить из друзей
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={props.handleFollow}
                    >
                      Добавить в друзья
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <p className="mb-0">Статус</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <div className="col-sm-3">
                      <p className="text-muted mb-0">
                        <div>
                          {props.profile
                            ? props.status
                              ? props.status
                              : "Пусто"
                            : null}
                        </div>
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
              {...formHiderFalseHandler}
              ownUserId={props.ownUserId}
              isOwner={props.isOwner}
              status={props.status}
              handleFollow={props.handleFollow}
              isFollowed={props.isFollowed}
            />
          )}
          {!isFormVisible && (
            <div className="col-lg-2 position-relative">
              <button onClick={formHiderHandler} className="btn btn-primary">
                Показать информацию
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profileinfo;
