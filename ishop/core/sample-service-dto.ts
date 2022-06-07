import { ISampleDto } from "../dto";

export class SampleService implements ISampleDto {
    constructor(){}
    greet(name: string): string {
        return `Hello ${name}`
    }

}