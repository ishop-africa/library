import { SampleService } from '../ishop';

test("greet John", () => {
    const g = new SampleService().greet('mitch');
    expect(g).toBe('Hello mitch')
})