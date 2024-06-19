<h1>API Incidents</h1>
<div align="center">
  <img 
    src="https://github.com/Isaac-Leon1/taller10-11/assets/123756226/d02d5891-cd00-494d-a751-d2b02f3c3cbe"
    alt="Contenido extraido de la API"
    style="width: 80%;"
    >
</div>
<p>Esta API RESTful nos brinda información acerca de los incidentes relacionados con la delincuencia en el Ecuador.</p>

<ul><li><h2>Requerimientos</h2></li></ul>

<p>Para poder utilizar la API Incidents, se necesita tener instalado en el sistema lo siguiente:</p>

<ul>
    <li>Node.js</li>
    <li>npm</li>
    <li>bcrypt</li>
    <li>dotenv</li>
    <li>jsonwebtoken</li>
    <li>express.js</li>
    <li>mongoose</li>
</ul>

<ul><li><h2>Como funciona la API</h2></li></ul>

<p>La API Incidents nos permite obtener información acerca de los incidentes relacionados con la delincuencia en el Ecuador. Para ello, se debe realizar una petición HTTP GET a la siguiente URL:</p>

<ul><li><p>LISTAR TODOS LOS INCIDENTES</p></li></ul>

<p>Para tener toda la información almacenada en la base de datos se utiliza una solicitud del tipo <code>GET</code> a la siguiente ruta:</p>

<pre><code>GET api/v1/incidents</code></pre>

<p>La respuesta será un objeto JSON con la siguiente estructura:</p>

<pre><code>
    [
        {
        "_id": 1,
        "type": "Asesinato",
        "date": "2021-10-10",
        "location": "Av. 9 de Octubre y Av. Quito",
        "description": "El incidente ocurrió en la Av. 9 de Octubre y Av. Quito",
        "status": "Pendiente"
        },

        {
        "_id": 2,
        "type": "Robo",
        "date": "2021-10-11",
        "location": "Av. 9 de Octubre y Av. Quito",
        "description": "El incidente ocurrió en la Av. 9 de Octubre y Av. Quito",
        "status": "Pendiente"
        }
    ]
</code></pre>

<p>En caso de que no existan incidentes registrados, la respuesta será un objeto JSON vacío:</p>

<pre><code>
    []
</code></pre>

<p>ENDPOINT: <a href="https://taller12-13.onrender.com/api/v1/incidents/">https://apincidents.onrender.com/api/v1/incidents/</a></p>


<ul><li><p>OBTENER UN SOLO INCIDENTE</p></li></ul>
<p>Para obtener un solo incidente se utiliza una solicitud del tipo <code>GET</code> a la siguiente ruta:</p>

<pre><code>GET api/v1/incidents/:id</code></pre>

<p>Donde <code>:id</code> es el identificador del incidente que se desea obtener. La respuesta será un objeto JSON con la siguiente estructura:</p>

<p>Obtendremos un incidente con el id = 1</p>

<pre><code>
    api/v1/incidents/1
</code></pre>    

<pre><code>
    {
        "_id": 1,
        "type": "Asesinato",
        "date": "2021-10-10",
        "location": "Av. 9 de Octubre y Av. Quito",
        "description": "El incidente ocurrió en la Av. 9 de Octubre y Av. Quito",
        "status": "Pendiente"
    }
</code></pre>

<p>ENDPOINT: <a href="https://taller12-13.onrender.com/api/v1/incidents/{id}">https://apincidents.onrender.com/api/v1/incidents/{id}</a></p>

<ul><li><p>OBTENER INCIDENTES POS SU TIPO</p></li></ul>

<p>Para obtener los incidentes por su tipo se utiliza una solicitud del tipo <code>GET</code> a la siguiente ruta:</p>

<pre><code>GET api/v1/incidents/?clasific={query}</code></pre>

<p>Donde <code>{query}</code> es el tipo de incidente que se desea obtener.<br>
Debe ser una cadena de caracteres que represente el tipo de incidente.<br><br>
Los tipos de incidentes que se pueden obtener son:<br>
<ul>
    <li>Asalto</li>
    <li>Robo</li>
    <li>Terrorismo</li>
    <li>Ataque</li>
    <li>Homicidio</li>
