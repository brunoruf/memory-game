
import CardTemplate from "../../components/CardTemplate";

const BoardGame = (AmountCards) => {
    const $htmlCardTemplate = CardTemplate()
    const $htmlBoardGame = $htmlCardTemplate.repeat(AmountCards)
    return $htmlBoardGame;
}

export default BoardGame;