import React from 'react';
import image from '../../images/playoffgame1.jpg';

const NewsPage = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'left', marginBottom: '9px'}}>Season Opener On Hold</h1>
            <h3 style={{ color: 'gray', textAlign: 'left', margin:'0px' }}>Friday May 7th</h3>
            <div style={{ float: 'right', margin: '30px 0px 10px 25px'}}>
                <img src={image} alt="image" height="450px" width="450px"></img>
                <h5 style={{ color: 'gray', textAlign: 'left', margin: '3px'}}>Goodman is a failure</h5>
            </div>
            <p style={{ marginTop: '30px', textAlign: 'left', lineHeight: '20px' }}>
             Pathetic to say the least. After hitting rock bottom with Kelly Goodman as manager, you would think that the team could only rise up after his replacement. Elijah proves wrong as he lead his Allstate team to an embarrassing 12-24 loss against a team that crushed Allstate's spirits in the 2019 quarterfinals. The team started out with a vengeance as they hit 5 homeruns in the first inning making it a 9-0 lead. However, the Milliman's hitting performance came to no suprise as they followed up with 10 runs in the second inning, 5 runs in the 3rd inning, and 7 runs in the 4th inning. All while the Allstate hitters came to a dead stop and did not score a run until the 6th inning when they were down by 15. Any spectator knew the game was over after the 3rd inning by simply observing the negative body language team Allstate portrayed. Most of it coming from new manager Elijah Goodman. "Elijah is the worst teammate ever. That's all I have to say", stated superstar SS Jon Keane. Elijah did not wish to comment on his teammate's bold and accurate statement. Ex-manager Kelly Goodman had some advice for the new manager: "I'll just let him grow into that position. Me and the Truth made it look very easy". An indifferent Elijah responded with "[Kelly and Truth] made it look easy in the B league. We are now in the A league. In the A league, they had a significant losing record and were overmatched". RC Jason Fuchs had kind words to share following the team's season ending loss, "Great season, and outstanding job by Elijah hitting .860". Elijah made remarks about Jason stating "I don't like the kid. Horrible person to coach, but he had a great season for his standards". With the team agreeing that the season was a disappointment, it's useful to hear some words from a fan's perspective. Allstate superfan Andrew Bruggnik states that "I don't have much information but I heard that Elijah Goodman was the best player on the team by far". He continues, "in terms of bouncing back next year, they have a couple of weak links... mainly Jason Fuchs. They should cut him." In final, Elijah gives praise to 1B/C Donny Baseball for proving he can be a reliable 3-hitter and would also like to work in the offseason with Steve Nelsen, Dennis Vavrik, and Jim Fuchs to get their swings back on track.
            </p>
        </div>
    )
}

export default NewsPage;