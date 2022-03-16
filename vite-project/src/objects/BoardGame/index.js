import "./style.css";
import CardFrontBack from "../../components/CardFrontBack";

const BoardGame = (AmountCards) => {
    const $htmlCardFrontBack = CardFrontBack()
    const $htmlContent = $htmlCardFrontBack.repeat(AmountCards)
    return /*html*/`
    <section class="board-game">
        ${$htmlContent}
    </section>  
    `
}

export default BoardGame;