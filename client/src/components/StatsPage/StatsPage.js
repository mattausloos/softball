import React, { useEffect } from "react";
import { gameStats } from "../../constants/gameStats";
import { players } from "../../constants/players";
import { getTotalStats } from "../../helpers/getTotalStats";
import PlayerInfo from "../PlayerInfo/PlayerInfo";
import playerInformaton from "../../constants/playerInfo";
import "./StatsPage.css";

const StatsPage = () => {
  const [playerStats, setPlayerStats] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [playerSelected, setPlayerSelected] = React.useState(null);
  const [statSelected, setStatSelected] = React.useState("hits");

  useEffect(() => {
    let stats = [];

    players.forEach((player) => {
      const totalStats = getTotalStats(gameStats, player);
      stats.push(totalStats);
    });

    setPlayerStats(stats);
    setLoading(false);
  }, []);

  const sortByStat = (stat) => {
    console.log("player stats", playerStats);
    console.log("stat selected", statSelected);
    console.log("stat", stat);

    if (statSelected !== stat) {
      setStatSelected(stat);
      const playerStatsCopy = playerStats.slice();
      playerStatsCopy.sort(function (a, b) {
        return parseFloat(b[stat]) - parseFloat(a[stat]);
      });
      console.log("sorted", playerStats);
      setPlayerStats(playerStatsCopy);
    }
  };

  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : (
        <table
          className="stats-table"
          style={{
            fontSize: "14px",
            borderCollapse: "collapse",
            width: "100%",
          }}
        >
          <thead>
            <tr>
              <th
                className="border"
                style={{ textAlign: "left", width: "15%" }}
              >
                PLAYER
              </th>
              <th
                className="border"
                style={{
                  paddingLeft: "8px",
                  backgroundColor: `${
                    statSelected === "games" ? "rgb(71, 103, 183)" : "white"
                  }`,
                  color: `${statSelected === "games" ? "white" : "black"}`,
                  cursor: "pointer",
                }}
                onClick={() => sortByStat("games")}
              >
                G
              </th>
              <th
                className="border"
                style={{
                  paddingLeft: "8px",
                  backgroundColor: `${
                    statSelected === "atBats" ? "rgb(71, 103, 183)" : "white"
                  }`,
                  color: `${statSelected === "atBats" ? "white" : "black"}`,
                  cursor: "pointer",
                }}
                onClick={() => sortByStat("atBats")}
              >
                AB
              </th>
              <th
                className="border"
                style={{
                  paddingLeft: "8px",
                  backgroundColor: `${
                    statSelected === "runs" ? "rgb(71, 103, 183)" : "white"
                  }`,
                  color: `${statSelected === "runs" ? "white" : "black"}`,
                  cursor: "pointer",
                }}
                onClick={() => sortByStat("runs")}
              >
                R
              </th>
              <th
                className="border"
                style={{
                  paddingLeft: "8px",
                  backgroundColor: `${
                    statSelected === "hits" ? "rgb(71, 103, 183)" : "white"
                  }`,
                  color: `${statSelected === "hits" ? "white" : "black"}`,
                  cursor: "pointer",
                }}
                onClick={() => sortByStat("hits")}
              >
                H
              </th>
              <th
                className="border"
                style={{
                  paddingLeft: "8px",
                  backgroundColor: `${
                    statSelected === "doubles" ? "rgb(71, 103, 183)" : "white"
                  }`,
                  color: `${statSelected === "doubles" ? "white" : "black"}`,
                  cursor: "pointer",
                }}
                onClick={() => sortByStat("doubles")}
              >
                2B
              </th>
              <th
                className="border"
                style={{
                  paddingLeft: "8px",
                  backgroundColor: `${
                    statSelected === "triples" ? "rgb(71, 103, 183)" : "white"
                  }`,
                  color: `${statSelected === "triples" ? "white" : "black"}`,
                  cursor: "pointer",
                }}
                onClick={() => sortByStat("triples")}
              >
                3B
              </th>
              <th
                className="border"
                style={{
                  paddingLeft: "8px",
                  backgroundColor: `${
                    statSelected === "homeruns" ? "rgb(71, 103, 183)" : "white"
                  }`,
                  color: `${statSelected === "homeruns" ? "white" : "black"}`,
                  cursor: "pointer",
                }}
                onClick={() => sortByStat("homeruns")}
              >
                HR
              </th>
              <th
                className="border"
                style={{
                  paddingLeft: "8px",
                  backgroundColor: `${
                    statSelected === "runsBattedIn"
                      ? "rgb(71, 103, 183)"
                      : "white"
                  }`,
                  color: `${
                    statSelected === "runsBattedIn" ? "white" : "black"
                  }`,
                  cursor: "pointer",
                }}
                onClick={() => sortByStat("runsBattedIn")}
              >
                RBI
              </th>
              <th
                className="border"
                style={{
                  paddingLeft: "8px",
                  backgroundColor: `${
                    statSelected === "baseOnBalls"
                      ? "rgb(71, 103, 183)"
                      : "white"
                  }`,
                  color: `${
                    statSelected === "baseOnBalls" ? "white" : "black"
                  }`,
                  cursor: "pointer",
                }}
                onClick={() => sortByStat("baseOnBalls")}
              >
                BB
              </th>
              <th
                className="border"
                style={{
                  paddingLeft: "8px",
                  backgroundColor: `${
                    statSelected === "strikeouts"
                      ? "rgb(71, 103, 183)"
                      : "white"
                  }`,
                  color: `${statSelected === "strikeouts" ? "white" : "black"}`,
                  cursor: "pointer",
                }}
                onClick={() => sortByStat("strikeouts")}
              >
                SO
              </th>
              <th
                className="border"
                style={{
                  paddingLeft: "8px",
                  backgroundColor: `${
                    statSelected === "sac" ? "rgb(71, 103, 183)" : "white"
                  }`,
                  color: `${statSelected === "sac" ? "white" : "black"}`,
                  cursor: "pointer",
                }}
                onClick={() => sortByStat("sac")}
              >
                SAC
              </th>
              <th
                className="border"
                style={{
                  paddingLeft: "8px",
                  backgroundColor: `${
                    statSelected === "avg" ? "rgb(71, 103, 183)" : "white"
                  }`,
                  color: `${statSelected === "avg" ? "white" : "black"}`,
                  cursor: "pointer",
                }}
                onClick={() => sortByStat("avg")}
              >
                AVG
              </th>
              <th
                className="border"
                style={{
                  paddingLeft: "8px",
                  backgroundColor: `${
                    statSelected === "obp" ? "rgb(71, 103, 183)" : "white"
                  }`,
                  color: `${statSelected === "obp" ? "white" : "black"}`,
                  cursor: "pointer",
                }}
                onClick={() => sortByStat("obp")}
              >
                OBP
              </th>
              <th
                className="border"
                style={{
                  paddingLeft: "8px",
                  backgroundColor: `${
                    statSelected === "slg" ? "rgb(71, 103, 183)" : "white"
                  }`,
                  color: `${statSelected === "slg" ? "white" : "black"}`,
                  cursor: "pointer",
                }}
                onClick={() => sortByStat("slg")}
              >
                SLG
              </th>
              <th
                className="border"
                style={{
                  paddingLeft: "8px",
                  backgroundColor: `${
                    statSelected === "ops" ? "rgb(71, 103, 183)" : "white"
                  }`,
                  color: `${statSelected === "ops" ? "white" : "black"}`,
                  cursor: "pointer",
                }}
                onClick={() => sortByStat("ops")}
              >
                OPS
              </th>
            </tr>
          </thead>
          <tbody>
            {playerStats.map((player) => (
              <tr>
                <td
                  style={{
                    textAlign: "left",
                    borderRight: "1px solid black",
                    pointer: "cursor",
                    textDecoration: "underline",
                    color: "#191970",
                  }}
                  onClick={() =>
                    setPlayerSelected(
                      playerInformaton.find(
                        (currentPlayer) => currentPlayer.name === player.name
                      )
                    )
                  }
                >
                  {player.name}
                </td>
                <td
                  style={{
                    paddingLeft: "8px",
                    color: `${statSelected === "games" ? "white" : "black"}`,
                    backgroundColor: `${
                      statSelected === "games" ? "rgb(71, 103, 183)" : "white"
                    }`,
                  }}
                >
                  {player.games}
                </td>
                <td
                  style={{
                    color: `${statSelected === "atBats" ? "white" : "black"}`,
                    backgroundColor: `${
                      statSelected === "atBats" ? "rgb(71, 103, 183)" : "white"
                    }`,
                  }}
                >
                  {player.atBats}
                </td>
                <td
                  style={{
                    color: `${statSelected === "runs" ? "white" : "black"}`,
                    backgroundColor: `${
                      statSelected === "runs" ? "rgb(71, 103, 183)" : "white"
                    }`,
                  }}
                >
                  {player.runs}
                </td>
                <td
                  style={{
                    color: `${statSelected === "hits" ? "white" : "black"}`,
                    backgroundColor: `${
                      statSelected === "hits" ? "rgb(71, 103, 183)" : "white"
                    }`,
                  }}
                >
                  {player.hits}
                </td>
                <td
                  style={{
                    color: `${statSelected === "doubles" ? "white" : "black"}`,
                    backgroundColor: `${
                      statSelected === "doubles" ? "rgb(71, 103, 183)" : "white"
                    }`,
                  }}
                >
                  {player.doubles}
                </td>
                <td
                  style={{
                    color: `${statSelected === "triples" ? "white" : "black"}`,
                    backgroundColor: `${
                      statSelected === "triples" ? "rgb(71, 103, 183)" : "white"
                    }`,
                  }}
                >
                  {player.triples}
                </td>
                <td
                  style={{
                    color: `${statSelected === "homeruns" ? "white" : "black"}`,
                    backgroundColor: `${
                      statSelected === "homeruns"
                        ? "rgb(71, 103, 183)"
                        : "white"
                    }`,
                  }}
                >
                  {player.homeruns}
                </td>
                <td
                  style={{
                    color: `${
                      statSelected === "runsBattedIn" ? "white" : "black"
                    }`,
                    backgroundColor: `${
                      statSelected === "runsBattedIn"
                        ? "rgb(71, 103, 183)"
                        : "white"
                    }`,
                  }}
                >
                  {player.runsBattedIn}
                </td>
                <td
                  style={{
                    color: `${
                      statSelected === "baseOnBalls" ? "white" : "black"
                    }`,
                    backgroundColor: `${
                      statSelected === "baseOnBalls"
                        ? "rgb(71, 103, 183)"
                        : "white"
                    }`,
                  }}
                >
                  {player.baseOnBalls}
                </td>
                <td
                  style={{
                    color: `${
                      statSelected === "strikeouts" ? "white" : "black"
                    }`,
                    backgroundColor: `${
                      statSelected === "strikeouts"
                        ? "rgb(71, 103, 183)"
                        : "white"
                    }`,
                  }}
                >
                  {player.strikeouts}
                </td>
                <td
                  style={{
                    color: `${statSelected === "sac" ? "white" : "black"}`,
                    backgroundColor: `${
                      statSelected === "sac" ? "rgb(71, 103, 183)" : "white"
                    }`,
                  }}
                >
                  {player.sac}
                </td>
                <td
                  style={{
                    borderLeft: "1px solid black",
                    color: `${statSelected === "avg" ? "white" : "black"}`,
                    backgroundColor: `${
                      statSelected === "avg" ? "rgb(71, 103, 183)" : "white"
                    }`,
                  }}
                >
                  {player.avg}
                </td>
                <td
                  style={{
                    color: `${statSelected === "obp" ? "white" : "black"}`,
                    backgroundColor: `${
                      statSelected === "obp" ? "rgb(71, 103, 183)" : "white"
                    }`,
                  }}
                >
                  {player.obp}
                </td>
                <td
                  style={{
                    color: `${statSelected === "slg" ? "white" : "black"}`,
                    backgroundColor: `${
                      statSelected === "slg" ? "rgb(71, 103, 183)" : "white"
                    }`,
                  }}
                >
                  {player.slg}
                </td>
                <td
                  style={{
                    color: `${statSelected === "ops" ? "white" : "black"}`,
                    backgroundColor: `${
                      statSelected === "ops" ? "rgb(71, 103, 183)" : "white"
                    }`,
                  }}
                >
                  {player.ops}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {playerSelected && (
        <PlayerInfo
          player={playerSelected}
          setPlayerSelected={setPlayerSelected}
        />
      )}
    </>
  );
};

export default StatsPage;
