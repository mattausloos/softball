import React from 'react';
import './StatsPage.css';

const StatsPage = () => {

    const playerInfo = [
        {
            name: 'Matt Ausloos',
            games: '1',
            atBats: '4',
            runs: '3',
            hits: '2',
            doubles: '1',
            triples: '1',
            homeruns: '0',
            runsBattedIn: '2',
            baseOnBalls: '1',
            strikeouts: '0',
            average: '1.000',
            onBasePercentage: '1.000',
            sluggingPercentage: '1.500',
            onBasePlusSluggingPercentage: '2.000'
        }
    ]
    return (
        <>
        StatsPage
            <table style={{ fontSize: '12px', borderCollapse: 'collapse', width: '100%'}}>
                <thead>
                    <th className="border" style={{ textAlign: 'left' }}>PLAYER</th>
                    <th className="border">G</th>
                    <th className="border">AB</th>
                    <th className="border">R</th>
                    <th className="border">H</th>
                    <th className="border">2B</th>
                    <th className="border">3B</th>
                    <th className="border">HR</th>
                    <th className="border">RBI</th>
                    <th className="border">BB</th>
                    <th className="border">SO</th>
                    <th className="border">AVG</th>
                    <th className="border">OBP</th>
                    <th className="border">SLG</th>
                    <th className="border">OPS</th>
                </thead>
                <tbody>
                    {
                        playerInfo.map((player, index) => (
                            <tr>
                                <td style={{ textAlign: 'left'}}>{player.name}</td>
                                <td>{player.games}</td>
                                <td>{player.atBats}</td>
                                <td>{player.runs}</td>
                                <td>{player.hits}</td>
                                <td>{player.doubles}</td>
                                <td>{player.triples}</td>
                                <td>{player.homeruns}</td>
                                <td>{player.runsBattedIn}</td>
                                <td>{player.baseOnBalls}</td>
                                <td>{player.strikeouts}</td>
                                <td>{player.average}</td>
                                <td>{player.onBasePercentage}</td>
                                <td>{player.sluggingPercentage}</td>
                                <td>{player.onBasePlusSluggingPercentage}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default StatsPage;