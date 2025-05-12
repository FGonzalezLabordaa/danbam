const productos = [];

exports.getProductos = (req, res) => {
  res.json(productos);
};

exports.addProducto = (req, res) => {
  const { nombre, precio } = req.body;
  productos.push({ nombre, precio });
  res.status(201).json({ mensaje: "Producto agregado" });
};
