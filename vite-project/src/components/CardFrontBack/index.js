import CardTemplate from "../CardTemplate"


const CardFrontBack = () => {
    return /*html*/`
        <div>
            ${CardTemplate()}
            ${CardTemplate()}
        </div>
    `
}

export default CardFrontBack