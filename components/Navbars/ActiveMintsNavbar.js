import { useRouter } from "next/router";
import React from "react";
import { BsChevronLeft } from "react-icons/bs";

function ActiveMintsNavbar(props) {
  const navigate = useRouter();
  return (
    <div className="nav1">
      <div className="nav-header1">
        <div className="nav-title1">
          <button
            className="btn-back1"
            onClick={() => {
              navigate.push("/CardList/CardsList");
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
