import React, { useEffect, useState } from "react";
import ComponentCartEntry from "./comps/ComponentCartEntry";


interface inCartDataItem { 
    productName: string,
    productQuantity: number
}


export default function ShoppingCart() {

    const [data, setData] = useState<any>()

    useEffect(()=> {
        console.log('procou')
        if (!data) {
            getUserCart()
        } else {
            console.log(data)
        }

        return () => {
            //clear
        }
    }, [data])

    return (
        <div className="mainBackground">
            <div className="mainInnerBackground">
                {data && (
                    
                    <div style={{width: '95%'}}>
                        <h4 className="common_font" style={{color: 'black'}}>Seu pedido</h4>
                        {data[0].cart.map((item : inCartDataItem) => {
                            return(
                                <><ComponentCartEntry productQuantity={item.productQuantity} productName={item.productName}/></>
                            )
                        })}
                    </div>
                )}

                {!data && (
                    <span className="homepage_title">Loading...</span>
                )}
            </div>
        </div>
    )


    async function getUserCart() {

        await fetch('http://localhost:3000/api/user', {
            method: 'GET'
        })
        .then( res => res.json())
        .then( data => {
            setData(data)
        })


    }
}