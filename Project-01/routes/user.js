const express = require('express');
const router = express.Router();
const {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateUser
} = require('../controllers/user');

// REST Api
// returning all the users
router.get('/', handleGetAllUsers);

// returning a user by id
router.route('/:id').get(handleGetUserById).post(handleCreateUser);

// res.setHeader('X-myName', 'Priyanka');  //custom header
//Always use X to custom header

router
    .route('/:id')
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById)

module.exports = router;
