import { useEffect } from "react";
import { getUserPagination } from "../../Redux/UsersFuncReducer";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assests/images/1233.jpg";
import { Card } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "src/Redux/HooksTypes";
import Paginator from "./Paginator/Paginator";
import UsersSearchForm from "./UsersSearchForm";

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
  }, [pageSize, totalCount, users.length, currentPage]); //передаем каррент пейдж чтобы вызывать функцию каждый раз когда меняем страницу

  return (
    <>
      <UsersSearchForm totalItemsCount={totalCount}
        currentPage={currentPage}
        onPageChanged={getUserPagination}
        pageSize={pageSize} />
      <Paginator
        totalItemsCount={totalCount}
        currentPage={currentPage}
        onPageChanged={getUserPagination}
        pageSize={pageSize}
      />
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
