import incidentModel from "../models/delinquency_model.js";

// Función para parsear la fecha (fecha esperada en formato dd/mm/yyyy)
function convertStringToDate(dateString) {
    const [day, month, year] = dateString.split('/');
    return new Date(year, month - 1, day);
}

//Metodo para obtener una lista de los controladores obtenidos de la base de datos
const getAllIncidentController = async (req, res) => {
    try {
        // Obtener todos los registros de la base de datos
        const incident = await incidentModel.find();

        //queryparams para  clasificar los tipos de incidentes
        const {clasific} = req.query; 
        if (clasific) {
            const incidentFilter = incident.filter(incident => incident.type === clasific);
            return res.status(200).json(incidentFilter);
        }

        // Enviar la respuesta al cliente
        res.status(200).json(incident);
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener los incidentes'
        });
    }
};

//Metodo para obtener un regitro por su ID
const getIncidentByIDController = async (req, res) => {
    try {
        // Obtener un incidente por su ID
        const incident = await incidentModel.findById(req.params.id);
        if (!incident){ // Si no se encontro el incidente
            return res.status(404).json({
                message: 'No se encontro el incidente'
            });
        }
        // Enviar la respuesta al cliente
        res.status(200).json(incident);
    } catch (error) {
        res.status(500).json(error);
    }
}

// Metodo para crear un nuevo registro en la base de datos
const createIncidentController = async (req, res) => {
    try {
        // Extraer la informacion necesaria del cuerpo del request
        const {type, date, location, description, status} = req.body;

        // Convertir la fecha a un formato valido
        const newDate = convertStringToDate(date);

        // Crear un nuevo registro
        const newIncident = new incidentModel({
            type,
            date: newDate,
            location,
            description,
            status
        });
        // Guardar el registro en la base de datos
        await newIncident.save();
        // Enviar la respuesta al cliente
        res.status(201).json(newIncident);
    } catch (error) {
        res.status(500).json(error);
    }
}

// Eliminar un registro por su ID
const deleteIncidentController = async (req, res) => {
    try {
        // Eliminar un registro por su ID
        const incident = await incidentModel.findByIdAndDelete(req.params.id);
        if (!incident){ // Si no se encontro el incidente
            return res.status(404).json({
                message: 'No se encontro el incidente a eliminar'
            });
        }
        // Enviar la respuesta al cliente
        res.status(200).json({
            message: 'Incidente eliminado'
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

// Actualizar un registro por su ID
const updateIncidentController = async (req, res) => {
    try {
        // Extraer la informacion necesaria del cuerpo del request
        const {type, date, location, description, status} = req.body;

        // Convertir la fecha a un formato valido
        const newDate = convertStringToDate(date);

        // Actualizar un registro por su ID
        await incidentModel.findByIdAndUpdate(req.params.id, {
            type,
            date: newDate,
            location,
            description,
            status
        });
        // Enviar la respuesta al cliente
        res.status(200).json({
            message: 'Incidente actualizado'
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

//Exportar las funciones
export {
    getAllIncidentController,
    getIncidentByIDController,
    createIncidentController,
    deleteIncidentController,
    updateIncidentController
}