export class ResponseException extends Error {
    private status: number;

    constructor (status: number, message: string) {
        super(message);

        this.status = status;
    }

    public getStatus(): number {
        return this.status;
    }
}

export class BadRequestException extends ResponseException {
    constructor (message: string) {
        super(400, message);
    }
}

export class ConflictException extends ResponseException {
    constructor (message: string) {
        super(409, message);
    }
}
