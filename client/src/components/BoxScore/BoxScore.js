import React from "react";
import { gameStats } from "../../constants/gameStats";
import { games } from "../../constants/games";
import "./BoxScore.css";

const BoxScore = (props) => {
  const avg = (hits, atBats) => {
    return Number(hits / atBats).toFixed(3);
  };

  const obp = (hits, baseOnBalls, atBats, sac) => {
    return Number(
      (Number(hits) + Number(baseOnBalls)) /
        (Number(atBats) + Number(baseOnBalls) + Number(sac))
    ).toFixed(3);
  };

  const slg = (homeruns, triples, doubles, hits, atBats) => {
    return Number(
      (Number(homeruns) * 4 +
        Number(triples) * 3 +
        Number(doubles) * 2 +
        (Number(hits) -
          (Number(homeruns) + Number(triples) + Number(doubles)))) /
        Number(atBats)
    ).toFixed(3);
  };
  return (
    <div className="modal">
      <div class="modal-content-box-score">
        <div
          class="modal-header"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <h2>
            Box Score: Week {props.game}{" "}
            {games.find((game) => game.number === props.game).versus},{" "}
            {games.find((game) => game.number === props.game).date}
          </h2>
          <span class="close" onClick={() => props.setBoxScore("")}>
            &times;
          </span>
        </div>
        <div
          class="modal-body"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <table className="box-score-table" style={{ margin: "20px auto" }}>
            <thead style={{ textDecoration: "underline" }}>
              <td>ALLSTATE BATTERS</td>
              <td>AB</td>
              <td>R</td>
              <td>H</td>
              <td>2B</td>
              <td>3B</td>
              <td>HR</td>
              <td>RBI</td>
              <td>BB</td>
              <td>SO</td>
              <td>SAC</td>
              <td>AVG</td>
              <td>OBP</td>
              <td>SLG</td>
              <td>OPS</td>
            </thead>
            <tbody>
              {gameStats
                .find((game) => game.game === props.game)
                .playerStats.map((player) => (
                  <tr>
                    <td style={{ textAlign: "left" }}>{player.name}</td>
                    <td>{player.atBats}</td>
                    <td>{player.runs}</td>
                    <td>{player.hits}</td>
                    <td>{player.doubles}</td>
                    <td>{player.triples}</td>
                    <td>{player.homeruns}</td>
                    <td>{player.runsBattedIn}</td>
                    <td>{player.baseOnBalls}</td>
                    <td>{player.strikeouts}</td>
                    <td>{player.sac}</td>
                    <td>{avg(player.hits, player.atBats)}</td>
                    <td>
                      {obp(
                        player.hits,
                        player.baseOnBalls,
                        player.atBats,
                        player.sac
                      )}
                    </td>
                    <td>
                      {slg(
                        player.homeruns,
                        player.triples,
                        player.doubles,
                        player.hits,
                        player.atBats
                      )}
                    </td>
                    <td>
                      {Number(
                        Number(
                          obp(
                            player.hits,
                            player.baseOnBalls,
                            player.atBats,
                            player.sac
                          )
                        ) +
                          Number(
                            slg(
                              player.homeruns,
                              player.triples,
                              player.doubles,
                              player.hits,
                              player.atBats
                            )
                          )
                      ).toFixed(3)}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <table
            className="score-table"
            style={{ border: "1px solid black", borderCollapse: "collapse" }}
          >
            <thead>
              <td
                style={{
                  width: "20%",
                  borderTop: "1px solid #f5f5f5",
                  borderLeft: "1px solid #f5f5f5",
                  backgroundColor: "#f5f5f5",
                }}
              ></td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td style={{ fontWeight: "700" }}>R</td>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{
                    fontWeight: "700",
                    textAlign: "left",
                    paddingLeft: "18px",
                    fontSize: "13px",
                  }}
                >
                  {games.find((game) => game.number === props.game).home
                    ? games.find((game) => game.number === props.game).opponent
                    : "Allstate"}
                </td>
                <td>
                  {games.find((game) => game.number === props.game).home
                    ? games.find((game) => game.number === props.game).runs[0]
                        .opponent
                    : games.find((game) => game.number === props.game).runs[0]
                        .allstate}
                </td>
                <td>
                  {games.find((game) => game.number === props.game).home
                    ? games.find((game) => game.number === props.game).runs[1]
                        .opponent
                    : games.find((game) => game.number === props.game).runs[1]
                        .allstate}
                </td>
                <td>
                  {games.find((game) => game.number === props.game).home
                    ? games.find((game) => game.number === props.game).runs[2]
                        .opponent
                    : games.find((game) => game.number === props.game).runs[2]
                        .allstate}
                </td>
                <td>
                  {games.find((game) => game.number === props.game).home
                    ? games.find((game) => game.number === props.game).runs[3]
                        .opponent
                    : games.find((game) => game.number === props.game).runs[3]
                        .allstate}
                </td>
                <td>
                  {games.find((game) => game.number === props.game).home
                    ? games.find((game) => game.number === props.game).runs[4]
                        .opponent
                    : games.find((game) => game.number === props.game).runs[4]
                        .allstate}
                </td>
                <td>
                  {games.find((game) => game.number === props.game).home
                    ? games.find((game) => game.number === props.game).runs[5]
                        .opponent
                    : games.find((game) => game.number === props.game).runs[5]
                        .allstate}
                </td>
                <td>
                  {games.find((game) => game.number === props.game).home
                    ? games.find((game) => game.number === props.game).runs[6]
                        .opponent
                    : games.find((game) => game.number === props.game).runs[6]
                        .allstate}
                </td>
                <td style={{ fontWeight: "700" }}>
                  {games.find((game) => game.number === props.game).home
                    ? games.find((game) => game.number === props.game)
                        .opponentScore
                    : games.find((game) => game.number === props.game)
                        .allstateScore}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontWeight: "700",
                    textAlign: "left",
                    paddingLeft: "18px",
                    fontSize: "13px",
                  }}
                >
                  {games.find((game) => game.number === props.game).home
                    ? "Allstate"
                    : games.find((game) => game.number === props.game).opponent}
                </td>
                <td>
                  {games.find((game) => game.number === props.game).home
                    ? games.find((game) => game.number === props.game).runs[0]
                        .allstate
                    : games.find((game) => game.number === props.game).runs[0]
                        .opponent}
                </td>
                <td>
                  {games.find((game) => game.number === props.game).home
                    ? games.find((game) => game.number === props.game).runs[1]
                        .allstate
                    : games.find((game) => game.number === props.game).runs[1]
                        .opponent}
                </td>
                <td>
                  {games.find((game) => game.number === props.game).home
                    ? games.find((game) => game.number === props.game).runs[2]
                        .allstate
                    : games.find((game) => game.number === props.game).runs[2]
                        .opponent}
                </td>
                <td>
                  {games.find((game) => game.number === props.game).home
                    ? games.find((game) => game.number === props.game).runs[3]
                        .allstate
                    : games.find((game) => game.number === props.game).runs[3]
                        .opponent}
                </td>
                <td>
                  {games.find((game) => game.number === props.game).home
                    ? games.find((game) => game.number === props.game).runs[4]
                        .allstate
                    : games.find((game) => game.number === props.game).runs[4]
                        .opponent}
                </td>
                <td>
                  {games.find((game) => game.number === props.game).home
                    ? games.find((game) => game.number === props.game).runs[5]
                        .allstate
                    : games.find((game) => game.number === props.game).runs[5]
                        .opponent}
                </td>
                <td>
                  {games.find((game) => game.number === props.game).home
                    ? games.find((game) => game.number === props.game).runs[6]
                        .allstate
                    : games.find((game) => game.number === props.game).runs[6]
                        .opponent}
                </td>
                <td style={{ fontWeight: "700" }}>
                  {games.find((game) => game.number === props.game).home
                    ? games.find((game) => game.number === props.game)
                        .allstateScore
                    : games.find((game) => game.number === props.game)
                        .opponentScore}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BoxScore;
