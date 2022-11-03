
import React, { useEffect, useState } from "react";
import { inProductDB } from "../../server/interfaces";
import ComponentCarouselProduct from "./comps/ComponentCarouselProduct";
import ComponentProduct from "./comps/ComponentProduct";

export default function Produtos() {

    

    const [loadedProducts, setLoadedProducts] = useState<inProductDB[]>()

    useEffect(()=> {
        loadProducts()
    }, [])

    return (
        <>
        <div className="mainBackground">
            <div className="mainInnerBackground">
                <ComponentCarouselProduct sectionName="Top Sellers">
                    {
                        loadedProducts?.map((product) => {
                            return (
                                <ComponentProduct 
                                    productCost={product.productCost} 
                                    productID={product.productID}
                                    productName={product.productName}
                                    productIMGUrl={product.productIMGUrl}
                                    productDesc={product.productDesc}
                                />
                            )
                        })
                    }
                </ComponentCarouselProduct>
                <ComponentCarouselProduct sectionName="Low Carbs">
                </ComponentCarouselProduct>
            </div>
        </div>
        </>    
    )

    async function loadProducts() {
        fetch('http://localhost:3000/api/products', {
            method: 'GET'
        })
        .then( res => res.json() as Promise<inProductDB[]>)
        .then( data => {
            console.log(data)
            setLoadedProducts(data)
        })
    }
}