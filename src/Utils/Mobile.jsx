import React from "react";
import "../Style/Mobile.css";
import { FcCollapse } from "react-icons/fc";
const Mobile = ({ isOpen, setIsOpen }) => {
  return (
    <div className="mobile">
      <div className="close_icon" onClick={()=>setIsOpen(!isOpen)}>
      {/* <i class="fi fi-sr-cross-circle"></i> */}
      <FcCollapse/>
      </div>
      <div className="mobile_options">
      <div className="mobile_option">
        <a href="#project">
          <i class="fi fi-rr-edit-alt option_icon"></i>Projects
        </a>
      </div>
      <div className="mobile_option">
        <a href="#Skills">
          <i class="fi fi-rr-laptop option_icon"></i>Skills
        </a>
      </div>
      <div className="mobile_option">
        <a href="#Work">
          <i class="fi fi-rr-briefcase"></i>Work
        </a>
      </div>
      <div className="mobile_option">
        <a href="#Contact">
          <i class="fi fi-rr-following"></i>Contact
        </a>
      </div>
      </div>
    </div>
  );
};

export default Mobile;
