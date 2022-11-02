import express from 'express'
import { Low, JSONFile } from 'lowdb'
import { inGlobalDB, inUserDB }  from "../server/interfaces";


const app = express()
const port = 3000



const adapter = new JSONFile<inGlobalDB>('db.json')
const db = new Low(adapter)



app.get('/api/products', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(await readProducts())
})

app.get('/api/user', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(await readUser())
})


initializeDB()

app.listen(port, () => {
    console.log('listening')
})


async function initializeDB() {
    await db.read()
    db.data ||= {
        products: [
            {
                productID: 0,
                productName: 'Chocolate',
                productDesc: '34kcal',
                productCost: 4,
                productIMGUrl: ''
            }
        ],
        users: [
            {
                cart: [
                    {
                        productName: 'asdasd', 
                        productQuantity: 4
                    },
                    {
                        productName: 'asdasdasd', 
                        productQuantity: 3
                    },

                ]
            }
        ]
    }
    await db.write()
    await db.read()
}

async function readProducts() {
    console.log(db.data?.products)
    return db.data?.products
}

async function readUser() {
    console.log(db.data?.users)
    return db.data?.users
}