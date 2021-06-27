import React from "react";
import "./PlayerInfo.css";

const PlayerInfo = (props) => {
  console.log("player", props.player.img);
  return (
    <div className="modal">
      <div class="modal-content">
        <div
          class="modal-header"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <h2>
            {props.player.name} | {props.player.position} |{" "}
            {props.player.batThrows}
          </h2>
          <span class="close" onClick={() => props.setPlayerSelected(null)}>
            &times;
          </span>
        </div>
        <div class="modal-body" style={{ display: "flex" }}>
          <img
            style={{ border: "3px solid lightgray" }}
            src={require(`../../images/${props.player.img}`)}
            height="300px"
            width="250px"
          />
          <p style={{ textAlign: "left", margin: "20px 10px" }}>
            <b>Bio:</b> {props.player.bio}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;
