import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { Badge, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getAuthUserData } from "../../Redux/AuthReducer";
import { logout } from "../../Redux/AuthReducer";
import { useAppDispatch, useAppSelector } from "src/Redux/HooksTypes";

const HeaderFunctional = () => {
  let navigate = useNavigate();

  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const login = useAppSelector((state) => state.auth.login);

  const dispatch = useAppDispatch();

  // useEffect(() => {
  //    dispatch(getAuthUserData());
  // }, [dispatch]);

  dispatch(getAuthUserData());

  // useEffect(() => {
  //   dispatch(logout())
  // }, [logouted, dispatch])

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
            <Badge bg="primary">Loggined as {login}</Badge>
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

// const mapStateToProps = (state) => ({
//   isAuth: state.auth.isAuth,
//   login: state.auth.login,
// });

// export default connect(mapStateToProps, { setAuthUserData, getAuthUserData })(
//   HeaderFunctional
// );
