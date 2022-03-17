import "./style.css"

const PlayerScore = (points = 0) => {
    return /*html*/`
        <div data-points ="${points}" class="score-wrapper">
            <div class="player-score"></div>
            <div class="player-score"></div>
            <div class="player-score"></div>
        </div>
    `
}

export default PlayerScore