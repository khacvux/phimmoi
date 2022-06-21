import dotenv from 'dotenv'

dotenv.config();


const SERVER_PORT = process.env.SERVER_PORT || '8000'
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'phimmoi'
const NODE_ENV = process.env.NODE_ENV || 'development'

const MONGO_USERNAME = process.env.MONGO_USERNAME || ''
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || ''
// const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.2rsmb.mongodb.net`
const MONGO_URL = process.env.MONGO_URL || ''


const MONGO = {
    url: MONGO_URL
}

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
}

const config = {
    server: SERVER,
    mongo: MONGO,
}

export default config