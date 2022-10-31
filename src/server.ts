import express from 'express'
import { Low, JSONFile } from 'lowdb'


const app = express()
const port = 3000

interface Data {
    products: string[]
    users: [
        user: {
            cart: [
                {
                    productName: string,
                    productQuantity: number
                }
            ]
        }
    ]
}

const adapter = new JSONFile<Data>('db.json')
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
        products: [],
        users: [
            {
                cart: [
                    {
                        productName: 'Produto1',
                        productQuantity: 4
                    }
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