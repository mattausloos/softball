import React from "react";
import { games } from "../../constants/games";
import BoxScore from "../BoxScore/BoxScore";

const SchedulePage = (props) => {
  const [boxScore, setBoxScore] = React.useState("");

  return (
    <div>
      {games.map((gameInfo, index) => (
        <div
          style={{
            height: "60px",
            backgroundColor: `${index % 2 === 0 ? "#ECECEC" : "white"}`,
            display: "flex",
          }}
        >
          <div
            style={{
              textAlign: "left",
              margin: "16px 10px 30px 20px",
              fontSize: "20px",
              fontWeight: "700",
              width: "25%",
            }}
          >
            {gameInfo.date}
          </div>
          <div
            style={{
              textAlign: "left",
              margin: "20px",
              fontSize: "15px",
              opacity: "60%",
              width: "32%",
            }}
          >
            {gameInfo.versus}
          </div>
          <div
            style={{
              textAlign: "left",
              margin: "20px",
              fontSize: "15px",
              opacity: "60%",
              width: "18%",
            }}
          >
            {gameInfo.time}
          </div>
          <div
            style={{
              textAlign: "left",
              margin: "20px",
              fontSize: "15px",
              opacity: "60%",
              width: "10%",
            }}
          >
            {gameInfo.field}
          </div>
          <div
            style={{
              textAlign: "left",
              display: "flex",
              width: "15%",
              margin: "20px",
            }}
          >
            <div
              style={{
                color: `${
                  gameInfo.result === "W"
                    ? "green"
                    : gameInfo.result === "L"
                    ? "red"
                    : "orange"
                }`,
              }}
            >
              {gameInfo.result}
            </div>
            <div>{gameInfo.score}</div>
          </div>
          {gameInfo.result === "W" || gameInfo.result === "L" ? (
            <p
              onClick={() => {
                // props.setCurrentPage(4);
                // props.setBoxScore(gameInfo.number)
                setBoxScore(gameInfo.number);
              }}
              style={{
                cursor: "pointer",
                width: "15%",
                margin: "auto",
                color: "blue",
              }}
            >
              Box score
            </p>
          ) : (
            <div style={{ width: "15%", margin: "auto" }}></div>
          )}
        </div>
      ))}
      {boxScore && <BoxScore game={boxScore} setBoxScore={setBoxScore} />}
    </div>
  );
};

export default SchedulePage;
