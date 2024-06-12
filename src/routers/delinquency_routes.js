import {Router} from "express";
import { 
    getAllIncidentController, 
    getIncidentByIDController, 
    createIncidentController, 
    updateIncidentController, 
    deleteIncidentController
} from '../controllers/delinquency_controller.js';

import { verifyToken } from '../middlewares/auth.js'

// Instanciar Router
const router = Router();

// Rutas
router.get('/incidents',getAllIncidentController); // Obtener todos los incidentes
router.get('/incidents/:id',getIncidentByIDController); // Obbtener un incidente por su ID
router.post('/incidents',verifyToken,createIncidentController); // Crear un nuevo registro de incidente
router.put('/incidents/:id',verifyToken,updateIncidentController); // Actualizar un incidente por su ID
router.delete('/incidents/:id',verifyToken,deleteIncidentController); // Eliminar un incidente por su ID

// Exportar el router
export default router;