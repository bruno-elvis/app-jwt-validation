import sign from "./jwt/sign";

sign({
    exp: 1,

    data: {
        sub: 'opa',
        roles: ['admin', 'master']
    },
    
    secret: 'epa' 

});