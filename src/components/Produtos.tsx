
import React, { useEffect, useState } from "react";
import ComponentCarouselProduct from "./comps/ComponentCarouselProduct";
import ComponentProduct from "./comps/ComponentProduct";

export default function Produtos() {

    

    const [loadedProducts, setLoadedProducts] = useState<object>()

    useEffect(()=> {

    }, [])

    return (
        <>
        <div style={{backgroundColor: '#FFE6E6', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: '1280px', backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                <ComponentCarouselProduct/>
                <ComponentCarouselProduct/>
            </div>
        </div>
        </>    
    )
}