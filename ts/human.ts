import {Animal} from "./animal";

export class Human implements Animal{
    private surname;

    constructor(private name: string, surname: string) {
        this.surname = surname;
    }

    print() {
        //console.log(this.name + " " + this.surname);
        console.log(`${this.name} ${this.surname}`);
    }

    live(): void {
        console.log("Uff");
    }
}