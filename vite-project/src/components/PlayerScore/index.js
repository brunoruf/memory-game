import "./style.css"

const PlayerScore = (points = 0) => {
    return /*html*/`
        <div class="score-wrapper" data-points ="${points}" >
            <div class="player-score"></div>
            <div class="player-score"></div>
            <div class="player-score"></div>
            <div class="player-score"></div>
        </div>
    `
}

export default PlayerScore