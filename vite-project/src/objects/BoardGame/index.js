import "./style.css";
import CardFrontBack from "../../components/CardFrontBack";
import cards from "./data.js"

const BoardGame = (AmountCards) => {
    //const $htmlContent = $htmlCardFrontBack.repeat(AmountCards)


    const $htmlCardsList = cards.map((card) => CardFrontBack(card.image, card.alt))
    const $htmlCards = $htmlCardsList.join('')
    
    return /*html*/`
    <section class="board-game">
        ${$htmlCards}
    </section>  
    `
}

export default BoardGame;