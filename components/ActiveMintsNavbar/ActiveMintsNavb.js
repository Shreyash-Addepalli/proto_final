import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import { useRouter } from "next/router";

function ActiveMintsNavbar(props) {
  const navigate = useRouter();
  return (
    <div className="nav">
      <div className="nav-header">
        <div className="nav-title">
          <button
            className="btn-back"
            onClick={() => {
              navigate.push("/");
            }}
          >
            <BsChevronLeft />
          </button>
          &nbsp;{props.name}
        </div>
      </div>
    </div>
  );
}

export default ActiveMintsNavbar;
