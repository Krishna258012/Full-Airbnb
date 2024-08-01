import React from 'react'
import Home from './Home';

const HOmepage = () => {
    const Domain = import.meta.env.VITE_DOMAIN;
    return (
        <Home apipath={`${Domain}api/listings`} />
    )
}

export default HOmepage
