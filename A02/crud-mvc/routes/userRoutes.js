const express = require('express'); 
const router = express.Router(); 
const userController = require('../controllers/userController'); 
 
router.get('/', userController.index); 
router.get('/nuevo', userController.form); 
router.post('/crear', userController.create); 
router.get('/editar/:id', userController.edit); 
router.post('/actualizar/:id', userController.update); 
router.get('/eliminar/:id', userController.delete); 
 
module.exports = router; 