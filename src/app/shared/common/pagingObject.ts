export class pagingObject {
    public pageCount: number;
    public startPage: number;
    public start: number;
    public previous: number;
    public lastPage: number;
    public pageNo: number;
    public pageSize: number;
    public pages: any;
    constructor() {

    }
}

export interface IpagingObject {
    pageCount: number;
    startPage: number;
    start: number;
    previous: number;
    lastPage: number;
    pageNo: number;
    pageSize: number;
    pages: any;
}
