import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

// String de conexion al servidor (MongoDB Atlas)
let URL = process.env.URL || ""

const connectMongoDB = async () =>{
    try {
        await mongoose.connect(URL)
        console.log("Base de datos conectada")
    } catch (error) {
        console.log(error)
    }
}

// Exportar la conexion
export default connectMongoDB;