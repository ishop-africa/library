import { IRandomizer, randomizerCharTypes } from "./randomizer-dto";

export interface IcryptoDto{
    random( options: randomizerCharTypes, length: number,): string | number;
}