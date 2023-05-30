import React from "react";
import { Product } from "../../components/Product/Product";
import { Api } from "../../components/Api/Api";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'

export const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([])
    
    const config = {
        baseUrl: 'https://api.react-learning.ru/'
        };

    const api = new Api(config);

useEffect(() => {
    if (id) {
    api.getProductById(id) 
    .then(res => {
    return setProduct(res)
    });
}
    },[id]);

    const addLike = () => api.addLike(id)
            .then(res => {
                return console.log(res, 'Addlike')
    });


    const deleteLike = () => api.deleteLike(id)
            .then(res => {
                return console.log(res, 'Deletelike')
    });

    // api.getProductById('645b0e36e0bf2c519b9d599c')
    //         .then(res => {
    //             return console.log(res, '???')
    // });

    
        return <Product id={id} addLike={addLike} deleteLike={deleteLike} product={product}/>
};