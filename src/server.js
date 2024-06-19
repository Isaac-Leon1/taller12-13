import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

//Rutas
import incidentRoutes from './routers/delinquency_routes.js'

import userRoutes from './routers/user_routes.js'

//Inicializacion
const app = express();

//Variable
app.set('port',process.env.port || 3000);

//Middlewares
app.use(express.json());
const corsOptions = {
    origin: 'http://localhost:5173', //URL de la app que consume el API
    credentials: true,
    methods: ['GET', 'PUT', 'POST'], //Acceso a las cookies
    optionSuccessStatus:200
};
app.use(cors(corsOptions));

//Ruta principal
app.get('/',(req,res)=>{
    res.send("Server on")
});

app.use('/api/v1', incidentRoutes);

app.use('/api/v1', userRoutes);

//Exportar app
export default  app