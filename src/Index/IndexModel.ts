export class IndexModel {
    private message: string;

    constructor() {
        this.message = "Bienvenido al Home!";
    }

    public getMessage(): string {
        return this.message;
    }
}
