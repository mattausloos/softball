import React from "react";
import PlayerInfo from "../PlayerInfo/PlayerInfo";
import players from "../../constants/playerInfo";

const RosterPage = () => {
  const [playerSelected, setPlayerSelected] = React.useState(null);

  return (
    <>
      <table style={{ width: "100%" }}>
        <thead style={{ backgroundColor: "#ECECEC" }}>
          <th style={{ width: "50%", textAlign: "left", padding: "8px" }}>
            Players
          </th>
          <th style={{ width: "20%", padding: "8px" }}>B/T</th>
          <th style={{ width: "30%", padding: "8px" }}>Pos</th>
        </thead>
        <tbody>
          {players.map((playerInfo, index) => (
            <tr>
              <td
                style={{
                  textAlign: "left",
                  padding: "8px",
                  textDecoration: "underline",
                  color: "#191970",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setPlayerSelected(
                    players.find((player) => player.name === playerInfo.name)
                  );
                }}
              >
                {playerInfo.name}
              </td>
              <td>{playerInfo.batThrows}</td>
              <td>{playerInfo.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {playerSelected && (
        <PlayerInfo
          player={playerSelected}
          setPlayerSelected={setPlayerSelected}
        />
      )}
    </>
  );
};

export default RosterPage;
