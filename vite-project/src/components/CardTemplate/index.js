import "./style.css";


const CardTemplate = (image="card-closed", alt="?") => {
    return /*html*/`
        <article class="card-game">
            <img src="images/${image}.png" alt="${alt}">
        </article>
    `;
}

export default CardTemplate