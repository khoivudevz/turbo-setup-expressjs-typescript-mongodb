import mongoose from 'mongoose'
import {v4 as uuidv4} from 'uuid'
import validator from 'validator'

const Schema = mongoose.Schema

const UserSchema = new Schema(
	{
		token: {
			type: String,
			default: uuidv4(),
			required: false,
			unique: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
			maxLength: 255,
			validate: [validator.isEmail, 'invalid email'],
		},
		password: {
			type: String,
			min: 3,
			maxLength: 100,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

const UserModel = mongoose.model('User', UserSchema)

export default UserModel
