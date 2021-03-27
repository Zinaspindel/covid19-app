export class Hospital {
    public name:string;
    public verifiedStaff:number;
    public occupationGeneral?:number;
    public occupationCovid?:number;


    constructor(name: string, verStaff:number,occGen?:number,occCovid?:number){
        this.name = name;
        this.verifiedStaff = verStaff;
        this.occupationGeneral = occGen;
        this.occupationCovid = occCovid;
    }

}