import React from 'react';
import Product from './Product';

function List(props) {
    return (
        <>
        <div className="container ">
                <div className="row justify-content-between py-3">
                    {props.product.map((prodInfo, index)=>{
                    return <Product 
                    key={index} 
                    index={index} 
                    nameProduct={prodInfo.nameProduct}
                    price={prodInfo.price}
                    order={prodInfo.order}></Product>
                    })}
                </div>
            </div>
        </>
    );
}

export default List;