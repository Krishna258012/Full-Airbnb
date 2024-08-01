import React from 'react'
import { useSearchParams } from 'react-router-dom';
import Home from './Home';


const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const destination = searchParams.get('location') || 'null';
    const checkin = searchParams.get('checkin') || 'null';
    const checkout = searchParams.get('checkout') || 'null';
    const persons = searchParams.get('persons') || '0';

    const url = `street=${encodeURIComponent(destination)}`;
    const Domain = import.meta.env.VITE_DOMAIN;
    const tect = `${Domain}api/listings?${url}`;

    return (
        <Home apipath={`${Domain}api/listings?${url}`} />
    )
}

export default Search
