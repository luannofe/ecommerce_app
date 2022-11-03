
import React, { createContext, useContext, useState } from "react";
import { inProductDB } from "../../../server/interfaces";

import iconInfo from '../../assets/icon_info.svg'
import ComponentPlusMinusButton from "./ComponentPlusMinus";


interface inCountCtx {
    count: number,
    interacted: boolean,
    setCount: Function,
    setInteracted: Function,
    thisProduct: inProductDB
}



export default function ComponentProduct(props: inProductDB) {

    const [Interacted, setInteracted] = useState(false)
    const [count, setCount] = useState(1)

    const countContextValue: inCountCtx = {
        count: count, 
        setCount: setCount, 
        interacted: Interacted, 
        setInteracted: setInteracted,
        thisProduct: props
    }
    
    console.log(props)

    return (
        <div className="productContainer">
            <img src={props.productIMGUrl} style={{marginTop: '44px', width: '228px', height:'228px', borderRadius:'50%', objectFit: 'cover'}} />
            <img src={iconInfo}  className='productInfo hoverGrow' style={{top: '26px', left: '288px', position: 'absolute', cursor: 'pointer'}} />
            <span className="productTitle">{props.productName}</span>
            <span className="productDesc">{props.productDesc}</span>
            <span className="productDesc" style={{color: 'green'}}>{`R$${(props.productCost! * count).toFixed(2)}`}</span>
            {Interacted
            ?  <ComponentAddToCart countContextValue={countContextValue}/>  
            : <button className="productButtonToCart" onClick={() => {setInteracted(!Interacted); setCount(1)}} >Add to cart</button>
            }
        </div>
    )


}

function ComponentAddToCart(props: {countContextValue: inCountCtx}) {

    return (
        <div className="productAddToCart">
            <ComponentPlusMinusButton context={props.countContextValue} confirmations={true}/>
        </div>
    )
}

