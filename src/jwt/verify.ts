import generateSignature from "./generateSignature";

interface IVerifyOptions {
    token: string;
    secret: string;

};

export default function verify(options: IVerifyOptions) {
    const { token, secret } = options;

    const [ headerSent, payloadSent, signatureSent ] = token.split('.');

    const signature = generateSignature({
        header: headerSent,
        payload: payloadSent,
        secret

    });

    if (signature !== signatureSent) {
        throw new Error('Token JWT inválid!')
        
    } else if (signature === signatureSent) {
        console.log('Token OK');
        
    };
    
};