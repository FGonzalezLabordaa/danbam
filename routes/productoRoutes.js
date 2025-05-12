const express = require("express");
const router = express.Router();
const {
  getProductos,
  addProducto,
} = require("../controllers/productoController");

router.get("/", getProductos);
router.post("/", addProducto);

module.exports = router;
