import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { getAuthUserData } from "../../Redux/AuthReducer";
import { logout } from "../../Redux/AuthReducer";
import { useAppDispatch, useAppSelector } from "src/Redux/HooksTypes";

const HeaderFunctional = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  const dispatch = useAppDispatch();

  dispatch(getAuthUserData());

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div>
        {isAuth ? (
          <div>
            <Button
              className="btn btn-secondary btn-sm btn1"
              type="submit"
              onClick={() => handleLogout()}
            >
              Выйти
            </Button>
          </div>
        ) : (
          <NavLink className="text-decoration none" to={"/login"}>
            Логин
          </NavLink>
        )}
      </div>
    </>
  );
};

export default HeaderFunctional;
