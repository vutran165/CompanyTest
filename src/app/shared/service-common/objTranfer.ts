import { pagingObject } from './pagingObject';

export class objTranfer {
    public data: any;
    public pagingObj: pagingObject;

    constructor(data: any, pagingObj: pagingObject) {
        this.data = data;
        this.pagingObj = pagingObj;
    }
}