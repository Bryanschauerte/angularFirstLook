export class User {

  constructor(
    public id:number,
    public name:string,
    public password:string,
    public addedOn?: Date,
    public email?: string,
    public typeOfUser?: string){

  }

}
