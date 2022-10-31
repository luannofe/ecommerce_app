import React, { useState } from "react";
import ComponentPlusMinusCartButton from "./ComponentPlusMinusCart";


interface inCartProps {
    productName?: string,
    productCost?: number,
    productImgSrc?: string,
    productQuantity?: number,
}

export default function ComponentCartEntry(props: inCartProps) {

    const [count,setCount] = useState(props.productQuantity || 0)



    return (
        <>
            <div style={{ backgroundColor: 'grey', borderRadius: '12px', overflow: 'hidden', display: 'flex', alignItems: 'center', height: '90px', padding: '32px 0px 32px 16px', justifyContent: 'space-between' }}>
                <img src="./cookie_chocolate_branco.jpg" style={{ width: '128px', height: '128px', objectFit: 'cover', borderRadius: '18px' }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span className="common_font" style={{ color: 'black' }}>{props.productName}</span>
                    <span>36 kcal</span>
                </div>
                <span className="common_font" style={{fontSize: '44px'}}>{`${count}`}</span>
                <ComponentPlusMinusCartButton count={count} setCount={setCount} />
                <button style={{ height: '156px', width: '156px', background: 'none', border: 'none', fontSize: '128px' }}>X</button>
            </div>
        </>
    )
}