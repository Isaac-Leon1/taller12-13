import mongoose from 'mongoose';

//crear el modelo y definir parametros
/*
* Tipo de delito -> type
* Fecha -> date (en formato dd/mm/yyyy para su correcta conversion)
* Ubicación -> location
* Descripción -> description
* Nombres de los involucrados -> involvedPeople
* Estado -> status
*/
const incidentModel = new mongoose.Schema({
    type: {
        type: String, // Tipo de dato
        required: true, // Si es requerido el dato
        trim: true // Eliminar espacios en blanco a los costados de la cadena
    },
    date: {
        type: Date, // Tipo de dato
        required: true // Si es requerido el dato
    },
    location: {
        type: String, // Tipo de dato
        required: true, // Si es requerido el dato
        trim: true // Eliminar espacios en blanco a los costados de la cadena
    },
    description: {
        type: String, // Tipo de dato
        required: true, // Si es requerido el dato
        trim: true // Eliminar espacios en blanco a los costados de la cadena
    },
    status: {
        type: String, // Tipo de dato
        required: true, // Si es requerido el dato
        trim: true // Eliminar espacios en blanco a los costados de la cadena
    }
});

// Exportar el modelo
export default mongoose.model('Incident', incidentModel);