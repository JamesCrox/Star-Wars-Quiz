let username = document.querySelector('#username')
let saveScoreBtn = document.querySelector('#saveScoreBtn')
let finalScore = document.querySelector('#finalScore')
let mostRecentScore = localStorage.getItem('mostRecentScore')
let highScores = JSON.parse(localStorage.getItem('highScores')) || []
let MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

function saveHighScore(e) {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a, b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('highscores.html')
}