//#region Reqs
const { Router } = require('express');
const { testOtp } = require('../app/controllers/Otp');
const router  = Router()
//#endregion

//#region 
router.post('/login')
router.post('/valid',testOtp)

//#endregion

//#region 
module.exports = router;
//#endregion