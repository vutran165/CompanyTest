export interface StatusCodeObject {
    title: string;
    status: number;
    message: string;
    error: string;
}

export class HttpResponseObject {
    constructor(private title: string, message: string, error: string, private statusCode: number) { }
}

