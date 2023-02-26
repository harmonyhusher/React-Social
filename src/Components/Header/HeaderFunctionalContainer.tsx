import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { Badge, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { getAuthUserData } from "../../Redux/AuthReducer";
import { logout } from "../../Redux/AuthReducer";
import { useAppDispatch, useAppSelector } from "src/Redux/HooksTypes";

const HeaderFunctional = () => {

  const history = useLocation();

  const isAuth = useAppSelector((state) => state.auth.isAuth);

  const dispatch = useAppDispatch();

  dispatch(getAuthUserData());

  const handleLogout = () => {
    dispatch(logout())
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
