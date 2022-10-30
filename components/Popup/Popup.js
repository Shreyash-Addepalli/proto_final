import React from "react";
import { useRouter } from "next/router";

const Popup = (props) => {
  const navigate = useRouter();

  return (
    <div>
      {props.trigger ? (
        <div className="popup-box">
          <div className="box">
            <span
              className="close-icon"
              onClick={() => {
                props.setTrigger(false);
              }}
            >
              x
            </span>
            <p
              style={{
                textAlign: "center",
                background: `#101010`,
                fontSize: `30px`,
                paddingTop: `30px`,
              }}
            >
              proto
            </p>
            <p
              style={{
                textAlign: "center",
                background: `#101010`,
                paddingLeft: `25px`,
                paddingRight: `25px`,
                fontSize: `20px`,
                paddingTop: `10px`,
                paddingBottom: `10px`,
              }}
            >
              This project is an experimental beta. Please enter at your own
              risk
            </p>
            <p
              style={{
                textAlign: "center",
                background: `#101010`,
                paddingTop: `25px`,
              }}
            >
              <button
                style={{
                  textAlign: "center",
                  fontSize: `17px`,
                  background: `#FFF`,
                  height: `52px`,
                  width: `165px`,
                  left: `131px`,
                  top: `486px`,
                  borderRadius: `5px`,
                  cursor: "pointer",
                }}
                onClick={() => navigate.push("/CardList/CardsList")}
              >
                <b style={{ background: `#FFF`, color: `#000` }}>Enter {">"}</b>
              </button>
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Popup;
