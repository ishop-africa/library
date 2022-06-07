

export type randomizerCharTypes = "numeric"| "alphanumeric"| "uuid"

export interface IRandomizer {
    length: number, charset: randomizerCharTypes
}

export type IResponse = string | number 