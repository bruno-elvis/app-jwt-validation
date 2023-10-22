import { createHmac } from "node:crypto";

interface IGenerateSignature {
    header: string;
    payload: string;
    secret: string;

};

export default function generateSignature(options: IGenerateSignature) : string {
    const { header, payload, secret } = options;

    const hmac = createHmac('sha256', secret); // Geração da chave/instância HMAC

    return hmac.update(`${header}.${payload}`)
    .digest('base64url'); // Calcula o resumo HMAC de todos os dados passados através das informações do token recebidas

};