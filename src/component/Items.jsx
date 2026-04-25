import React, { useContext } from 'react';
import { furnitureData } from '@/data';

import ItemCard from './ItemCard';
const Items = () => {
    console.log(furnitureData);
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 p-10'>
            {
                furnitureData.map((datum,index)=>{
                    return <ItemCard key={index} datum={datum}></ItemCard>
                })
            }
        </div>
    );
};

export default Items;