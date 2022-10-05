import { PrismaClient } from '@prisma/client'


// dados da conexão com o banco de dados serverless
const host     = 'vesmcckpjurfdkcrbjub.db.us-east-1.nhost.run'
const username = 'postgres'
const password = 'P@ssw0rd1234'
const port     = 5432
const database = 'vesmcckpjurfdkcrbjub'
const ssl      = false
const setSSL   = 'sslaccept=strict&sslmode=require'

// DATABASE_URL="postgres://postgres:P@ssw0rd1234@vesmcckpjurfdkcrbjub.db.us-east-1.nhost.run:5432/vesmcckpjurfdkcrbjub"
let url = `postgres://${username}:${password}@${host}:${port}/${database}`;
if (ssl) {
    url = url + `?${setSSL}`;
}

const prisma = new PrismaClient({datasources: { db: { url: url } } })


export default prisma
