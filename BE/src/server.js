/* eslint-disable no-console */

import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { corsOptions } from '~/config/corsOptions'
import { APIs_V1 } from '~/routes/v1/'
import { CONNECT_DB, GET_DB } from './config/mongodb'
import { errorHandlingMiddleware } from './middlewares/errorHandlingMiddleware'
import { env } from '~/config/environment'
const bodyParser = require('body-parser');

const START_SERVER = () => {
  // Init Express App
  const app = express()

  // Fix Cache from disk from ExpressJS
  app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store')
    next()
  })

  // //middleware
  // app.use(bodyParser.json());
  
  // Use Cookie
  app.use(cookieParser())

  // Allow CORS: for more info, check here: https://youtu.be/iYgAWJ2Djkw
  app.use(cors(corsOptions))

  // Enable req.body json data
  app.use(express.json())

  // Use Route APIs V1
  app.use('/v1', APIs_V1)
  //Middleware  xử lý lỗi tập trung
  app.use(errorHandlingMiddleware)

  // Should be store to env in the actual product: check here: https://youtu.be/Vgr3MWb7aOw
  const LOCAL_DEV_APP_PORT = env.APP_PORT
  const LOCAL_DEV_APP_HOST = 'localhost'
  const AUTHOR = env.AUTHOR
  app.listen(LOCAL_DEV_APP_PORT, LOCAL_DEV_APP_HOST, () => {
    console.log(`Local DEV: Hello ${AUTHOR}, Back-end Server is running successfully at Host: ${LOCAL_DEV_APP_HOST} and Port: ${LOCAL_DEV_APP_PORT}`)
  })
}
// CONNECT_DB()
//   .then(()=>console.log('Connected to MongoDB'))
//   .then(()=>{START_SERVER()})
//   .catch(error=>{
//     console.log(error)
//     process.exit(0)
//   })
(async () => {
  try {
    // Start Back-end Server
    console.log('Starting Server...')
    await CONNECT_DB()
    console.log('Connect DB thành công!')
    START_SERVER()
  } catch (error) {
    console.error(error)
    process.exit(0)
  }
})()
