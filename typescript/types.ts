let decimal: number = 6; let hex: number = 0xf00d; let binary: number = 0b1010; let octal: number = 0o744; 
let notSure: any = 4; notSure = "maybe a string instead"; notSure = false; // okay, definitely a boolean
enum Color {Red = 1, Green, Blue} let colorName: string = Color[2]; console.log(colorName); // Displays 'Green' as its value is 2 above 
declare function create(o: object | null): void; create({ prop: 0 }); // OK create(null); // OK create(42); // Error create("string"); // Error create(false); // Error create(undefined); // Error 
// Function returning never must have unreachable end point function error(message: string): never { throw new Error(message); } // Inferred return type is never function fail() { return error("Something failed"); } // Function returning never must have unreachable end point function infiniteLoop(): never { while (true) { } } 
function warnUser(): void { console.log("This is my warning message"); }
