import 'dotenv/config'

export const env = {
    APP_PORT: process.env.APP_PORT,
    MONGODB_URL: process.env.MONGODB_URL,
    DATABASE_NAME: process.env.DATABASE_NAME,
    AUTHOR: process.env.AUTHOR,
    BUILD_MODE:process.env.BUILD_MODE
}