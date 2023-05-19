import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryDetails = () => {
    const toyDetails= useLoaderData()
    console.log(toyDetails)
    return (
        <div>
            <h1>This toys details is here</h1>
        </div>
    );
};

export default CategoryDetails;