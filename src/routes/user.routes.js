const express               =  require('express');
const router                =  express.Router();
const userController        =  require('../controllers/user.controller');
const auth                  =  require('../middleware/auth.middleware');
const awaitHandlerFactory   =  require('../middleware/awaitHandlerFactory.middleware');
const Role                  =  require('../utils/userRoles.utils')
const {createUserSchema,updateUserSchema,validateLogin}  = require('../middleware/validators/Validator.middleware');

router.get('/',auth(),awaitHandlerFactory(userController.getAllUsers));
router.get('/id/:id',auth(),awaitHandlerFactory(userController.getUserByuserName));
router.get('/username/:username',auth(),awaitHandlerFactory(userController.getUserByuserName));
router.get('/whoami',auth(),awaitHandlerFactory(userController.getCurrentUser));
router.post('/',createUserSchema,awaitHandlerFactory(userController.createUser));
router.patch('/id/:id',auth(Role.Admin),updateUserSchema,awaitHandlerFactory(userController.updateUser));
router.delete('/id/:id',auth(Role.Admin),awaitHandlerFactory(userController.deleteUser));

router.post('/login',validateLogin,awaitHandlerFactory(userController.userLogin));

module.exports = router;
