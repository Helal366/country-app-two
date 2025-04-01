import React from 'react';
import './Country-module.css';

const Country = ({country,handleRemoveCountry}) => {
    const {name, flags, population, capital, area}=country;
    
    return (
        <article className='country-card'>
            <div>
                <img className='country-img' src={flags.png} alt={name.common} />
                <p>Country name: {name.common}</p>
                <p>Population: {population}</p>
                <p>Capital: {capital}</p>
                <p>Area: {area}</p>
                <button onClick={()=>handleRemoveCountry(name.common)}>Remove Country</button>
            </div>
            
        </article>
    );
};

export default Country;