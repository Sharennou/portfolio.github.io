const element = document.querySelector(".pagination ul");
const cardsPerPage = 9;
let totalPages = Math.ceil(Object.keys(pokemonData).length / cardsPerPage);
let page = 1;

updatePaginationAndCards();

function displayCardsForPage(domElementId, page, pokemonData) {
    const domElement = document.getElementById(domElementId);
    const pokemonArray = Object.entries(pokemonData);

    const startIndex = (page - 1) * cardsPerPage;
    const endIndex = Math.min(startIndex + cardsPerPage, pokemonArray.length);

    const pageCards = pokemonArray.slice(startIndex, endIndex).map(([id, pokemon]) => `
        <article class="card-article">
            <img src="/SAE 105/img/pokemon_img/img/full/${id}.png" alt="${pokemon.identifier}" class="card-image">
            <div class="card-data">
                <h3 class="card-titre">N°${String(id).padStart(3, '0')}</h3>
                <h1 class="Nom-pokemon">${pokemon.identifier.charAt(0).toUpperCase() + pokemon.identifier.slice(1)}</h1>
            </div>
            <img src="/img/blanc.jpg" alt="" class="card-bg">
            <a href="details.html" class="card-button">
                Voir Plus <i class="fa-solid fa-arrow-right"></i>
            </a>
        </article>
    `).join('');

    domElement.innerHTML = pageCards;
}

function createPagination(totalPages, page) {
    let liTag = '';
    let active;
    let beforePage = page - 1;
    let afterPage = page + 1;

    if (page > 1) {
        liTag += `<li class="btn prev" onclick="changePage(${page - 1})"><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
    }
    if (page > 2) {
        liTag += `<li class="first numb" onclick="changePage(1)"><span>1</span></li>`;
        if (page > 3) {
            liTag += `<li class="dots"><span>...</span></li>`;
        }
    }
    if (page === totalPages) {
        beforePage -= 2;
    } else if (page === totalPages - 1) {
        beforePage -= 1;
    }
    if (page === 1) {
        afterPage += 2;
    } else if (page === 2) {
        afterPage += 1;
    }
    for (let plength = beforePage; plength <= afterPage; plength++) {
        if (plength > totalPages) continue;
        if (plength === 0) plength += 1;
        active = page === plength ? 'active' : '';
        liTag += `<li class="numb ${active}" onclick="changePage(${plength})"><span>${plength}</span></li>`;
    }
    if (page < totalPages - 1) {
        if (page < totalPages - 2) {
            liTag += `<li class="dots"><span>...</span></li>`;
        }
        liTag += `<li class="last numb" onclick="changePage(${totalPages})"><span>${totalPages}</span></li>`;
    }
    if (page < totalPages) {
        liTag += `<li class="btn next" onclick="changePage(${page + 1})"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
    }
    element.innerHTML = liTag;
    return liTag;
}

function changePage(newPage) {
    page = newPage;
    updatePaginationAndCards();
}

function updatePaginationAndCards() {
    displayCardsForPage('pokemonCardsContainer', page, pokemonData);
    createPagination(totalPages, page);
}

document.addEventListener('DOMContentLoaded', () => {
    updatePaginationAndCards();
});
