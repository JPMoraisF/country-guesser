export class Country {
    public id: number;
    public Name: string;
    public Flag: string;
    public Region: string;
    public Hints: string[];

    constructor(id: number, name: string, flag: string, region: string, hints: string[]) {
        this.id = id;
        this.Name = name;
        this.Flag = flag;
        this.Region = region;
        this.Hints = hints;
    }
}