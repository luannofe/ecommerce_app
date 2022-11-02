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
                {cartData && (
                    
                    <div style={{width: '95%'}}>
                        <h4 className="common_font" style={{color: 'black'}}>Seu pedido</h4>
                        {cartData.map((cartEntry) => {
                            return(
                                <>
                                    <ComponentCartEntry 
                                        productName={cartEntry.productName} 
                                        productQuantity={cartEntry.productQuantity}  
                                    />
                                </>
                            )
                        })}
                    </div>
                )}

                {!cartData && (
                    <span className="homepage_title">Loading...</span>
                )}
            </div>
        </div>
    )

    async function retrieveCart() {
        let a : inUserDB['cart'] = JSON.parse(localStorage.getItem('shoppingCart')!)
        setCartData(a)
    }
}