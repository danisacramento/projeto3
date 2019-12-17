export class Company{
    private name: string;
    private catchPhrase: string;
    private bs: string;

    public getName(): string{
        return this.name;
    }
    public getCatchPhrase(): string{
        return this.catchPhrase;
    }
    public getBs(): string{
        return this.bs;
    }
    public setName(name: string): void{
        this.name = name;
    }
    public setCatchPhrase(catchPhrase: string):void{
        this.catchPhrase = catchPhrase;
    }
    public setBs(bs: string): void{
        this.bs = bs;
    }
}