export class Workspace {
    title:string;
    dataSourceIds:string[];
    cover:string
    constructor(title:string, dataSourceIds:string[], cover="") {
        this.title = title
        this.dataSourceIds = dataSourceIds
        this.cover = cover;
    }
}
