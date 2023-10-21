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

    //Payload
    const payload = {
        ...options.data,
        iat: Date.now()

    };

    //Signature

    console.log(options);
    
};
