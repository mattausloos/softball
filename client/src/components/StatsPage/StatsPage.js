import React, { useEffect } from 'react';
import { gameStats } from '../../constants/gameStats';
import { players } from '../../constants/players';
import { getTotalStats } from '../../helpers/getTotalStats';
import './StatsPage.css';

const StatsPage = () => {

    const [playerStats, setPlayerStats] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        let stats = [];

        players.forEach((player) => {
            const totalStats = getTotalStats(gameStats, player);
            stats.push(totalStats);
        })

        console.log(stats);

        setPlayerStats(stats);
        setLoading(false)
    }, []);

    return (
        <>
        {
            loading ? 
            (
                <div>loading</div>
            )
            : (
                <table className="stats-table" style={{ fontSize: '14px', borderCollapse: 'collapse', width: '100%'}}>
                <thead>
                    <tr>
                    <th className="border" style={{ textAlign: 'left', width: '15%' }}>PLAYER</th>
                    <th className="border" style={{ paddingLeft: '8px'}}>G</th>
                    <th className="border">AB</th>
                    <th className="border">R</th>
                    <th className="border">H</th>
                    <th className="border">2B</th>
                    <th className="border">3B</th>
                    <th className="border">HR</th>
                    <th className="border">RBI</th>
                    <th className="border">BB</th>
                    <th className="border">SO</th>
                    <th className="border">SAC</th>
                    <th className="border">AVG</th>
                    <th className="border">OBP</th>
                    <th className="border">SLG</th>
                    <th className="border">OPS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        playerStats.map((player) => (
                            <tr>
                                <td style={{ textAlign: 'left', borderRight: '1px solid black'}}>{player.name}</td>
                                <td style={{ paddingLeft: '8px'}}>{player.games}</td>
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
                                <td style={{ borderLeft: '1px solid black'}}>{player.avg}</td>
                                <td>{player.obp}</td>
                                <td>{player.slg}</td>
                                <td>{player.ops}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            )
        }
        </>
    )
}

export default StatsPage;