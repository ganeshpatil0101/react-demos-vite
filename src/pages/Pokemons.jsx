import React from 'react';
import { useQuery } from 'react-query';
import {fetchData} from '../utils/fetchData';
const URL= "https://pokeapi.co/api/v2/pokemon/";

function Pokemon({pokemon}) {
    const {isIdle , isLoading, error, data, refetch} = useQuery('abilities', () => fetchData(pokemon.url), {enable: false});
    const toggleHandler = (event) => {
        if(event.target.open && data.abilities.length === 0){
            refetch();
        }
    }
    if(isIdle) return '... isIdle ...'
    if(isLoading) return 'Loading...'
    if(error) return 'An error has occurred: '+error.message
    return (
        <details onToggle={toggleHandler} >
            <summary>{pokemon.name}</summary>
            <ul>
                {data.abilities.map(ability =>{
                    return (
                        <li key={ability?.ability?.name}>{ability?.ability?.name}</li>
                    )
                })}
            </ul>
        </details>
    );
}

export default function Pockemons() {
    const { isLoading, error, data} = useQuery('pokemons', () => fetchData(URL));
    if(isLoading) return 'Loading...'
    if(error) return 'An error has occurred: '+error.message
    return (
        <>
            <div className="pokemon-container" >
                {data.results.map((p)=> (<Pokemon key={p.name} pokemon={p} />))}
            </div>
        </>
    );
};
