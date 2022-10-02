import express from 'express'
import { Low, JSONFile } from 'lowdb'


const app = express()
const port = 3000

type Data = {
    products: string[]
}

const adapter = new JSONFile<Data>('db.json')
const db = new Low(adapter)


app.get('/get/products', async (req, res) => {
    let a = await readProducts()
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(a)
})


app.listen(port, () => {
    console.log('listening')
})


async function readProducts() {
    await db.read()
    console.log(db.data)
    return db.data
}