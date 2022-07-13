import dotenv from 'dotenv'

dotenv.config()

const BASE_URL = process.env.BASE_URL;


const config = { 
    baseUrl: BASE_URL,
}


export default config