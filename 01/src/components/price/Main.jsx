import React, {createContext, useState } from 'react';
import List from './List';
import Product from './Product';
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
        setProdut(newProduct);}

    const [selectedProduct, setSelectedProduct]=useState([]);
    function selectProduct (product){
        setSelectedProduct(selectProduct=>[...selectProduct, product])}

    function remove(idx){
        setSelectedProduct(prod=>prod.filter((value,index)=>index!=idx));
    }
     const[show, setShow]=useState(false);
    

    return (
        <> 
    
            <div className="container ">
                <div className="row justify-content-between py-3">
                <UserContext.Provider value={{orderCount, toggleOrder, product,selectProduct, remove}}>
                <List product={product}></List>
                </UserContext.Provider>


                <button className='btn btn-success p-3' 
                    style={{width:'25%', height:'50px'}}
                    onClick={()=>setShow(!show)}>{show ? 'Close': 'Basket'}</button>
                    {show && 

                <div className="card" style={{width: 18+'rem'}}>
                    <ul className="list-group list-group-flush">
                        {selectedProduct.map((props, index)=>{
                            return <li className="list-group-item d-flex justify-content-between" key={index}> 
                            {props.nameProduct}  {props.price} $
                            <button className="btn btn-danger" onClick={()=>remove(index)}>Delete</button>
                            </li>
                        })}
                    

                    {/* <li class="list-group-item"> Ordered: {orderCount} </li> */}
                    </ul>
                    
                    
                    

                </div>}
                {/* <Product onSelectProduct={selectProduct}></Product> */}
      
                    
                   
                   

                </div>
            </div>
        </>
    );
}

export default Main;