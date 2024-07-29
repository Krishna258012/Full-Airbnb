import React from 'react'
import Home from './Home';

const HOmepage = () => {
    const Domain = import.meta.env.VITE_DOMAIN;
    console.log(Domain);
    return (
        <Home apipath={`${Domain}api/listings`} />
    )
}

export default HOmepage
