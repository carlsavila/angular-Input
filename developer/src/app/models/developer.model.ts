import { Skill } from "./skill.model";

export class Developer {
    private lastName: string;
    private firstname: string;
    private age: number;
    private gender: string;
    private bio: string;
    private tabSkills: Skill[];


    public constructor(ln: string, fn:string, a: number, g: string, b: string, t: Skill[]){
        this.lastName=ln;
        this.firstname=fn;
        this.age=a;
        this.gender=g;
        this.bio=b;
        this.tabSkills=t;
    }

    public getLastname(): string{
        return this.lastName;
    }
    public getFirstname(): string{
        return this.firstname;
    }
    public getAge(): number{
        return this.age;
    }

    public getGender(): string{
        return this.gender;
    }
    public getBio(): string{
        return this.bio;
    }
    public getSkill(): Skill[]{
        return this.tabSkills;
    }


}