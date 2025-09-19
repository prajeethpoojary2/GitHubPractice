console.log("Hello via Bun!");

// My TS Object

interface Mobile {
    brand: string;
    model: string; 
    weight?: number;// optional
    color: 'black' | 'grey' | 'while'; // unions
    flashOn(): string;
    flashOff(): string;
}

const myMobile:Mobile = {
    brand: 'Samsung',
    color: "grey",
    model: "A 22",
    flashOn() {
        return "Mobile flash is On!";
    },
    flashOff() {
        return "Mobile flash is Off!";
    },
};

const myMobile:Mobile = {
    brand: 'Samsung',
    color: "grey",
    model: "A 22",
    flashOn() {
        return "Mobile flash is On!";
    },
    flashOff() {
        return "Mobile flash is Off!";
    },
};

const newMobile:Mobile = {
    brand: 'Samsung',
    color: "grey",
    model: "A 22",
    flashOn() {
        return "Mobile flash is On!";
    },
    flashOff() {
        return "Mobile flash is Off!";
    },
    weight: 0.18
}


function p(){

}


console.log("Hello via Bun!");

function nameGreeting(name:string) {

    return `Hello welcome to code craft ,${name}` 
    
}

console.log("Hello");



hi helloe how are you


function sum(num1: number, num2: number): number{
    let res = num1+num2;
    return res;
}

function product(num1: number, num2: number): number{
    let res = num1*num2;
    return res
}
function difference(num1: number, num2: number): number{
    let res = num1-num2;
    return res
}
function division(num1: number, num2: number): number{
    let res = num1/num2;
    return res
}


