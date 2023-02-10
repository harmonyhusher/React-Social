import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { Badge, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getAuthUserData } from "../../Redux/AuthReducer";
import { logout } from "../../Redux/AuthReducer";
import { useAppDispatch, useAppSelector } from "src/Redux/HooksTypes";
import userPhoto from "../../assests/images/1233.jpg";

const HeaderFunctional = () => {
  let navigate = useNavigate();

  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const login = useAppSelector((state) => state.auth.login);
  const profile = useAppSelector((state) => state.profile.profile);

  const dispatch = useAppDispatch();

  dispatch(getAuthUserData());

  useEffect(() => {
    if (isAuth === false) {
      navigate("/login");
    }
  }, [isAuth, navigate]);

  console.log(isAuth);

  return (
    <>
      <div>
        {isAuth ? (
          <div>
            <Button
              className="btn btn-secondary btn-sm"
              type="submit"
              onClick={() => dispatch(logout())}
            >
              Выйти
            </Button>
          </div>
        ) : (
          <NavLink className="text-decoration none" to={"/login"}>
            Login
          </NavLink>
        )}
      </div>
    </>
  );
};

export default HeaderFunctional;

