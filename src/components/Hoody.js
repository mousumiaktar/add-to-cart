import React from 'react';
import './hoody.css';

const Hoody = ({ product, handleAddCart }) => {
    // console.log(product);
    const { id, name, image, price, color, stock } = product;
    return (
        <div className='hoody-area'>
            <div className='details-part1'>
                <img src={image} alt="" />
                <p>{name}</p>
            </div>

            <div className='details-part2'>
                <div className='text'>
                <p>{color}</p>
                <p>{stock}</p>
                <p>{price}</p>
                </div>
            </div>

            <div className='details-part3'>
                <input type="number" name="" id="" />
                <button onClick={()=>handleAddCart(product)}>cart</button>
                <input type="checkbox" name="" id="" />
            </div>
        </div>
    );
};

export default Hoody;