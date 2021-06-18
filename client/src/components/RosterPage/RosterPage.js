import React from 'react';

const RosterPage = () => {
    const players = [
        {
            name: 'Matt Ausloos',
            batThrows: 'R/R',
            position: 'OF'
        },
        {
            name: 'Dennis Vavrik',
            batThrows: 'R/R',
            position: 'OF'
        },
        {
            name: 'Jim Fuchs',
            batThrows: 'R/R',
            position: 'C'
        },
        {
            name: 'Jason Fuchs',
            batThrows: 'R/R',
            position: 'OF'
        },
        {
            name: 'Josh Serio',
            batThrows: 'R/R',
            position: 'OF'
        },
        {
            name: 'Donny Baseball',
            batThrows: 'L/R',
            position: '1B'
        },
        {
            name: 'Steve Nelsen',
            batThrows: 'R/R',
            position: 'P'
        },
        {
            name: 'Avery Goodman',
            batThrows: 'R/R',
            position: '2B'
        },
        {
            name: 'Jon Keane',
            batThrows: 'R/R',
            position: 'SS'
        },
        {
            name: 'Matt Goetz',
            batThrows: 'R/R',
            position: '3B'
        },
        {
            name: 'Rick Steinberg',
            batThrows: 'R/R',
            position: '3B'
        },
        {
            name: 'Kelly Goodman',
            batThrows: 'R/R',
            position: 'C'
        },
        {
            name: `Bob 'Muthafuckin Truth' Goetz`,
            batThrows: 'R/R',
            position: 'GM'
        },
        {
            name: 'Elijah Goodman',
            batThrows: 'R/R',
            position: 'OF'
        },
        {
            name: 'Matthew Liewen',
            batThrows: 'R/R',
            position: 'OF'
        },
        {
            name: 'Sam Botbol',
            batThrows: 'R/R',
            position: 'OF'
        },
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