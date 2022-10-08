import { count } from "console";
import React, { createContext, useContext, useState } from "react";

import iconInfo from '../../assets/icon_info.svg'
import ComponentPlusMinusButton from "./ComponentPlusMinus";

interface CountCtx {
    count: number,
    interacted: boolean,
    setCount: Function,
    setInteracted: Function
}

export const CountContext = createContext({} as CountCtx)

export default function ComponentProduct() {

    const [Interacted, setInteracted] = useState(false)
    const [count, setCount] = useState(1)
    

    return (
        <div className="productContainer">
            <img src="./cookie_chocolate_branco.jpg" style={{marginTop: '44px', width: '228px', height:'228px', borderRadius:'50%', objectFit: 'cover'}} />
            <img src={iconInfo}  className='productInfo hoverGrow' style={{top: '26px', left: '288px', position: 'absolute', cursor: 'pointer'}} />
            <span className="productTitle">Chocolate</span>
            <span className="productDesc">36 kcal</span>
            <span className="productDesc" style={{color: 'green'}}>{`R$${(2.50 * count).toFixed(2)}`}</span>
            <CountContext.Provider value={{count: count, setCount: setCount, interacted: Interacted, setInteracted: setInteracted}}>
                {Interacted
                ?  <ComponentAddToCart/>  
                : <button className="productButtonToCart" onClick={() => {setInteracted(!Interacted); setCount(1)}} >Add to cart</button>
                }
            </CountContext.Provider>
        </div>
    )


}

function ComponentAddToCart() {

    return (
        <div className="productAddToCart">
            <ComponentPlusMinusButton/>
        </div>
    )
}

