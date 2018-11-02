export class pagingObject {
    public pageCount: number;
    public start: number;
    public previous: number;
    public last: number;
    public pageNo: number;
    public pageSize: number;

    constructor(pageCount, start, previous,
        last, pageNo, pageSize) {
        this.pageCount = pageCount;
        this.start = start;
        this.previous = previous;
        this.last = last;
        this.pageNo = pageNo;
        this.pageSize = pageSize;
    }
}

