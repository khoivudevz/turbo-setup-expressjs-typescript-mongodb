import mongoose from 'mongoose'

mongoose.set('strictQuery', false)
async function connectMongoDB() {
	if (process.env.MONGODB_URI) {
		try {
			const uri = `${process.env.MONGODB_URI}/${process.env.ENV}`
			await mongoose.connect(uri, {})
			console.log('connect mongodb success')
		} catch (error) {
			console.log('connect mongodb failed')
			process.exit(1)
		}
	}
}

export default connectMongoDB
