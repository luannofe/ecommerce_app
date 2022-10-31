import { Context, useContext, useState } from "react"
import iconPlus from '../../assets/icon_plus.svg'
import iconMinus from '../../assets/icon_minus.svg'


interface Props {
    count: number,
    setCount: Function,
}

export default function ComponentPlusMinusCartButton(props : Props) {

    

    return (
        <div style={{display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center'}}>

            <div className="buttonIcon hoverGrow">
                <img src={iconMinus} onClick={()=> {props.setCount((count: number) => Math.max(1, Math.min(count - 1, 99)))}}></img>
            </div>
            <div className="productInput">{props.count}</div>
            <div className="buttonIcon hoverGrow">
                <img src={iconPlus}  onClick={()=> {props.setCount((count: number) => Math.max(1, Math.min(count + 1, 99)))}}></img>
            </div>

        </div>
    )
}