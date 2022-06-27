import React, {useState, useEffect} from 'react';
import {fetchData} from '../utils/fetchData';
const URL= "https://pokeapi.co/api/v2/pokemon/";

function Pokemon({pokemon}) {
    const [abilities, setAbilities] = useState([]);
    const toggleHandler = (event) =>{
        if(event.target.open && abilities.length === 0){
            fetchData(pokemon.url).then((data)=>{
                setAbilities(data.abilities);
            });
        }
    }
    return (
        <details onToggle={toggleHandler} >
            <summary>{pokemon.name}</summary>
            <ul>
                {abilities.map(ability =>{
                    return (
                        <li key={ability?.ability?.name}>{ability?.ability?.name}</li>
                    )
                })}
            </ul>
        </details>
    );
}

export default function Pockemons() {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        fetchData(URL).then((data)=>{
            setPokemons(data.results);
        });
    }, []);
    return (
        <>
            {pokemons.map((p)=> (<Pokemon key={p.name} pokemon={p} />))}
        </>
    );
};
