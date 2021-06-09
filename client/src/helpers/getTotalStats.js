import { getAvg, getObp, getSlg } from './calculateAverages';

export const getTotalStats = (gameStats, name) => {
    let games = 0;
    let atBats = 0;
    let runs = 0;
    let hits = 0;
    let doubles = 0;
    let triples = 0;
    let homeruns = 0;
    let runsBattedIn = 0;
    let baseOnBalls = 0;
    let strikeouts = 0;
    let sac = 0;
    let avg = 0;
    let obp = 0;
    let slg = 0;
    let ops = 0;

    gameStats.map((game) => {
        const individualGameStats = game.playerStats.find((player) => player.name === name);
        if (individualGameStats){  // player played that game
            games += 1;
            atBats += Number(individualGameStats.atBats);
            runs += Number(individualGameStats.runs);
            hits += Number(individualGameStats.hits);
            doubles += Number(individualGameStats.doubles);
            triples += Number(individualGameStats.triples);
            homeruns += Number(individualGameStats.homeruns);
            runsBattedIn += Number(individualGameStats.runsBattedIn);
            baseOnBalls += Number(individualGameStats.baseOnBalls);
            strikeouts += Number(individualGameStats.strikeouts);
            sac += Number(individualGameStats.sac);
        }
    });

    avg = getAvg(hits, atBats);
    obp = getObp(hits, baseOnBalls, atBats, sac);
    slg = getSlg(homeruns, triples, doubles, hits, atBats)
    ops = Number(Number(obp) + Number(slg)).toFixed(3);

    return {
        name,
        games,
        atBats,
        runs,
        hits,
        doubles,
        triples,
        homeruns,
        runsBattedIn,
        baseOnBalls,
        strikeouts,
        sac,
        avg,
        obp,
        slg,
        ops
    }
}
