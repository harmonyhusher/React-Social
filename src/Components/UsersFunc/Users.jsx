import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserPagination } from "../../Redux/UsersFuncReducer.ts";
import { setCurrentPage } from "../../Redux/UsersFuncReducer.ts";
import { NavLink } from "react-router-dom";
import { createPages } from "./PagesCreator";
import userPhoto from "../../assests/images/1233.jpg";
import {Card} from "react-bootstrap"
import Paginator from "./Paginator/Paginator"

const Users = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.usersPage2.users);
  const currentPage = useSelector((state) => state.usersPage2.currentPage);
  const totalCount = useSelector((state) => state.usersPage2.totalCount);
  const pageSize = useSelector((state) => state.usersPage2.pageSize);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(getUserPagination(currentPage, pageSize, totalCount));
    }
  }, [dispatch, pageSize, totalCount, users.length, currentPage]); //передаем каррент пейдж чтобы вызывать функцию каждый раз когда меняем страницу

  function searchHandler() {
    dispatch(getUserPagination(currentPage, pageSize, totalCount));
  }

  var pagesCount = Math.ceil(totalCount / pageSize);

  let pages = [];

  createPages(pages, pagesCount, currentPage); //ulbi

  return (
    <>
    <Paginator totalItemsCount={totalCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={setCurrentPage}/>
        {pages.map((p) => {
          return (
            <>     
              <span 
              className="m-1"
                onClick={() => {
                  dispatch(setCurrentPage(p), searchHandler(p));
                }}
              >
               <button className="btn btn-dark mt-4">{p}</button>
              </span>           
            </>
          );      
        })}

        <div className="users">
          {users.map((u) => {
            return (
              <div className="row">
                <Card className="mt-2">
                    <NavLink to={/profile/ + u.id}>
                      <img
                        className="float-start w-25 rounded-circle img-fluid"
                        alt="php"
                        src={
                          u.photos.small != null ? u.photos.small : userPhoto
                        }
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
