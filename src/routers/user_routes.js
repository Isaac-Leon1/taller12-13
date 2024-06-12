import {Router} from 'express'
import { loginUser, registerUser } from '../controllers/user_controller.js'

const router = Router()

router.post('/users/register',registerUser)
router.post('/users/login',loginUser)


export default router