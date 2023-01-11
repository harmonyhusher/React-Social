import React from "react";
import styles from "./UsersPage.module.css";
import userPhoto from "../../assests/images/1233.jpg";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  
  var pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let curP = props.currentPage;
  let curPF = curP - 5 < 0 ? 0 : curP - 5;
  let curPL = curP + 5;
  let slicedPages = pages.slice(curPF, curPL);

  return (
    <div className="Page navigation example">
      <div className="pagination">
        {slicedPages.map((p) => {
          return (
            <span
              className={props.currentPage === p && styles.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u, userId) => (
        <div className={styles.blockid}>
          <div>
            <div>
              <NavLink to={/profile/ + userId}>
                <img
                  className={styles.userPhoto}
                  alt="php"
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  В друзьях
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    debugger
                    props.follow(u.id);
                  }}
                >
                  Добавить
                </button>
              )}
            </div>
          </div>
          <div>{u.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Users;
