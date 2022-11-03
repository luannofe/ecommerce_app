import { Context, useContext, useEffect, useState } from "react"
import iconPlus from '../../assets/icon_plus.svg'
import iconMinus from '../../assets/icon_minus.svg'
import iconUndo from '../../assets/icon_undo.svg'
import iconConfirm from '../../assets/icon_confirm.svg'
import { inProductDB, inUserDB } from "../../../server/interfaces"

interface Props {
    context: {
        count: number,
        interacted: boolean,
        setCount: Function,
        setInteracted: Function,
        thisProduct: inProductDB
    },
    confirmations: boolean
}

export default function ComponentPlusMinusButton(props : Props) {

    useEffect(() => {

    }, [])

    return (
        <div style={{display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center'}}>
            {props.confirmations && (
            <div className="defaultIcon hoverGrow" style={{backgroundColor: 'red'}} onClick={() => {props.context.setInteracted(!props.context.interacted); props.context.setCount(1)}}>
                <img src={iconUndo}></img>
            </div>
            )}

            <div className="buttonIcon hoverGrow">
                <img src={iconMinus} onClick={()=> {props.context.setCount((count: number) => Math.max(1, Math.min(count - 1, 99)))}}></img>
            </div>
            <div className="productInput">{props.context.count}</div>
            <div className="buttonIcon hoverGrow">
                <img src={iconPlus}  onClick={()=> {props.context.setCount((count: number) => Math.max(1, Math.min(count + 1, 99)))}}></img>
            </div>

            {props.confirmations && (
            <div className="defaultIcon hoverGrow">
                <img style={{filter: 'invert(25%) sepia(67%) saturate(1637%) hue-rotate(106deg) brightness(101%) contrast(101%)'}} src={iconConfirm}
                    onClick= {(e)=> {addProductToCart()}}
                ></img>
            </div>
            )}
        </div>
    )

    async function addProductToCart() {

        let toCartItemObj = {
            productID: props.context.thisProduct.productID,
            productQuantity: props.context.count
        }

        let cartLocalStorage = JSON.parse(localStorage.getItem('shoppingCart') as string) as inUserDB['cart']
        
        if (!cartLocalStorage) {
            return localStorage.setItem('shoppingCart', JSON.stringify([toCartItemObj]))
        }

        for (let item in cartLocalStorage) {

            if (cartLocalStorage[item].productID == toCartItemObj.productID) {
                cartLocalStorage[item].productQuantity += toCartItemObj.productQuantity
                return localStorage.setItem('shoppingCart', JSON.stringify(cartLocalStorage))
            }

            if (parseInt(item) == cartLocalStorage.length - 1) {
               cartLocalStorage = [...cartLocalStorage, toCartItemObj]
               return localStorage.setItem('shoppingCart', JSON.stringify(cartLocalStorage))
            }
        }

    }
}