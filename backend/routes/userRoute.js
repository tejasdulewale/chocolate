import express from 'express'

const router = express.Router();

import newUser from '../controllers/userController.js'

const userRoute = router.post('/userRegister',newUser)

export default userRoute