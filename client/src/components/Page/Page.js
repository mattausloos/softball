import React from 'react';
import NewsPage from '../NewsPage/NewsPage';
import SchedulePage from '../SchedulePage/SchedulePage';
import StatsPage from '../StatsPage/StatsPage';
import RosterPage from '../RosterPage/RosterPage';



const Page = (props) => {

    const pageType = () => {
        switch(props.currentPage){
            case 0:
                return (
                    <NewsPage />
                );
            case 1:
                return (
                    <SchedulePage />
                );
            case 2:
                return (
                    <StatsPage />
                );
            case 3:
                return (
                    <RosterPage />
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
        <div style={{ margin: '80px 5% 0% 5%'}}>
        {
            pageType()
        }
        </div>
    )
};

export default Page;