import generateSignature from "./generateSignature";

interface ISignOptions {
    data: Record<string, any>;
    exp: number;
    secret: string;

};

export default function sign(options: ISignOptions) : string {
    const { data, exp, secret } = options;
    //Header
    const header = {
        alg: 'HS256',
        typ: 'JWT'

    };
    
    const base64EncodedHeader = Buffer
    .from(JSON.stringify(header))
    .toString("base64url");

    //Payload
    const payload = {
        ...data,
        iat: Date.now(),
        exp

    };

    const base64EncodedPayload = Buffer
    .from(JSON.stringify(payload))
    .toString("base64url");

    //Signature
    const signature = generateSignature({
        header: base64EncodedHeader,
        payload: base64EncodedPayload,
        secret

    });    
    
    // Por fim retorna o token no padrão JWT
    return `${base64EncodedHeader}.${base64EncodedPayload}.${signature}`;
    
};
