import mongoose from 'mongoose';

const userModel = new mongoose.Schema({
    username: {
        type: String, // Tipo de dato
        required: true, // Si es requerido el dato
        trim: true // Eliminar espacios en blanco a los costados de la cadena
    },
    password: {
        type: String, // Tipo de dato
        required: true // Si es requerido el dato
    },
    address: {
        type: String, // Tipo de dato
        required: true, // Si es requerido el dato
        trim: true // Eliminar espacios en blanco a los costados de la cadena
    },
    cellphone: {
        type: String, // Tipo de dato
        required: true, // Si es requerido el dato
        trim: true // Eliminar espacios en blanco a los costados de la cadena
    },
    age: {
        type: Number, // Tipo de dato
        required: true, // Si es requerido el dato
        trim: true // Eliminar espacios en blanco a los costados de la cadena
    },
    email: {
        type: String,
        required: true,
        trim: true
    }
});

// Exportar el modelo
export default mongoose.model('User', userModel);