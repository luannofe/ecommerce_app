
import React, { useEffect, useState } from "react";
import ComponentProduct from "./comps/ComponentProduct";

export default function Produtos() {

    

    const [loadedProducts, setLoadedProducts] = useState<object>()

    useEffect(()=> {

    }, [])

    return (
            <ComponentProduct/>
    )
}