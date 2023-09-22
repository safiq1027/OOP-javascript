
//normal functional code
/*
let name="Sakib Al Hasan";
let birthday = "1987-03-24";
let monthlySalary = 200000;
let noOfMonths = 12;

function calculate_age(dob){
    const diff_ms = Date.now()-new Date(dob).getTime();
    const age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear()-1970);
}

function getSalary(monthlySalary,noOfMonths){
    return (monthlySalary*noOfMonths).toLocaleString();
}

console.log(calculate_age(birthday));
console.log(getSalary(monthlySalary,noOfMonths));

*/

// javaScript object way
/*
const sakib={
     name:"Sakib Al Hasan",
     birthday : "1987-03-24",
     monthlySalary : 200000,
     noOfMonths : 12,
     calculate_age(){
        const diff_ms = Date.now()-new Date(this.birthday).getTime();
        const age_dt = new Date(diff_ms);
    
        return Math.abs(age_dt.getUTCFullYear()-1970);
    },
    getSalary(){
        return (this.monthlySalary*this.noOfMonths).toLocaleString();
    },
   
}

console.log(sakib.calculate_age());
console.log(sakib.getSalary());
// eikhne function ghulo call korar smy parameter lage na..pasha pashi sakib related sob ghulo ek jaygate Encapsulated obothay ache...

*/


//OOP class 

class player {
    constructor(name,birthday,monthlySalary,noOfMonths){
        this.name = name;
        this.birthday = birthday;
        this.monthlySalary = monthlySalary;
        this.noOfMonths = noOfMonths;
    }

    calculate_age(){
        const diff_ms = Date.now()-new Date(this.birthday).getTime();
        const age_dt = new Date(diff_ms);
    
        return Math.abs(age_dt.getUTCFullYear()-1970);
    }

    getSalary(){
        return (this.monthlySalary*this.noOfMonths).toLocaleString();
    }

}

const sakib = new player("Sakib","1987-03-24",20000000,12);

const tamin = new player("Tamim","1980-03-24",25000000,12);
console.log(sakib.calculate_age());
console.log(sakib.getSalary());
console.log(tamin.getSalary());
/* ekhne player related sob kichu eksathe encapsulated kore rakha...
player j kono jinis lagle ekh theke access kora jabe..
ei doroner boro project e same typer er jinis ghulo ek sathe kore rkha tai ENCAPSULATION.

private korar jonno javascript e # then property dile hbe,,,
private kore dile bahir theke Access kora jay na but vitorer function ghulo te kaj korbe..
example #name #birthDay etc

constructor(name,birthday,monthlySalary,noOfMonths){
        this.#name = name;
        this.#birthday = birthday;
        this.#monthlySalary = monthlySalary;
        this.#noOfMonths = noOfMonths;
    }

*/
