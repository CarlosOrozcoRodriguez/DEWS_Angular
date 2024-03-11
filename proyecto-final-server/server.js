//Express construlle las api-REST
const express = require("express");
// CORS permite que el servidor expressJS acceda a recursos de otro servidor y suministra opciones
const cors = require("cors");

/// creamos la aplicación
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

// suministra las opciones de CORS a la aplicación
app.use(cors(corsOptions));

// parsea peticiones de tipo - application/json
app.use(express.json());

// parse peticiones de tipo - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// ruta base
app.get("/", (req, res) => {
  res.json({ message: "Hola mundo." });
});



const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("¡Conectado a la BD!");
  })
  .catch(err => {
    console.log("¡Error, no se pudo conectar a la BD!", err);
    process.exit();
  });


// definimos el puerto y escuchamos
const PUERTO = process.env.PORT || 8080;
app.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto: ${PUERTO}.`);
});