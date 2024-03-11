module.exports = app => {
    const libros = require("../controllers/libro.controller.js");
  
    var router = require("express").Router();
  
    // Crear nuevo libro
    router.post("/", libros.create);
  
    // Leer todos los libros.
    router.get("/", libros.findAll);
  
    // Leer todos los libros en catalogo
    router.get("/published", libros.findAllEnCatalogo);
  
    // Leer un unico libro con id
    router.get("/:id", libros.findOne);
  
    // Actualizar un libro por el id en la petición
    router.put("/:id", libros.update);
  
    // Borrar un libro por el id
    router.delete("/:id", libros.delete);
  
    // Borrar todos los libros (Esto deberia ser un crimen en la vida real)
    router.delete("/", libros.deleteAll);
  
    app.use('/api/libros', router);
  };