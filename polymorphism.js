class player {
    #name;
    #age;
    constructor(name,age){
        this.#name = name;
        this.#age = age;
    }
    getName(){
        return this.#name;
    }
    getAge(){
        return this.#age;
    }

    getPlayerDetails(){
        return `${this.#name} is ${this.#age} years old`;
    }
}

class Cricketer extends player{
    #centuries;
    constructor(name,age,centuries){
        super(name,age);
        this.#centuries = centuries;
    }
    getPlayerDetails(){
        return `${this.getName()} er boys ${this.getAge()} bochor`;
    }
}

class Footballer extends player {
    #goals
    constructor(name,age,goals){
        super(name,age);
        this.#goals = goals;
    }
}

const sakib = new Cricketer("sakib",35,15);

const Neymer = new Footballer("Neymer",37,300);
console.log(sakib.getPlayerDetails());
console.log(Neymer.getPlayerDetails());


