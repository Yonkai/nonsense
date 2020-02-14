let decimal: number = 6; let hex: number = 0xf00d; let binary: number = 0b1010; let octal: number = 0o744; 
let notSure: any = 4; notSure = "maybe a string instead"; notSure = false; // okay, definitely a boolean
enum Color {Red = 1, Green, Blue} let colorName: string = Color[2]; console.log(colorName); // Displays 'Green' as its value is 2 above 
