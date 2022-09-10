import React from "react";
import "../Style/Web.css";
import "../Style/Web.css";

const Web = () => {
  return (
    <div className="web">
      <div className="web_option">
        <a href="#project">
          <i class="fi fi-rr-edit-alt option_icon"></i>Projects
        </a>
      </div>
      <div className="web_option">
        <a href="#Skills">
          <i class="fi fi-rr-laptop option_icon"></i>Skills
        </a>
      </div>
      <div className="web_option">
        <a href="#Work">
          <i class="fi fi-rr-briefcase"></i>Work
        </a>
      </div>
      <div className="web_option">
        <a href="#Contact">
          <i class="fi fi-rr-following"></i>Contact
        </a>
      </div>
    </div>
  );
};

export default Web;
