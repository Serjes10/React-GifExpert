import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {

    const [Categories, setCategories] = useState(['Inital Drive']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            
            <AddCategory setCategories = { setCategories } />



            <ol>
                {
                    Categories.map(category => 
                        <GifGrid key={category} category = {category} />
                    )
                }
            </ol>
        </>
    )
}
