import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FoodDetails = () => {
    const [foodCategory, setFoodCategory] = useState([])
    const {category, foodId} = useParams()
    const selectedItem = foodCategory.find(item => item.id == foodId)
    console.log(selectedItem);
    const {img} = selectedItem

    useEffect(() => {
        fetch(`./../data/${category}.json`, {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
        })
            .then(data => data.json())
            .then(res => setFoodCategory(res))
    }, [category])

    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default FoodDetails;