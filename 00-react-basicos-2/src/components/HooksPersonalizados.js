import React from 'react';
import { useFetch } from '../hooks/useFetch';

export default function HooksPersonalizados(){
    // console.log(useFetch())
    let url = 'https://pokeapi.co/api/v2/pokemond/';
        url = 'https://jsonplaceholder.typicode.com/users'
    let [data,isPending,error] = useFetch(url)
    return (
        <>
            <h2>Hooks personalizados</h2>
            <h6>{JSON.stringify(isPending)}</h6>
            <h6>
                <mark>
                {JSON.stringify(error)}
                </mark>
            </h6>
            <h6>
                <pre style={{whiteSpace:"pre-wrap"}}>
                    <code>
                    {JSON.stringify(data)}
                    </code>
                </pre>
            </h6>
        </>
    )
}