import { useContext, useState } from "react"
import iconPlus from '../../assets/icon_plus.svg'
import iconMinus from '../../assets/icon_minus.svg'
import iconUndo from '../../assets/icon_undo.svg'
import iconConfirm from '../../assets/icon_confirm.svg'
import { CountContext } from "./ComponentProduct"


export default function ComponentPlusMinusButton() {
    const context = useContext(CountContext)
    return (
        <div style={{display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center'}}>
            <div className="defaultIcon hoverGrow" style={{backgroundColor: 'red'}} onClick={() => {context.setInteracted(!context.interacted); context.setCount(1)}}>
                <img src={iconUndo}></img>
            </div>
            <div className="buttonIcon hoverGrow">
                <img src={iconMinus} onClick={()=> {context.setCount((count: number) => Math.max(1, Math.min(count - 1, 99)))}}></img>
            </div>
            <div className="productInput">{context.count}</div>
            <div className="buttonIcon hoverGrow">
                <img src={iconPlus}  onClick={()=> {context.setCount((count: number) => Math.max(1, Math.min(count + 1, 99)))}}></img>
            </div>
            <div className="defaultIcon hoverGrow">
                <img style={{filter: 'invert(25%) sepia(67%) saturate(1637%) hue-rotate(106deg) brightness(101%) contrast(101%)'}} src={iconConfirm}></img>
            </div>
        </div>
    )
}