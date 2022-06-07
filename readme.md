# Library Template

iacrypt library implements nodejs crypto package. in this librarry you can generate random strings, uuids' as well as randon numbers of any length.

## Installation   
---

    #using npm
    npm install iacrypt
    
    #using yarn 
    yarn install iacrypt
    
    #using pnpm
    pnpm install iacrypt

## Usage

----

    #app.js or app.ts

    # inport the library
    import {icrypt } from 'iacrypt'

    # generate a random 8 digit number
        icrypt().random('numeric') // 34714547 
        icrypt().random('alphanumeric') // hJtBP5Lo 
        icrypt().random('uuid') //  4f8f9444-83da-4517-bbce-8eb0c47e0ccd

    **Add second arameter - length**
        icrypt().random('numeric', 12) // 445275490657
        icrypt().random('alphanumeric', 12) // c9OK9YgKmszn

