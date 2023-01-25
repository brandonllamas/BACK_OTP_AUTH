//#region Reqs
const {
    response,
    request
} = require('express');
const OTP= require('OTP');
const { generateQR, writeFileQr, generateQRFile, validReqVar } = require('../helpers/helper');
const { authenticator } = require('otplib')
//#endregion

//#region Methods
const generateOtp = async (req = request, res = response) => {

    secret = process.env.SECRET_OTP
    let otp2 = authenticator.keyuri("llamas@gmail.com", 'Prueba test', secret)
    let ur = await generateQRFile(otp2)
    res.json({
        msg:'Generado',
        code:200,
        url:ur
    })
}

const testOtp = async (req = request, res = response) => {
    const { code } = req.body;

    if(!validReqVar(code)){
        res.json({
            msg:'Error',
            code:500,
            url:ur
        })
    }

    let key = process.env.SECRET_OTP
    let isvalid = false;
    if (!authenticator.check(code+"", key)) {
        console.log("no valid");
        isvalid = false;
      }else{
        console.log("valid");
        isvalid = true;
      }

    res.json({
        msg:'Generado',
        code:200,
        isvalid
    })
}
//#endregion

//#region Exports

module.exports = {
    generateOtp,
    testOtp
}
//#endregion