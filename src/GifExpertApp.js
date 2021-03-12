import React, {useState} from 'react'
import {AddCategory} from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export function GifExpertApp(){
    const [categories, setCategories] = useState(['DBZ']);

    //const handleAdd = ()=>{
        //setCategories([...categories,'kdk']);
        //setCategories(estadoAnterior => [...estadoAnterior,'kdk']);
    //}

    return(
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            {categories.map((category)=>(
                <GifGrid 
                key={category}
                category={category} 
                />
            ))}
        </div>
    )
}