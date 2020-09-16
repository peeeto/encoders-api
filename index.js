// const jose = require('jose')
// const {
//     JWE,   // JSON Web Encryption (JWE)
//     JWK,   // JSON Web Key (JWK)
//     JWKS,  // JSON Web Key Set (JWKS)
//     JWS,   // JSON Web Signature (JWS)
//     JWT,   // JSON Web Token (JWT)
//     errors // errors utilized by jose
// } = jose;




const { JWT, JWK } = require('jose')
const key = JWK.asKey({
    kty: 'oct',
    k: 'hJtXIZ2uSN5kbQfbtTNWbpdmhkV8FJG-Onbc6mxCcYg'
})

const payload = {
    'urn:example:claim': 'foo'
}

const token = JWT.sign(payload, key, {
    audience: ['urn:example:client'],
    issuer: 'https://op.example.com',
    expiresIn: '2 hours',
    header: {
        typ: 'JWT',
        alg: 'HS512'
    }
})
console.log(token);

const { JWE } = require('jose')
let jwe = JWE.encrypt("test", key);
console.log(jwe);