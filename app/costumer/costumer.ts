
export class costumer{
    id?:number;
    userid?:number;
    name?:string;
    info?: string;
    
    email?:string;
    mobile?: number;
    location?:string;
    constructor(id: number, userid:number,name: string,info: string,email:string,mobile: number,location:string) {
        this.id = id;
        
        this.userid= userid;
        this.name = name;
        this.info= info;
    
        this.email= email;
        this.mobile= mobile;
        this.location= location;
    }

    public getuserid(){
        return this.userid;
    }
    public getid(){
        return this.id;
    }
}