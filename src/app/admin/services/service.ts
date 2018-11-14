export class ServiceObject {
    public id: String;
    public content: String;
    public create_date: String;
    public imagePath: String;
    public note: String;
    public status: StateChanged[];
    public title: String;

    constructor() {

    }
}

export class StateChanged {
    constructor(public stateId: number, public state: Boolean, public value: String) {

    }
}

