// const jose = require('jose')
// const {
//     JWE,   // JSON Web Encryption (JWE)
//     JWK,   // JSON Web Key (JWK)
//     JWKS,  // JSON Web Key Set (JWKS)
//     JWS,   // JSON Web Signature (JWS)
//     JWT,   // JSON Web Token (JWT)
//     errors // errors utilized by jose
// } = jose;


// const { JWT, JWK } = require('jose')
// const key = JWK.asKey({
//     kty: 'oct',
//     k: 'hJtXIZ2uSN5kbQfbtTNWbpdmhkV8FJG-Onbc6mxCcYg'
// })
//
// const payload = {
//     'urn:example:claim': 'foo'
// }
//
// const token = JWT.sign(payload, key, {
//     audience: ['urn:example:client'],
//     issuer: 'https://op.example.com',
//     expiresIn: '2 hours',
//     header: {
//         typ: 'JWT',
//         alg: 'HS512'
//     }
// })
// console.log(token);
//
// const { JWE } = require('jose')
// let jwe = JWE.encrypt("test", key);
// console.log(jwe);

const {JWE} = require("node-jose");
const {JWK} = require("node-jose");
const {JWS} = require("node-jose");
const {util} = require("node-jose");
var jose = require('node-jose');


var input = [{
    kid: 'hmacme',
    alg: 'HS256',
    kty: "oct",
    k: "FdFYFzERwC2uCBB46pZQi4GG85LujR8obt-KWRBICVQ",
    use: "enc"
}];


// var input = keys = [{
//     "kty": "RSA",
//     "kid":"pdmN_UI10XD6wy44jm-JkHmJOFxevse_2jio8cH1lRw",
//     "use": "enc",
//     "n":"3ZWrUY0Y6IKN1qI4BhxR2C7oHVFgGPYkd38uGq1jQNSqEvJFcN93CYm16_G78FAFKWqwsJb3Wx-nbxDn6LtP4AhULB1H0K0g7_jLklDAHvI8yhOKlvoyvsUFPWtNxlJyh5JJXvkNKV_4Oo12e69f8QCuQ6NpEPl-cSvXIqUYBCs",
//     "e": "AQAB",
//     "alg": "RSA-OAEP",
//     "key_ops":["wrap","verify"]
// }];
var keystore = jose.JWK.createKeyStore();
// console.log(keystore.toJSON(true))
//
jose.JWK.asKeyStore(input)
    .then(function (result) { 
        // {result} is a jose.JWK.KeyStore
        keystore = result;
        console.log("keystore:"+keystore.toJSON(true))
    }).catch(function (reason) {
        console.log("error: " + reason);
    }
);
// var key = (await JWK.asKey(input));
// console.log(keystore.toJSON(true))

