import { MongoClient,ServerApiVersion } from 'mongodb'
import { env } from '~/config/environment'

let ecommerceDatabase = null;
const mongoClientInstance = new MongoClient(env.MONGODB_URL,{
    serverApi:{
        version:ServerApiVersion.v1,
        strict:true,
        deprecationErrors:true,
    }
})
export const CONNECT_DB = async () =>{
    await mongoClientInstance.connect()
    ecommerceDatabase = mongoClientInstance.db(env.DATABASE_NAME)
}

export const GET_DB = () =>{
    if(!ecommerceDatabase) throw new Error('Must connect database!!')
    return ecommerceDatabase
}