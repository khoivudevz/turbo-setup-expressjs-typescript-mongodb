import express, {Express} from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routers from '@/routes'
import connectMongoDB from '@/config/mongodb.config'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

// use cors
app.use(cors())

// connect to db
connectMongoDB()

// parse json and urlencoded
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// route
routers(app)

app.listen(port, () => {
	console.log(`app listening on port ${port}`)
})
