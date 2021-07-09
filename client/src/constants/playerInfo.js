const players = [
  {
    name: "Matt Ausloos",
    batThrows: "R/R",
    position: "OF",
    img: "mattausloos.jpg",
    bio:
      "Matt has been Team Allstate's outfielder since 2015. When not injured, he is a tremendous assest to the team and his abilities should not be overlooked. He has disapproved of Manager Kelly Goodman throughout his time with Team Allstate, and looks forward to a trade.",
  },
  {
    name: "Dennis Vavrik",
    batThrows: "R/R",
    position: "OF",
    img: "noplayer.jpg",
    bio:
      "Dennis is Team Allstate's outfielder, catcher, and also the gossiper of the team. Him and teammate Jim Fuchs always report complaints to Manager Kelly Goodman saying they are better players than Elijah Goodman and Jon Keane and that Kelly should remove them from the squad. Nevertheless, Dennis brings a positive attitude and comes through when the team needs him.",
  },
  {
    name: "Jim Fuchs",
    batThrows: "R/R",
    position: "C",
    img: "jimfuchs.jpg",
    bio:
      "Jim is Team Allstate's outfielder, catcher, and is the best looking old timer in the league. He stays in shape and is versatile in the field. He brings more performance to drinking beer with the boys in the postgame than his actual performance during the game.",
  },
  {
    name: "Jason Fuchs",
    batThrows: "R/R",
    position: "OF",
    img: "jasonfuchs.jpg",
    bio:
      "Jason has developed into the lead off spot for Team Allstate this year. His offensive career has steadily increased while his defense is still inconsistent. He lifts the most out of all his teammates but has yet to hit a homerun.",
  },
  {
    name: "Josh Serio",
    batThrows: "R/R",
    position: "OF",
    img: "joshserio.jpg",
    bio:
      "Josh is a big man with a heavy stick. He has just enough mobility in the outfield that makes him effective defensively and offensively he bats like an angry bull. Josh also leads the team in career ejections.",
  },
  {
    name: "Donny Baseball",
    batThrows: "R/R",
    position: "1B",
    img: "donnybaseball.jpg",
    bio:
      "Donny is a party animal on and off the field. His ability to hit it to the opposite field is exceptional as well as his ability to bend down and touch his toes with breaking at the knees. He has offered to lead team yoga classes during the offseason but has not received interest from his peers.",
  },
  {
    name: "Steve Nelsen",
    batThrows: "L/R",
    position: "P",
    img: "stevenelsen.jpg",
    bio:
      "Steve is Team Allstate's starting pitcher and is a big contributor to the offensive attack. He is the heart and soul of this Allstate squad because without him, Kelly Goodman takes the mound which is an automatic loss. Steve is a descendant of Babe Ruth.",
  },
  {
    name: "Avery Goodman",
    batThrows: "R/R",
    position: "2B",
    img: "averygoodman.jpg",
    bio:
      "Avery has the quickest feet of all the old timers. Umpires have inspected his knee brace thinking it gives him an advantage but there have been no suspensions. He's a valuable slap hitting second baseman that is following his older brother's footsteps",
  },
  {
    name: "Jon Keane",
    batThrows: "R/R",
    position: "SS",
    img: "jonkeane.jpg",
    bio:
      "Jon is Team Allstate's go to hitter when we are losing. He has the ability to drive the ball out of the park and to leg out extra bases. However, his fielding ability is atrocious as he leads the team in errors. Jon is also a man of faith. He prays before every game which contributes to his success. We are lucky to have him on our side. #Godspeed.",
  },
  {
    name: "Matt Goetz",
    batThrows: "R/R",
    position: "3B",
    img: "mattgoetz.jpg",
    bio:
      "Matt is valuable at infielding, inconsistent at power hitting, and fanatically devoted to Marquette sporting events. He recently lost his 401K captial gains as he gambled it away on Marquette girl's volleyball. The team supports Matt during this rough time.",
  },
  {
    name: "Rick Steinberg",
    batThrows: "R/R",
    position: "3B",
    img: "ricksteinberg.jpg",
    bio:
      "Rick is the vaccum third baseman for Team Allstate with a tremendous ability to ground into double plays. He likes to put spider tack in his glove and cork his bat. With Rick's background in law, he understands what's legal and what's illegal. He's a good teammate as he has expunged numerous criminal convictions committed by Team Allstate.",
  },
  {
    name: "Kelly Goodman",
    batThrows: "R/R",
    position: "C",
    img: "kellygoodman.jpg",
    bio:
      "Kelly is an egostical player that manages the team on non gamedays. He has managed the team to two championships in 2016 and 2017 but has lost respect from his teammates since then. He has been a high performing hitter when in clutch situations but tends to lie to the stat keeper saying his batting average should be higher.",
  },
  {
    name: `Bob 'Truth' Goetz`,
    batThrows: "R/R",
    position: "GM",
    img: "bobgoetz.jpg",
    bio:
      "Bob has been the Truth for as long as time can remember. The team is blessed to have a man like him in their presence. His wisdom and guidance is unmatchable and has helped the team rise up on numerous occasions. The only concern with Bob is that he limits his schedule with the team, which allows more time for his partner Kelly Goodman to destroy this squad.",
  },
  {
    name: "Elijah Goodman",
    batThrows: "R/R",
    position: "OF",
    img: "elijahgoodman.jpg",
    bio:
      "Elijah is Team Allstate's gameday manager and outfielder. The team admires his competitve nature and his aggressive negative remarks when things don't go his way. Nothing motivates the team more than Elijah screaming in their faces all of the things they did wrong. We look forward to how Elijah bounces back from a game 1 playoff loss in 2020 and to more player of the month awards.",
  },
  {
    name: "Matthew Liewen",
    batThrows: "R/R",
    position: "OF",
    img: "matthewliewen.jpg",
    bio:
      "Matt is a punk kid that grew up in the slums of Brookfield, WI. Even though life was a struggle for him, he stayed persistant in striving to reach his goal of playing in the National Football League. Everything went smoothly until his name wasn't called in the 2018 NFL Draft. Now, Matt spends his days drinking and pursuing another dream of making the roster for Team Allstate. Congratuations Matt, you made it!",
  },
  {
    name: "Sam Botbol",
    batThrows: "R/R",
    position: "OF",
    img: "sambotbol.jpg",
    bio:
      "Sam is the utility player Team Allstate needs when they want to intimidate their opponents. When the opposing teams see Sam's 6'7\" frame they either intentionally walk him or forfeit. Sam is a wild dog without a leash so it's important the team only utilizes him when necessary.",
  },
  {
    name: "Seth Nelsen",
    batThrows: "L/R",
    position: "OF",
    img: "sethnelsen.jpg",
    bio:
      "Seth is a temporary member of Team Allstate and a permanent member of the United States Navy. Seth is a disciplined individual and dreams of putting Team Allstate through Navy bootcamp to see which players make it through. He believes Manager Kelly Goodman would be first to tap out.",
  },
  {
    name: "Andrew Bruggink",
    batThrows: "R/R",
    position: "SS",
    img: "andrewbruggink.jpg",
    bio:
      "Andrew is a tall skinny kid that is also Jon Keane's replacement when Jon commits errors or is hurt. Andrew has made one appearance this year and performed well. Andrew is a basketball star but stated that he 'waited three years for the opportunity to play on Team Allstate'.",
  },
];

export default players;
