import {Express, Request, Response} from 'express'
import userRouter from './user.route'

function routes(app: Express): void {
	app.get('/', (req: Request, res: Response) => {
		res.send(`Hello World`)
	})
	app.use('/user', userRouter)
}

export default routes
