import React from "react";
import preloader from "../../assests/images/1488.gif";

const Preloader = (props) => {
  return (
    <div>
      <img src={preloader} alt="Loading..."/>
    </div>
  );
};
export default Preloader;
