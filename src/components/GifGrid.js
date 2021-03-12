import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs.js';
import { useFetchGifs } from '../hooks/useFetchGifs.js';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data, loading} = useFetchGifs(category);
    
    return (
        <>
            <h3>{category}</h3>
            {loading&&<p>Cargando...</p>}
            <div className="card-grid">
                {data.map((img)=>(
                    <GifGridItem 
                    key={img.id}
                    img={img} 
                    />
                ))}
            </div>
        </>
    )
}
