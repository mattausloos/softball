export const getAvg = (hits, atBats) => {
    return Number(hits/atBats).toFixed(3)
}

export const getObp = (hits, baseOnBalls, atBats, sac) => {
    return Number((Number(hits) + Number(baseOnBalls))/(Number(atBats) + Number(baseOnBalls) + Number(sac))).toFixed(3)
}

export const getSlg = (homeruns, triples, doubles, hits, atBats) => {
    return Number(((Number(homeruns) * 4) + (Number(triples) * 3) + (Number(doubles) * 2) + ((Number(hits) - (Number(homeruns) + Number(triples) + Number(doubles))))) / (Number(atBats))).toFixed(3)
}
