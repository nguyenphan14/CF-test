let aBoard = [
    {
        name: "Arsenal",
        points: 99,
        GD: 45
    },
    {
        name: "Chelsea",
        points: 75,
        GD: 39  
    },
    {
        name: "MU",
        points: 60,
        GD: 29
    },
    {
        name: "Liverpool",
        points: 88,
        GD: 39
    }
];

const rank = (teams) => {
    let ranked = teams.sort((a, b) => {
        if(a.points < b.points) {
            return 1;
        } else if (a.points > b.points) {
            return -1;
        } else {
            if(a.GD < b.GD) {
                return -1;
            } else if (a.GD > b.GD) {
                return 1;
            } else {
                [a, b].sort();
            }
        }
    });
    for(let i = 0; i < teams.length; i++) {
        teams[i].position = ranked.indexOf(teams[i])+1;
    }
    return ranked;
}

console.log(rank(aBoard))