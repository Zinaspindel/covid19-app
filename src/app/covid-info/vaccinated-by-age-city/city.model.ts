export class City {
    public name:string;
    public firstVaccine:number;
    public secondVaccine:number;
    public activePatients:string;
    public activePatientsPer10:string;
    public dailySumGrade:number;

    constructor(name: string, firstVa:number, secondVac:number, activePat:string,activePat10:string, dailyGrade:number){
        this.name = name;
        this.firstVaccine = firstVa;
        this.secondVaccine = secondVac;
        this.activePatients = activePat;
        this.activePatientsPer10 = activePat10;
        this.dailySumGrade = dailyGrade;
    }
}