import {Human} from "./human";

console.log("TypeScript");

function printTimes(text: string, count: number) {
    for (let i = 0;i < count;++i) {
        console.log(text);
    }
}

printTimes("Test", 5);
//printTimes(true, 3);

const szymon = new Human("Szymon", "Rozkocha");
szymon.print();
szymon.live();

enum Weekday {
    MONDAY = "MONDAY",
    TUESDAY = "TUESDAY",
    WEDNESDAY = "WEDNESDAY",
    THURSDAY = "THURSDAY",
    FRIDAY = "FRIDAY",
    SATURDAY = "SATURDAY",
    SUNDAY = "SUNDAY"
}
console.log("######");
for (const weekday in Weekday) {
    console.log(weekday);
}

//printTimes(szymon as any as string, 5);

console.log(Weekday);