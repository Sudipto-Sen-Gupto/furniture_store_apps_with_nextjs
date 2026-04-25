import ItemCard from '@/component/ItemCard';

import { furnitureData } from '@/data';
import React from 'react';

const page = () => {
    const products=furnitureData

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                {
                    products.map((datum,index)=>{
                        return <ItemCard key={index} datum={datum}></ItemCard>
                    })
                }
            </div>
        </div>
    );
};

export default page;