import {Request, Response, RequestHandler} from 'express'
import bcrypt from 'bcrypt'
import dayjs from 'dayjs'
import UserModel from '@/app/models/UserModel'

class UserController {
	signup: RequestHandler = async (req, res) => {
		const {email, password} = req.body
		const hashedPassword = await bcrypt.hash(
			password,
			parseInt(process.env.BYCRYPT_HASH!)
		)

		try {
			const user = new UserModel({
				email,
				password: hashedPassword,
			})

			const isEmailDuplicate = await UserModel.exists({email: user.email})

			if (isEmailDuplicate) {
				res.status(401).send('This email is already registered.')
				return
			}

			const savedUser = await user.save()
			res.json({
				id: user._id,
				email: user.email,
				token: savedUser.token,
			})
		} catch (err) {
			console.error('Sign up error ===>', err)
			res.status(500).send('Server error')
		}
	}

	login: RequestHandler = async (req, res) => {
		try {
			const {email, password} = req.body

			const user = await UserModel.findOne({email})
			if (user) {
				const isValidPassword = await bcrypt.compare(password, user.password)
				if (isValidPassword) {
					res.json({
						id: user._id,
						email: user.email,
						token: user.token,
					})
					return
				}
				res.status(401).send('401 Unauthorized')
				return
			}
			res.status(404).send('404 Not Found')
		} catch (err) {
			console.error('Login error ===>', err)
			res.status(500).send('Server error')
		}
	}
}

export const userController = new UserController()
