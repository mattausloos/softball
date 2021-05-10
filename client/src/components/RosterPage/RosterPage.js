import React from 'react';

const RosterPage = () => {
    const players = [
        {
            name: 'Matt Ausloos',
            batThrows: 'R/R',
            position: 'OF'
        },
        {
            name: 'Elijah Goodman',
            batThrows: 'R/R',
            position: 'OF'
        }
    ]
    return (
        <table style={{ width: '100%' }}>
            <thead style={{ backgroundColor: '#ECECEC' }}>
                <th style={{ width: '50%', textAlign: 'left', padding: '8px'}}>Players</th>
                <th style={{ width: '20%', padding: '8px'}}>B/T</th>
                <th style={{ width: '30%', padding: '8px'}}>Pos</th>
            </thead>
            <tbody>
                {
                    players.map((playerInfo, index) => (
                        <tr>
                        <td style={{ textAlign: 'left', padding: '8px'}}>{playerInfo.name}</td>
                        <td>{playerInfo.batThrows}</td>
                        <td>{playerInfo.position}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default RosterPage;