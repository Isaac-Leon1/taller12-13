import app from './server.js'
import conexionMongoDB from './database.js';

conexionMongoDB(); // Iniciar la conexion a MongoDB Atlas

// Iniciar el servidor
app.listen(app.get('port'),()=>{
    console.log(`Server ok on ${app.get('port')}`);
})