</ul>
La respuesta será un objeto JSON con la siguiente estructura:</p>

<p>Obtendremos los incidentes con el tipo = "Asesinato"</p>

<pre><code>
    api/v1/incidents/?clasific=Asesinato
</code></pre>

<pre><code>
    [
        {
        "_id": 1,
        "type": "Asesinato",
        "date": "2021-10-10",
        "location": "Av. 9 de Octubre y Av. Quito",
        "description": "El incidente ocurrió en la Av. 9 de Octubre y Av. Quito",
        "status": "Pendiente"
        }
    ]
</code></pre>

<p>ENDPOINT: <a href="https://taller12-13.onrender.com/api/v1/incidents/?clasific=Asalto">https://apincidents.onrender.com/api/v1/incidents/?clasific={query}</a></p>


<ul><li><p>CREAR UN INCIDENTE</p></li></ul>

<p>Para crear un incidente se utiliza una solicitud del tipo <code>POST</code> a la siguiente ruta:</p>

<pre><code>POST api/v1/incidents</code></pre>

<p>La solicitud debe contener un objeto JSON con la siguiente estructura:</p>

<pre><code>
    {
        "type": "tipo_de_incidente",
        "date": "fecha_del_incidente",
        "location": "ubicacion_del_incidente",
        "description": "descripcion_del_incidente",
        "status": "estado_del_incidente (En progreso, Cerrado, Desconocido)"
    }
</code></pre>

<p>ENDPOINT: <a href="https://taller12-13.onrender.com/api/v1/incidents/">https://apincidents.onrender.com/api/v1/incidents/</a></p>


<ul><li><p>MODIFICAR UN INCIDENTE</p></li></ul>

<p>Para modificar un incidente se utiliza una solicitud del tipo <code>PUT</code> a la siguiente ruta:</p>

<pre><code>PUT api/v1/incidents/:id</code></pre>

<p>Donde <code>:id</code> es el identificador del incidente que se desea modificar.<br>
La solicitud debe contener un objeto JSON con la siguiente estructura:</p>

<pre><code>
    {
        "type": "tipo_de_incidente",
        "date": "fecha_del_incidente",
        "location": "ubicacion_del_incidente",
        "description": "descripcion_del_incidente",
        "status": "estado_del_incidente (En progreso, Cerrado, Desconocido)"
    }
</code></pre>

<p>ENDPOINT: <a href= "https://taller12-13.onrender.com/api/v1/incidents/1">https://apincidents.onrender.com/api/v1/incidents/{id}</a></p>


<ul><li><p>ELIMINAR UN INCIDENTE</p></li></ul>

<p>Para eliminar un incidente se utiliza una solicitud del tipo <code>DELETE</code> a la siguiente ruta:</p>

<pre><code>DELETE api/v1/incidents/:id</code></pre>

<p>Donde <code>:id</code> es el identificador del incidente que se desea eliminar.</p>

<p>ENDPOINT: <a href="https://apincidents.onrender.com/api/v1/incidents/1">https://apincidents.onrender.com/api/v1/incidents/{id}</a></p>


<ul><li><h2>Uso local</h2></li></ul>

<p>Para utilizar la API Incidents de manera local, se debe clonar el repositorio en la máquina local y ejecutar el siguiente comando:</p>

<pre><code>npm start</code></pre>

<p>El servidor se ejecutará en el puerto predeterminado que es el puerto 3000.</p>

<p>Para acceder a la API, se debe realizar una petición HTTP GET a la siguiente URL:</p>

<pre><code>http://localhost:3000/api/v1/incidents</code></pre>


<ul><li><p>Configuraciones adicionales</p></li></ul>

<p>El proyecto hace uso de variables de entorno, para lo cual, se debe especificar el siguiente contenido en el archivo <strong>.env</strong>:</p>

<pre><code>
    URL=String_de_tu_conexion_a_la_base_de_datos_mongoDB
</code></pre>
