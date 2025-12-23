import { heroes, Owner, type Hero } from "./data/heroes.data"

// Funcion que retorna un heroe según su ID

const getHeroById = (id: number): Hero | undefined => {
    const hero = heroes.find((pj) => {
        return pj.id === id;
    });

    return hero;
};

console.log(getHeroById(5))

// Funcion que retorna los heroes según su marca

/* export const getHeroByOwner = (owner: Owner): Hero[] => {
    const DcHeroes = heroes.filter((hero) => {
        return hero.owner === owner;
    });

    return DcHeroes
}; */

export const getHeroByOwner = (owner: Owner) => {
    const DcHeroes = heroes.filter(
        hero => hero.owner === owner
    );
    return DcHeroes
};

// Console.log de la funcion en archivo main.ts


