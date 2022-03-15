import "./style.css";
import CardTemplate from "../../components/CardTemplate";

const BoardGame = (AmountCards) => {
    const $htmlCardTemplate = CardTemplate()
    const $htmlContent = $htmlCardTemplate.repeat(AmountCards)
    return `
    <section class="board-game">
        ${$htmlContent}
    </section>
        
    `
}

export default BoardGame;