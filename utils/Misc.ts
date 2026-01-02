import {
    firstNames,
    lastNames,
    streetNames,
    cities,
    states,
    emailDomains
} from "./DataList";

type RandomType =
    | "name"
    | "email"
    | "password"
    | "address"
    | "state"
    | "city"
    | "zipcode"
    | "mobile";


export function generateRandomData(type: RandomType): string {
    switch (type) {
        case "name":
            return `${pick(firstNames)} ${pick(lastNames)}`;

        case "email":
            return `${pick(firstNames).toLowerCase()}.${pick(lastNames).toLowerCase()}${rand(1, 99)}@example.com`;

        case "password":
            return generateStrongPassword();

        case "address":
            return `${rand(10, 999)} ${pick(streetNames)} St`;

        case "city":
            return pick(cities);

        case "state":
            return pick(states);

        case "zipcode":
            return rand(10000, 99999).toString();

        case "mobile":
            return `9${randomDigits(9)}`;

        default:
            throw new Error("Invalid random data type");
    }
}

// Helpers
function pick<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

function rand(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomDigits(length: number): string {
    return Array.from({ length }, () => Math.floor(Math.random() * 10)).join("");
}

function generateStrongPassword(): string {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const special = "@#$!";

    return (
        pick(upper.split("")) +
        pick(lower.split("")) +
        pick(number.split("")) +
        pick(special.split("")) +
        randomDigits(6)
    );
}
