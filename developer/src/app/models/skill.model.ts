export class Skill {
    private name: string;
    private logo: string;
    private site: string;

    public constructor(n: string, l:string, s: string){
        this.name=n;
        this.logo=l;
        this.site=s;
    }

    public getName(): string{
        return this.name;
    }
    public getLogo(): string{
        return this.logo;
    }
    public getSite(): string{
        return this.site;
    }
}