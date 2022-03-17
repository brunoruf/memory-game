import "./style.css"
import PlayerName from "../../components/PlayerName"
import PlayerScore from "../../components/PlayerScore"

const ScoreBoard = () => {
    return /*html*/`
    <div class="score-board">
    <div class="arrow-player"><img src="../images/arrow-down.png"></div>
        ${PlayerName('Papai')}
        ${PlayerScore(1)}
        <div class="versus">x</div>
        ${PlayerScore(3)}
        ${PlayerName('Luli')}
    </div>
    `
}

export default ScoreBoard