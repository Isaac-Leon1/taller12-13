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
    const {email, password}=req.body
    try {
        if (!email || !password) {
            // Si no se envian los datos
            res.status(400).json({msg: "Faltan datos!"})
            return
        }
        const finduser = await userModel.findOne({email});
        console.log(finduser);
        if (!finduser) {
            // Si no existe el usuario
            res.status(404).json({msg: "No existe el usuario!"})
            return
        }
        const passwordMatch = await bcrypt.compare(password, finduser.password)
        if (finduser && passwordMatch) {
            const token = createToken(user)
            delete user.password
            res.status(200).json({user,token})
        } else {
            // Si la contraseña es incorrecta
            res.status(404).json({msg: "Contraseña incorrecta!"})
        }
    } catch (error) {
        // Capturar cualquier excepcion y enviarla al cliente
        res.status(500).json({msg: error.message})
    }
}

export{
    registerUser,
    loginUser
}