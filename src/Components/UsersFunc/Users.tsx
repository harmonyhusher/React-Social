import React from "react";
import { useEffect } from "react";
import { getUserPagination } from "../../Redux/UsersFuncReducer";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assests/images/1233.jpg";
import { Card } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "src/Redux/HooksTypes";
import Paginator from "./Paginator/Paginator";

const Users: React.FC = () => {
  const dispatch = useAppDispatch();

  const users = useAppSelector((state) => state.usersPage2.users);
  const currentPage = useAppSelector((state) => state.usersPage2.currentPage);
  const totalCount = useAppSelector((state) => state.usersPage2.totalCount);
  const pageSize = useAppSelector((state) => state.usersPage2.pageSize);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(getUserPagination(currentPage, pageSize));
    }
  }, [dispatch, pageSize, totalCount, users.length, currentPage]); //передаем каррент пейдж чтобы вызывать функцию каждый раз когда меняем страницу

  // function searchHandler() {
  //   dispatch(getUserPagination(currentPage, pageSize));
  // }
  return (
    <>
      <Paginator
        totalItemsCount={totalCount}
        currentPage={currentPage}
        onPageChanged={getUserPagination}
        pageSize={pageSize}
      />
      {/* {pages.map((p) => {
          return (
            <>     
              <span 
              className="m-1"
                onClick={() => {
                  dispatch(setCurrentPage(p), searchHandler());
                }}
              >
               <button className="btn btn-dark mt-4">{p}</button>
              </span>           
            </>
          );      
        })} */}

      <div className="users">
        {users.map((u) => {
          return (
            <div className="row">
              <Card className="mt-2">
                <NavLink to={`/profile/` + u.id}>
                  <img
                    className="float-start w-25 rounded-circle img-fluid"
                    alt="php"
                    src={u.photos.small != null ? u.photos.small : userPhoto}
                  />
                  <div className="name badge bg-secondary">{u.name}</div>
                </NavLink>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Users;
