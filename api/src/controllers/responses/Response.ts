export class Response {
    public statusCode: any;
    public message: string;
    public data: object;

    constructor(data: any, message: string, statusCode?: any) {
        this.statusCode = statusCode || 200;
        this.message = message;
        if (data) {
            this.data = data;
        }
    }
}
