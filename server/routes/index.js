const router = require('express').Router();
const {
  login,
  books,
  signup,
  logout,
  error404,
  serverError,
  getspecialist,
  appointmentsId,
  postSpecialist,
  appointmentsPost,
  deleteAppointment,
} = require('../controllers');
const { userVerify, checkUserExist } = require('../middlewares');

router.post('/specialist', postSpecialist);
router.get('/specialists', getspecialist);
router.get('/appointments/:id', appointmentsId);
router.get('/books/:id', books);
router.get('/logout', logout);

router.post('/appointments', appointmentsPost);
router.post('/signup', checkUserExist, signup);
router.post('/login', login);

router.delete('/appointments/:id', userVerify, deleteAppointment);

router.use(error404);
router.use(serverError);

module.exports = router;
