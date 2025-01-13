import React, {createContext, useState } from 'react';
import List from './List';
export const UserContext = createContext();

function Main(props) {
    const [product,setProdut]=useState(
        [
            {nameProduct: 'Milk',
             price:5,
             order: false
            },
            {nameProduct: 'Juice',
             price:6,
             order: false
            },
            {nameProduct: 'Water',
             price:3,
             order: false
            }
        ]
    );

    const [orderCount, setOrderCount] = useState(0);
    const toggleOrder = (index)=>{
        const newProduct = product.map((prod, idx)=>{
            if(idx === index){
                // prod.order ? setOrderCount(orderCount -1):
                setOrderCount(orderCount+1);
                return {...prod, order:!prod.order};
            }   
            return prod;
        });

        setProdut(newProduct)

    function remove(index){
            setProdut(product=>product.filter((item, idx)=>index != idx));
        }
                

        
    }
    

    return (
        <> 
            <div className="container ">
                <div className="row justify-content-between py-3">
                <UserContext.Provider value={{orderCount, toggleOrder, product}}>
                <List product={product}></List>
                </UserContext.Provider>

                <div className="card" style={{width: 18+'rem'}}>
                    <ul className="list-group list-group-flush">
                        <li class="list-group-item">
                            Ordered: {orderCount} {product.nameProduct}
                            </li>
                    </ul>
                </div>
      
                    {/* <div className="card" style={{width: 18+'rem'}}>
                        <img src="..." className="card-img-top" alt="Product"/>
                        <div className="card-body">
                            <h5 className="card-title">Product: {product[0][`nameProduct`]}</h5>
                            <p className="card-text">Price: {product[0][`price`]} $</p>
                            <button className="btn btn-primary">Order</button>
                        </div>
                    </div>
                    <div className="card" style={{width: 18+'rem'}}>
                        <img src="..." className="card-img-top" alt="Product"/>
                        <div className="card-body">
                            <h5 className="card-title">Product: {product[1][`nameProduct`]}</h5>
                            <p className="card-text">Price: {product[1][`price`]} $</p>
                            <button className="btn btn-primary">Order</button>
                        </div>
                    </div>
                    <div className="card" style={{width: 18+'rem'}}>
                        <img src="..." className="card-img-top" alt="Product"/>
                        <div className="card-body">
                            <h5 className="card-title">Product: {product[2][`nameProduct`]}</h5>
                            <p className="card-text">Price: {product[2][`price`]} $</p>
                            <button className="btn btn-primary">Order</button>
                        </div>
                    </div> */}

                </div>
            </div>
        </>
    );
}

export default Main;