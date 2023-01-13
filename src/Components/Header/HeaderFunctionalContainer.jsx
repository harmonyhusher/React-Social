import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge } from "react-bootstrap";
import { useNavigate  } from "react-router-dom";
import { getAuthUserData } from "../../Redux/AuthReducer.ts";

const HeaderFunctional = (props) => {

  let navigate = useNavigate();

  const isAuth = useSelector((state) => state.auth.isAuth);
  const login = useSelector((state) => state.auth.login);

  const dispatch = useDispatch();

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

  console.log(isAuth)

  return (
    <>
      <div >
        {isAuth ? (
          <div>
          <Badge bg="secondary">Loggined as {login}</Badge>
          {/* <Button bg="secondary" type="submit" onClick={() => setLogouted(!logouted)}>Выйти</Button> */}
          </div>
        ) : (
          <NavLink className="text-decoration none" to={"/login"}>Login</NavLink>
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
