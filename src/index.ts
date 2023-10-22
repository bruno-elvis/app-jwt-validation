import sign from "./jwt/sign";
import verify from "./jwt/verify";

const secret = 'epa';

const token = sign({
    exp: Date.now() + (24 * 60 * 60 * 1000),

    data: {
        sub: 'opa',
        roles: ['admin', 'master']
    },

    secret

});

verify({ token, secret });