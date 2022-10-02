
import React, { useEffect, useState } from "react";

export default function Produtos() {

    

    const [loadedProducts, setLoadedProducts] = useState<object>()

    useEffect(()=> {
        fetch('http://localhost:3000/get/products').then( async res => {
            let a = res.json()
        })
    }, [])

    return (
        <div>
            {loadedProducts && (
                <>
                    {loadedProducts}
                </>
            )}
        </div>
    )
}