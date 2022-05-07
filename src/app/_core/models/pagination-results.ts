export class PaginationResult<T> {

    rows: T[];
    count: number;
    page: number;
    pages: number;
    limit: number;

    constructor(rows: T[] = []) {
        this.rows = rows;
        this.count = rows.length;
        this.page = 0;
        this.pages = 1;
        this.limit = rows.length;
    }

}
