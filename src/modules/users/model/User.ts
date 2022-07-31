import {v4 as uuidv4} from "uuid"



class User {

   

    id?:string;
    name:string;
    admin:boolean;
    created_at:Date;
    updated_at:Date;
    email:string;


    constructor(){
        this.admin = false
        if(!this.id){
            
            this.id = uuidv4();
        }
    }



}




export {User}