import "./style.css"

const ArrowDown = (currentPlayer = 1) => {
    return /*html*/`
        <img class="arrow-player" src="../images/arrow-down.png" data-currentplayer="${currentPlayer}">
    `
}

export default ArrowDown