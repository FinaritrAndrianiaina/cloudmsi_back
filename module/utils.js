const cryptoJs = require("crypto-js")
const HTTP_STATUS=require("./utils.http")
const KEY="qsdfghzerty852dfgholkcgvhbkjqskbbhdbhcsbhcdshcdhcsbkqehjqsvej8453vqsvhjqnrfvbl"
const jwt=require("jsonwebtoken")

module.exports = {

    sendError: function (res,STATUS=HTTP_STATUS.FORBIDDEN) {
        res.status(STATUS.code).json({
            msg:STATUS.msg,
            code:STATUS.code
        })
    },
    sendSuccess: function (res, obj,STATUS=HTTP_STATUS.OK) {
        obj.msg=STATUS.msg
        obj.code=STATUS.code
        res.status(STATUS.code)
        .json(obj)
    },
    encrypt:function(clear){
        return cryptoJs.AES.encrypt(clear,KEY).toString()
    },
    decrypt:function(enc){
        return cryptoJs.AES.decrypt(enc,KEY).toString(cryptoJs.enc.Utf8)
    },
    verify:function(enc,clear){
        if(clear==this.decrypt(enc))return true
        else return false
    },
    signToken:function(payload){return jwt.sign(payload,KEY,{expiresIn:"744h"})},
    verifyToken:function(token){
        try{
            jwt.verify(token,KEY)
            return true
        }catch{return false}
    },
    verifyHeaders:function(headers){
        if(headers.authorization)
               if(this.verifyToken(headers.authorization))return true
            return false;
    },
    allowAccess:function(){
        return (req,res,next)=>{
           if(this.verifyHeaders(req.headers))next()
           else this.sendError(res,HTTP_STATUS.UNAUTHORIZED)
        }
    }
}