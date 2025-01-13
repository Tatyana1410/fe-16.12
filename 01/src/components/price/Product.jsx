import React, { useContext } from 'react';
import {UserContext} from './Main';


function Product(props) {
    const {orderCount,product,toggleOrder,remove} = useContext(UserContext)
    return (
        <>
        <div className="card" style={{width: 18+'rem'}}>

                <div className="card-body">
                    <h5 className="card-title">Product: {props.nameProduct}
                    </h5>
                    <p className="card-text">Price: {props.price} $
                    </p>
                    <button className="btn btn-primary m-1" onClick={()=>toggleOrder(props.index)}>Order</button>
                    <button className="btn btn-danger" onClick={()=>remove(props.index)}>Delete</button>
                </div>
            </div>
            
        </>
    );
}

export default Product;