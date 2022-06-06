
import { testingLib } from '../ishop';

test('should greet a person', () => {
    const init = testingLib('Mitch');
    console.log(init)
    expect(init).toBe("Hello Mitch")
})