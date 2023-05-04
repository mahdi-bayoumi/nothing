export class user{
    id?:number;
    name?:string;
    email?:string;
    mobile?: number;
    password?:string;
    title?:string;
    skills?:string;
    experience?:string;
    constructor(id: number,name: string,email:string,mobile: number,password: string,title:string,skills:string,experience:string) {
        this.id = id;
        
        this.name= name;
        this.email = email;
        this.mobile= mobile;
    
        this.password= password;
        this.title= title;
        this.skills= skills;
        this.experience=experience;
    }

    
    public getid(){
        return this.id;
    }
    
}