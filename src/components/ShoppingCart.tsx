import React, { useEffect, useState } from "react";
import ComponentCartEntry from "./comps/ComponentCartEntry";
import { inUserDB } from "../../server/interfaces";



export default function ShoppingCart() {

    const [cartData, setCartData] = useState<inUserDB['cart']>()

    useEffect(()=> {
        retrieveCart()
    }, [])

    return (
        <div className="mainBackground">
            <div className="mainInnerBackground">
                    
                <div style={{width: '95%'}}>
                    <h4 className="common_font" style={{color: 'black'}}>Seu carrinho</h4>
                    {cartData && cartData.map((cartEntry) => {
                        return(
                            <>
                                <ComponentCartEntry 
                                    productID={cartEntry.productID} 
                                    productQuantity={cartEntry.productQuantity}  
                                />
                            </>
                        )
                    })}
                    {!cartData &&  (
                        <>
                            <span className="common_font" style={{color: 'grey'}}>Ops! Parece que não tem nada aqui...</span>
                        </>
                    )}
                </div>
            </div>
        </div>
    )

    async function retrieveCart() {
        let a : inUserDB['cart'] = JSON.parse(localStorage.getItem('shoppingCart')!)
        setCartData(a)
    }
}