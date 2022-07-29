import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    console.log(filter);

    let componentMounted = true;

    useEffect(() => {

        const getProducts = async () => {
            setLoading(true);

            const response = await fetch ("https://fakestoreapi.com/products");
            if(componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
            }

            return () => {
                componentMounted = false;
            }
        }

        getProducts();

    }, []);

    const Loading = () => {
        return (
            <>
                <p className='loading'>Loading...</p>
            </>
        )
    }

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }

   
    }

  return (
    <div className='products'>
        <div className="container">
            <div className="row rowTitle">
                <div className="col">
                    <h1 className='title'>Available Products</h1>
                    <hr />
                </div>
            </div>
            <div className="row productsRow">
                <div className="col">
                    {loading ? <Loading/> : <ShowProducts/>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products
