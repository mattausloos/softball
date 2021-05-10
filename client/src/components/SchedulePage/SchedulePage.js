import React from 'react';

const SchedulePage = () => {
    const games = [
        {
            date: 'Apr 1',
            versus: 'vs. Boulder Junction',
            result: 'W',
            score: ', 2-1'
        },
        {
            date: 'Apr 8',
            versus: 'vs. Pizza Man',
            result: 'L',
            score: ', 2-14'
        },
        {
            date: 'Apr 15',
            versus: 'vs. Sluggos',
            result: 'W',
            score: ', 12-11'
        },
    ]
    return (
        <div>
            {
                games.map((gameInfo, index) => (
                    <div style={{ height: '60px', backgroundColor: `${index % 2 === 0 ? '#ECECEC' : 'white'}`, display: 'flex' }}>
                        <div style={{ textAlign: 'left', margin: '16px 20px 30px 20px', fontSize: '20px', fontWeight: '700', width: '20%'}}>
                            {gameInfo.date}
                        </div>
                        <div style={{ textAlign: 'left', margin: '20px', fontSize: '15px', opacity: '60%', width: '40%'}}>
                            {gameInfo.versus}
                        </div>
                        <div style={{ textAlign: 'left', display: 'flex', width: '25%', margin: '20px'}}>
                            <div style={{ color: `${gameInfo.result === 'W' ? 'green' : 'red'}`}}>
                                {gameInfo.result}
                            </div>
                            <div>
                                {gameInfo.score}
                            </div>
                        </div>
                        <a href="#" style={{ width: '15%', margin: 'auto', color: 'blue'}}>Box score</a>
                    </div>
                ))
            }
        </div>
    )
}

export default SchedulePage;