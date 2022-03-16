import CardTemplate from "../CardTemplate"


const CardFrontBack = () => {
    return /*html*/`
        <div>
            ${CardTemplate()}
            ${CardTemplate('cuphead', 'CupHead')}
        </div>
    `
}

export default CardFrontBack