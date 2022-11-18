const { Router } = require('express')
const router = Router()

const { getEncuestas, postEncuestas, putEncuestas, patchEncuestas, deleteEncuestas } =require('../controllers/Encuesta')

router.get('/',getEncuestas)
router.post('/',postEncuestas)
router.put('/',putEncuestas)
router.patch('/',patchEncuestas)
router.delete('/',deleteEncuestas)

module.exports = router