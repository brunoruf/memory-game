import "./style.css"
import CardTemplate from "../CardTemplate"

const CardFrontBack = () => {
    return /*html*/`
        <div class="card-front-back">
            <div class="card-front">${CardTemplate()}</div>
            <div class="card-back">${CardTemplate('cuphead', 'CupHead')}</div>
        </div>
    `
}

export default CardFrontBack