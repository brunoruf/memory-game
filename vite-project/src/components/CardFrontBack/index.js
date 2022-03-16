import "./style.css"
import CardTemplate from "../CardTemplate"



const CardFrontBack = () => {
    return /*html*/`
        <div class="card-front-back" onClick="cardFrontBack.handleClick(event)">
            <div class="card-front">${CardTemplate()}</div>
            <div class="card-back">${CardTemplate('cuphead', 'CupHead')}</div>
        </div>`

}

window.cardFrontBack = {}

window.cardFrontBack.handleClick= (event) => {
        const origin = event.target
        const selectCard = origin.closest('.card-front-back')
        /*
        if (selectCard.classList.contains('active')) {
            selectCard.classList.remove('active')
        } else {
            selectCard.classList.add('active')
        }
        O que está aqui embaixo \/ faz exatamente o mesmo que está comentado, verifica se tem e remove / se não tem adiciona
        */
        selectCard.classList.toggle('active')

    }

export default CardFrontBack