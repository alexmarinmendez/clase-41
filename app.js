import express from 'express'
import userRouter from './src/routes/users.js'

const app = express()
const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => console.log(`Server up on port ${PORT}`))

app.use(express.json())
app.use('/users', userRouter)