



export  interface inGlobalDB {
    products: inProductDB[]
    
    users: [
        user: inUserDB
    ]
}

export interface inProductDB {
    productID: number,
    productName: string,
    productDesc?: string,
    productCost: number,
    productIMGUrl: string
}





export interface inUserDB {
    cart: inItemCartDB[]
    
}

export interface inItemCartDB {

        productID: number,
        productQuantity: number

}