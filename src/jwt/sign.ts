import { createHmac } from 'node:crypto'; // método para geração de chaves HMAC

interface ISignOptions {
    data: Record<string, any>;
    exp: number;
    secret: string;

};

export default function sign(options: ISignOptions) {
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
        ...options.data,
        iat: Date.now(),
        exp: options.exp

    };

    const base64EncodedPayload = Buffer
    .from(JSON.stringify(payload))
    .toString("base64url");
    
    //Signature
    const hmac = createHmac('sha256', options.secret); // Geração da chave/instância HMAC

    const signature = hmac.update(`${base64EncodedHeader}.${base64EncodedPayload}`)
    .digest('base64url'); // Calcula o resumo HMAC de todos os dados passados através das informações do token recebidas
    
    // Por fim retorna o token no padrão JWT
    return `${base64EncodedHeader}.${base64EncodedPayload}.${signature}`;

    
    
};
