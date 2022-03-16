import "./style.css"
import PlayerName from "../../components/PlayerName"
import PlayerScore from "../../components/PlayerScore"

const ScoreBoard = () => {
    return /*html*/`
    <div class="score-board">
        ${PlayerName('Papai')}
        ${PlayerScore()}
        ${PlayerName('Luli')}
    </div>
    `
}

export default ScoreBoard