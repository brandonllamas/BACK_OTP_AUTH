//#region Reqs
const { Router } = require('express');
const { generateOtp, testOtp } = require('../app/controllers/Otp');
const router  = Router()
//#endregion

//#region 
router.post('/generate',generateOtp)
//#endregion

//#region 
module.exports = router;
//#endregion