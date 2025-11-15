//oop -> class -> object

class Student{
    name: string;
    department : string;
    roll : number;
    constructor(name:string, department:string, roll:number){
        this.name= name,
        this.department=department,
        this.roll=roll
    }
}


const student1 = new Student('rimi',"cst", 7119909)
console.log(student1.department);