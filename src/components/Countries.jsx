import React from 'react';
import Country from './Country';
import './Countries-module.css'



const Countries = ({countries, handleRemoveCountry}) => {
    return (
        <section className='all-countries'>   
            {
                countries.map((country, index)=><Country 
                            key={index}
                            country={country}
                            handleRemoveCountry={handleRemoveCountry}></Country>)
            }
            
        </section>
    );
};

export default Countries;