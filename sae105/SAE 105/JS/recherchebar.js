function filterPokemon(searchTerm, pokemonData) {
    const filteredPokemon = Object.entries(pokemonData)
        .filter(([id, pokemon]) =>
            pokemon.identifier.toLowerCase().includes(searchTerm.toLowerCase())
        );

    const filteredData = Object.fromEntries(filteredPokemon);

    listAllPokemon('pokemonCardsContainer', filteredData);
}

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const searchButton = document.getElementById('searchButton');

    listAllPokemon('pokemonCardsContainer', pokemonData);

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.trim();
        filterPokemon(searchTerm, pokemonData);
    });

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();
        filterPokemon(searchTerm, pokemonData);
    });
});