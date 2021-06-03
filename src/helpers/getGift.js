
export const getGift = async( category ) => {
    
    const url = `https://pokeapi.co/api/v2/pokemon?limit=100&offset=200`;
    const resp = await fetch( url );
    const { results } = await resp.json();

    const pokemons = results.map( pok => {
        return {
            name: pok.name,
            url: pok.url,
        }
    })

    return pokemons;
    
}