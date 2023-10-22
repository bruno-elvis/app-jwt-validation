import generateSignature from "./generateSignature";

interface IVerifyOptions {
    token: string;
    secret: string;

};

export default function verify(options: IVerifyOptions) {
    const { token, secret } = options;

    const [ headerSent, payloadSent, signatureSent ] = token.split('.');

    const decodePayload = JSON.parse(
        Buffer
            .from(payloadSent, 'base64url')
            .toString('utf-8')
    );

    const signature = generateSignature({
        header: headerSent,
        payload: payloadSent,
        secret

    });

    if (signature !== signatureSent) {
        throw new Error('Token JWT inválid!');
        
    } else if (decodePayload.exp < Date.now()) {
        throw new Error('Token JWT expired!');

    };

    return decodePayload;
};