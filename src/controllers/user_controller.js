import userModel from "../models/user_model.js"
import bcrypt from "bcrypt"
import {createToken} from '../middlewares/auth.js'

const registerUser = async(req, res)=> {
    try {
        const { username, password, address, cellphone, age, email } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const userData = new userModel({
            username,
            password: hashedPassword,
            address,
            cellphone,
            age,
            email
        })
            // Guardar el registro en la base de datos
            await userData.save();
            // Enviar la respuesta al cliente
            res.status(201).json(userData);
        } catch (error) {
            res.status(500).json(error.message);
    }
}

const loginUser = async(req, res)=> {
    const {username, password}=req.body
    try {
        const users = await userModel.find();
        const user = users.find(user => user.username === username)
        if (!user) {
            return { error: "Username o password invalido" }
        }
        const passwordMatch = await bcrypt.compare(password, user.password)
        if (user && passwordMatch) {
            const token = createToken(user)
            delete user.password
            res.status(200).json({user,token})
        } else {
            return {error:"Username o password invalido"}
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export{
    registerUser,
    loginUser
}