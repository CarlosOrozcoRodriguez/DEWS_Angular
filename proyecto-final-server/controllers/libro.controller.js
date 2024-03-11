const db = require("../models");
const Libro = db.libros;

//Las funciones del CRUD son suministradas por el modelo de moongose
// Crear y guardar
exports.create = (req, res) => {
    if (!req.body.titulo) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Crear un libro
    const libro = new Libro({
        titulo: req.body.titulo,
        argumento: req.body.argumento,
        enCatalogo: req.body.enCatalogo ? req.body.enCatalogo : false
    });

    // Guardar el libro en la base de datos
    libro
        .save(libro)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error creando el libro."
            });
        });
};

// Leer todos los libros.
exports.findAll = (req, res) => {
    const titulo = req.query.titulo;
    var condition = titulo ? { titulo: { $regex: new RegExp(titulo), $options: "i" } } : {};

    Libro.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error buscando los libros."
            });
        });
};

// Leer un unico libro
exports.findOne = (req, res) => {
    const id = req.params.id;

    Libro.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Libro no encontrado, con id: " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Erro buscando libro con id=" + id });
      });
  };

// Actualizar un libro por el id en la petición
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "¡El libro no puede estar vacío!"
        });
      }
    
      const id = req.params.id;
    
      Libro.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `No se pudo actualizar el libro con id=${id}. Libro no encontrado!`
            });
          } else res.send({ message: "Libro actualizado satisfactoriamente." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error actualizando el libro con id=" + id
          });
        });
    };

// Borrar un libro por el id
exports.delete = (req, res) => {
    const id = req.params.id;

    Libro.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `No se pudo borrar el libro con id=${id}. Libro no encontrado!`
          });
        } else {
          res.send({
            message: "Libro borrado satisfactoriamente!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "No se pudo borrar el libro con id=" + id
        });
      });
  };

// Borrar todos los libros (Esto deberia ser un crimen en la vida real)
exports.deleteAll = (req, res) => {
    Libro.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} libros fueron borrados satisfactoriamente!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error al borrar todos los libros."
      });
    });
};

// LeerRodoslos libros en catalogo
exports.findAllEnCatalogo = (req, res) => {
    Libro.find({ enCatalogo: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error al leer los libros en catalogo."
      });
    });
};