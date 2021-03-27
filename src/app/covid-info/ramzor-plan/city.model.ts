export class City {
    public name:string;
    public color:string;
    public grade:number;
    public newPatients:number;
    public positiveTestPerc:number;
    public positiveChange:number;
    public activePatients:number;

    constructor(name: string, color:string, grade:number, newPatients:number,positiveTestPerc:number, positiveChange:number, activePat:number){
        this.name = name;
        this.color = color;
        this.grade = grade;
        this.newPatients = newPatients;
        this.positiveTestPerc = positiveTestPerc;
        this.positiveChange = positiveChange;
        this.activePatients = activePat;
    }
}