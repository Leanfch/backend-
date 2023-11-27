import { MongoClient } from "mongodb"

const client = new MongoClient("mongodb://localhost:27017/")
let AccountsCollection

client
    .connect()
    .then(() => {
        const db = client.db("goto-game-jam")
        AccountsCollection = db.collection("accounts")
    })
    .catch((err) => console.error(err))

async function createAccount(account) {
    await AccountsCollection.insertOne({ ...account })
}

export default { createAccount }
