const {createHash} = require('crypto');

//create string hash 

function hash(input) { 
    return createHash('sha256').update(input).digest('base64') ;

}

let password = 'hi-mymom' ;
const hash1 = hash(password);
console.log(hash1);

password = 'hi_mom !' ;
const hash2 = hash(password) ;
console.log(hash2) ;
const match = hash1 == hash2 ; 
console.log(match ?' good password ':' password does not match ') ;


