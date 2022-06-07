
import { icrypt } from '../ishop';
console.log('numeric',icrypt().random('numeric', 12))
console.log('alphanumeric:',icrypt().random('alphanumeric', 12))
console.log('uuid',icrypt().random('uuid'))

test('Shoud generate a random characters, integers or uuid', () => {
    const init = 'Welcome to ishop.africa crypto service'
    expect(init).toBe("Welcome to ishop.africa crypto service")
})
test('should return a 36 digit alphanumeric string', ()=> {
    expect(icrypt().random('uuid').length).toBe(36)
})
test('should return a 12 digit alphanumeric string', ()=> {
    expect(icrypt().random('alphanumeric', 12).length).toBe(12)
})

test('should return an error', ()=> {
    expect(icrypt().random('numeric', 3)).toBe('Length value shou be an even number not an old number')
})

test('should return 8 numeric digits ', ()=> {
    expect(icrypt().random('numeric').length).toBe(8)
})