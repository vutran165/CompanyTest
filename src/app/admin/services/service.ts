

class BaseObject {
    public _id: String;
    public _v: Number;
}
export class ServiceObject extends BaseObject {
    public id: String;
    public content: String;
    public create_date: String;
    public imagePath: String;
    public note: String;
    public status: StateChanged[];
    public title: String;

    constructor() {
        super();
    }
}


export class StateChanged {
    constructor(public stateId: number, public state: Boolean, public value: String) {

    }
}

