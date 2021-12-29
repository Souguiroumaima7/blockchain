const {publicEncryption,privateDecrypt, publicEncrypt} = require('crypto') ;
const { buffer } = require('stream/consumers');
const {publicKey,privateKey} = require ('./keypair') ;

const message = 'the british are coming !' 

const encryptedData = publicEncrypt(publicKey,buffer.from(message)); 

const decryptedData = privateDecrypt(privateKey,encryptedData);

console.log(decryptedData.toString('utf-8'));
