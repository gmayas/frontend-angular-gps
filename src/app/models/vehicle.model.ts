export class vehicleModel{

    constructor(id = 0, plates ='', make = '', color = '', model = '',   userid = 0, positiongpsc = 0){
        this.id =id;
        this.plates = plates; 
        this.make = make; 
        this.color = color;
        this.model = model;
        this.userid = userid;
        this.positiongps = positiongpsc;
    }

    id: number ; 
    plates: string; 
    make: string; 
    color: string;
    model: string;
    userid: number;
    positiongps: number;
    
};