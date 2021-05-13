import React from 'react'
import { useFetchGifs } from '../Hooks/useFetchGifs';
import {GifGrideItem } from './GifGrideItem';
export const GifGrid = ({ category }) => {

    const {loading, data: images} = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            {loading && <p className="animate__animated animate__flash">Loading</p> }

            <div className="card-grid ">
                {
                    images.map((img) =>
                    
                        <GifGrideItem key={img.id} {...img} />
                    )
                }
            </div>
        </>

    )
}
