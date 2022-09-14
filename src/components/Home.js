import React, { useEffect, useState } from 'react';
import Header from './Header';
import Hoody from './Hoody';
import Cart from './Cart';
import './hoody.css'


const Home = ({cart, setCart}) => {
    const [products, setProducts] = useState([]);
    

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);


    // Add To Cart
    const handleAddCart = (selectedItem) => {
        const exist = cart.find(product =>product.id === selectedItem.id);
        if(!exist){
            const newCart = [...cart, selectedItem];
            setCart(newCart);
            console.log(newCart)
        }
        console.log(selectedItem)
    }

    
    return (
        <>
            <div className='main-area'>
                <div className='children-area'>
                    <h3>Image</h3>
                    <h3>Name</h3>
                </div>
                
                <div className='children-area'>
                    <h3>Color</h3>
                    <h3>Stock</h3>
                    <h3>price</h3>
                </div>
                
                <div>
                    <h3>Buy</h3>
                </div>
            </div>
            <div className='horizontal-line'></div>

            <div className='home-container'>
                <div className='products-container'>
                    {
                      products.map(product=><Hoody
                        key={product.id}
                        product={product}
                        handleAddCart={handleAddCart}
                      ></Hoody>)  
                    }
                </div>
                <div>
                    {/* <Cart 
                        handleAddCart = {handleAddCart}
                        cart = {cart}
                    /> */}
                </div>
            </div>

        </>
    );
};

export default Home;