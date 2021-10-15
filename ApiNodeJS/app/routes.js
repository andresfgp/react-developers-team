const express = require('express');
const router = express.Router();

// Importar controladores
const ProductController = require('../app/controllers/ProductController');
const CategoryController = require('../app/controllers/CategoryController');
const CustomerController = require('../app/controllers/CustomerController');
const SalesController = require('../app/controllers/SaleController');
const UserController = require('../app/controllers/UserController');
const RoleController = require('../app/controllers/RoleController');

// Products
router.post('/productos/create', ProductController.create);
router.get('/productos/getByName/:name', ProductController.showByKeyWord);
router.get('/productos', ProductController.showAll);
router.get('/productos/:id', ProductController.showById);
router.patch('/productos/:id', ProductController.update);
router.delete('/productos/:id', ProductController.delete);

//Categories
router.get('/categorias', CategoryController.showAll);
router.post('/categorias/create', CategoryController.create);

// Customers
router.post('/clientes/create', CustomerController.create);
router.get('/clientes', CustomerController.showAll);
router.get('/clientes/:id', CustomerController.showById);
router.patch('/clientes/:id', CustomerController.update);
router.delete('/clientes/:id', CustomerController.delete);

// Sales
router.post('/ventas/create', SalesController.create);
router.get('/ventas', SalesController.showAll);
router.get('/ventas/:id', SalesController.showById);
router.patch('/ventas/:id', SalesController.update);
router.delete('/ventas/:id', SalesController.delete);

// Users
router.post('/usuarios/create', UserController.create);
router.get('/usuarios', UserController.showAll);
router.get('/usuarios/:id', UserController.showById);
router.patch('/usuarios/:id', UserController.update);
router.delete('/usuarios/:id', UserController.delete);

// Roles 
router.get('/roles', RoleController.showAll);


module.exports = router;
