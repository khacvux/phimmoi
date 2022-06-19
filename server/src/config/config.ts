import dotenv from 'dotenv'

dotenv.config();

const MYSQL_HOST = process.env.MYSQL_HOST || 'localhost'
const MYSQL_DATABASE = process.env.MYSQL_DATABASE || 'root'
const MYSQL_USER = process.env.MYSQL_USER || 'admin'
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || 'admin'

const SERVER_PORT = process.env.SERVER_PORT || '8000'
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'phimmoi'


const MYSQL = {
    host: MYSQL_HOST,
    database: MYSQL_DATABASE,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD
}


const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
}

const config = {
    server: SERVER,
    mysql: MYSQL
}

export default config