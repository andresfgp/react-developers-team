const express = require('express');
const router = express.Router();

//Importar Middlewares
const middleware = require('../config/middleware');

// Importar controladores
const ProductController = require('../app/controllers/ProductController');
const CustomerController = require('../app/controllers/CustomerController');
const SalesController = require('../app/controllers/SaleController');
const UserController = require('../app/controllers/UserController');
const RoleController = require('../app/controllers/RoleController');
const SupplierController = require('./controllers/SupplierController');
const User = require('./models/User');

// Products
router.post('/productos/create', ProductController.create);
router.get('/productos/getByName/:name', ProductController.showByKeyWord);
router.get('/productos', middleware.checkToken, ProductController.showAll);
router.get('/productos/:id', ProductController.showById);
router.patch('/productos/:id', ProductController.update);
router.delete('/productos/:id', ProductController.delete);

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
router.post('/ventas/u/:id', SalesController.update);
router.delete('/ventas/d/:id', SalesController.delete);

// Users
router.post('/usuarios/create', UserController.create);
router.get('/usuarios', UserController.showAll);
router.get('/usuarios/:id', UserController.showById);
router.patch('/usuarios/:id', UserController.update);
router.delete('/usuarios/:id', UserController.delete);
router.post('/login', UserController.login);

// Roles 
router.get('/roles', RoleController.showAll);


module.exports = router;
