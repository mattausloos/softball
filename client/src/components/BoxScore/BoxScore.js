import React from 'react';
import { gameStats } from '../../constants/gameStats';
import './BoxScore.css';

const BoxScore = (props) => {
    const avg = (hits, atBats) => {
        return Number(hits/atBats).toFixed(3)
    }

    const obp = (hits, baseOnBalls, atBats, sac) => {
        return Number((Number(hits) + Number(baseOnBalls))/(Number(atBats) + Number(baseOnBalls) + Number(sac))).toFixed(3)
    }

    const slg = (homeruns, triples, doubles, hits, atBats) => {
        return Number(((Number(homeruns) * 4) + (Number(triples) * 3) + (Number(doubles) * 2) + ((Number(hits) - (Number(homeruns) + Number(triples) + Number(doubles))))) / (Number(atBats))).toFixed(3)
    }
    return (
        <table className="box-score-table" style={{ margin: '0px auto' }}>
            <thead style={{ textDecoration: 'underline' }}>
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
                {
                    gameStats.find((game) => game.game === props.game).playerStats.map((player) => (
                        <tr>
                            <td style={{ textAlign: 'left'}}>{player.name}</td>
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
                            <td>{obp(player.hits, player.baseOnBalls, player.atBats, player.sac)}</td>
                            <td>{slg(player.homeruns, player.triples, player.doubles, player.hits, player.atBats)}</td>
                            <td>{Number(Number(obp(player.hits, player.baseOnBalls, player.atBats, player.sac)) + Number(slg(player.homeruns, player.triples, player.doubles, player.hits, player.atBats))).toFixed(3)}</td>
                        </tr>
                    ))
}
            </tbody>
            </table>
    )
}

export default BoxScore;