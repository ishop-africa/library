import { randomBytes, randomUUID } from "crypto";
import { IRandomizer, randomizerCharTypes } from "../dto";
import { IcryptoDto } from "../dto/iacrypto-service-dto";

export class IaCryptoService implements IcryptoDto {
    random(options: randomizerCharTypes, length: number = 8): string {

        const chars = {
            numeric: '0123456789',
            alphanumeric: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',
            uuid: ''
        }
        let result = '';
        if (options === 'uuid') {
            result = randomUUID()
        } else {
            const byteData = (randomBytes)(length)
            if (length % 2 !== 0) { result = "Length value shou be an even number not an old number" }
            else {

                for (let d = 0; d < byteData.length; d++) {
                    result += chars[options][byteData.readUInt8(d) % chars[options].length]
                }
            }
        }

        return result;
    }

}