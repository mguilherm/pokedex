export async function getAllPokemon(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((res) => res.json())
            .then((pokemon) => {
                resolve(pokemon);
            });
    });
}
