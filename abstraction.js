class BetterArray {
    #items;
    constructor(){
        this.#items = [];
    }
    getItems(){
        return [...this.#items];
    }

    addItems(item){
        this.#items.push(item);
    }

    removeItem(itemToDelete){
        this.#items = this.#items.filter((item) => item!==itemToDelete);
    }

    modifyItem(itemToChange,newValue){
        const index = this.#items.indexOf(itemToChange);
        if(index!==-1){
            this.#items[index] = newValue; 
        }
    }
}

const array = new BetterArray();
array.addItems("I love Bangladesh");
array.addItems("I love JavaScript");
console.log(array.getItems());
array.removeItem("I love JavaScript");
array.modifyItem("I love Bangladesh","I love JavaScript")
console.log(array.getItems());

//abstarction =>data hide.ekhn amra array ta make kore rekhe disi as like build in funtion.
//function call dile kaj kore but kivabe kore j call dey se janar dorka  nai...