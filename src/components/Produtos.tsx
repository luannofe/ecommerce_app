
import React, { useEffect, useState } from "react";
import ComponentCarouselProduct from "./comps/ComponentCarouselProduct";
import ComponentProduct from "./comps/ComponentProduct";

export default function Produtos() {

    

    const [loadedProducts, setLoadedProducts] = useState<object>()

    useEffect(()=> {

    }, [])

    return (
        <>
        <div className="mainBackground">
            <div className="mainInnerBackground">
                <ComponentCarouselProduct sectionName="Top Sellers">
                    <ComponentProduct productName="Chocolate" productCost={4} />
                    <ComponentProduct/>
                    <ComponentProduct/>
                    <ComponentProduct/>
                </ComponentCarouselProduct>
                <ComponentCarouselProduct sectionName="Low Carbs">
                    <ComponentProduct/>
                    <ComponentProduct/>
                    <ComponentProduct/>
                    <ComponentProduct/>
                </ComponentCarouselProduct>
            </div>
        </div>
        </>    
    )
}