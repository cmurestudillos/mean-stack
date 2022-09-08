// Importamos Express
const express = require('express');
const router = express.Router();
// controlador para proyectos
const usuarioController = require('../controllers/usuarioController');

// Obtener todos los usuarios
router.get('/', 
    usuarioController.getUsuarios
)

// Obtener usuario por ID
router.get('/:id', 
    usuarioController.getUsuariobyId
)
// Crear un usuario
router.post('/', 
    usuarioController.agregarUsuario
);

// Actualizar usuario via ID
router.put('/:id', 
    usuarioController.actualizarUsuario
);

// Eliminar un Usuario
router.delete('/:id', 
    usuarioController.eliminarUsuarios
);

module.exports = router;