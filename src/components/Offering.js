import React from "react";
import { Link } from "react-router-dom";

const Offering = (props) => {
  return (
    <div className="offering" id={props.id}>
      <div className="offering-top">{props.title}</div>
      <div className="offering-content">
        <div
          className="offering-image"
          style={{ backgroundImage: `url(${props.image})` }}
        ></div>
        <div>
          <p>{props.description}</p>
        </div>
      </div>
      <div className="offering-bottom">{props.price}</div>
      <div>
        <button>اشتري الان</button>
      </div>
    </div>
  );
};

export default Offering;
