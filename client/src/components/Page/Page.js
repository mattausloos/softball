import React, { useState } from 'react';
import NewsPage from '../NewsPage/NewsPage';
import SchedulePage from '../SchedulePage/SchedulePage';
import StatsPage from '../StatsPage/StatsPage';
import RosterPage from '../RosterPage/RosterPage';
import BoxScore from '../BoxScore/BoxScore';



const Page = (props) => {
    const [boxScore, setBoxScore] = useState(0);

    const pageType = () => {
        switch(props.currentPage){
            case 0:
                return (
                    <NewsPage />
                );
            case 1:
                return (
                    <SchedulePage setCurrentPage={props.setCurrentPage} setBoxScore={setBoxScore}/>
                );
            case 2:
                return (
                    <StatsPage />
                );
            case 3:
                return (
                    <RosterPage />
                );
            case 4:
                return (
                    <BoxScore game={boxScore}/>
                );
            default:
                return (
                    <div>
                        Error loading page...
                    </div>
                )
        }
    }

    return (
        <div style={{ margin: '0px 5% 0% 5%', height: '88vh', overflow: 'scroll', paddingRight: `${props.currentPage === 0 ? '20px' : '0px'}`, paddingTop: '40px'}}>
        {
            pageType()
        }
        </div>
    )
};

export default Page;