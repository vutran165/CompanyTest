export class StatusCode {
    public successful: StatusCodeObject;
    public redirection: StatusCodeObject;
    public client: StatusCodeObject;
    public server: StatusCodeObject;
}

class StatusCodeObject {
    public id: String;
    public value: String;
}

