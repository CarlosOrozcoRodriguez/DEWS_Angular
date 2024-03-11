module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        titulo: String,
        argumento: String,
        enCatalogo: Boolean
      },
      { timestamps: true }
    );
      // esto permite que el id se muestre en lugar de _id
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Libro = mongoose.model("libro", schema);
    return Libro;
  };
  /*
  {
  "_id": "5e363b135036a835ac1a7da8", //oso si hace falta id en lugar de _id
  "titulo": "ESdLA",
  "argumento": "un pequeño paso da lugar a la mayor aventura de todos los tiempos",
  "enCatalogo": true,
  "createdAt": "2024-03-11T04:59:31.198Z",
  "updatedAt": "2024-03-11T04:59:31.198Z",
  "__v": 0
}*/