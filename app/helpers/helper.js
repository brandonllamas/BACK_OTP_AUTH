//#region Imports
const bcrypt = require('bcrypt');
var QRCode = require('qrcode')
const { readFileSync, writeFileSync } = require('fs');
//#endregion

//#region  metodos
const saltRounds = 10;

const encriptPass = async (myPlaintextPassword) => {
    
  const hashedPassword = await new Promise((resolve, reject) => {
    bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
      if (err) reject(err)
      resolve(hash)
    });
  })

  return hashedPassword

}
const compareHash = async (myPlaintextPassword,hash) => {
    
    const hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
        // result == true
             resolve(result)
        });
    })
  
    return hashedPassword
  
  }

const writeFileQr = async (text)=>{
  let web = readFileSync('./public/Qr.html',{encoding:'utf-8'}).replace("[QR CODE]",text)
  let pos = web.indexOf('<svg')+5
  web = `${web.substring(0,pos)}width="300" height="300" ${web.substring(pos,web.length)}`
  writeFileSync('./public/qrGen.html',web,{encoding:'utf-8'})

}
const generateQR = async (text)=>{
  const hashedPassword = await new Promise((resolve, reject) => {
 
       QRCode.toDataURL(text,{type:'svg'},  (err, url)=>  {
        console.log(url);
        resolve(url)
    
      })
  })

  return hashedPassword
}
 


const generateQRFile = async (text)=>{
  const hashedPassword = await new Promise((resolve, reject) => {
 
       QRCode.toFile('./public/Qr/Qr.png',text,  (err, url)=>  {
        console.log(url);
        resolve(url)
    
      })
  })

  return hashedPassword
}
const validReqVar = (text)=>{
    if (text == "") {
        return false;
    }

    if (text == null) {
        return false;    
    }

    if (text == undefined) {
        return false;
    }
    return true;
}
//#endregion

//#region expors
module.exports = {
    encriptPass,
    validReqVar,
    compareHash,
    generateQR,
    writeFileQr,
    generateQRFile
}
//#endregion