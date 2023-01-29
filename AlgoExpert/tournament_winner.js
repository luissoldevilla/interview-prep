const HOME_TEAM_WON = 1;

function tournamentWinner(competitions, results) {
    let currentBestTeam = '';
    const scores = {[currentBestTeam]: 0};

    for (let idx = 0; idx < competitions.length; idx++) {
        const result = results[idx];
        const [homeTeam, awayTeam] = competitions[idx];

        const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;
        console.log(winningTeam)

        updatedScores(winningTeam, 3, scores);

        if (scores[winningTeam] > scores[currentBestTeam]) {
            currentBestTeam = winningTeam;
        }   
    }
    console.log(currentBestTeam)
    return currentBestTeam;
}

function updatedScores(team, points, scores) {
    if (!(team in scores)) scores[team] = 0;

    scores[team] += points;
}

tournamentWinner([["HTML", "Java"], ["Java", "Python"], ["Python", "HTML"]], [0, 1, 1])
tournamentWinner([["HTML", "Java"], ["Java", "Python"], ["Python", "HTML"]], [0, 2, 1])